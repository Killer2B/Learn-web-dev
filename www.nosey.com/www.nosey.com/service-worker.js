importScripts('https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.4.4/lz-string.min.js');

self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim()); // Become available to all pages
});

self.addEventListener('message', async (event) => {
    if (event.data) {
        switch (event.data.type) {
            case 'DECRYPT':
                await handleDecryptMessage(event);
                break;
            case 'STORE_FEED':
                await handleStoreFeedMessage(event);
                break;
            case 'GET_FEED':
                await handleGetFeedMessage(event);
                break;
        }
    }
});

async function decrypt(text, algName, decryptKey, ivKey) {
    try {
        const algorithm = {
            name: algName,
            iv: new TextEncoder().encode(ivKey)
        };
        const key = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(decryptKey),
            algorithm,
            false, ["decrypt"]
        );

        const data = Uint8Array.from(atob(text), c => c.charCodeAt(0));

        const decrypted = await crypto.subtle.decrypt(algorithm, key, data);
        const decodedText = new TextDecoder().decode(decrypted);
        return decodedText;
    } catch (error) {
        throw error;
    }
}

//utils start db
function openDatabase() {
    return new Promise((resolve, reject) => {
        const dbRequest = indexedDB.open("FeedDatabase", 1);

        dbRequest.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('feeds')) {
                db.createObjectStore('feeds', {
                    keyPath: 'id'
                });
            }
        };

        dbRequest.onsuccess = (event) => {
            resolve(event.target.result);
        };

        dbRequest.onerror = (event) => {
            reject(event.target.errorCode);
        };
    });
}

function storeFeedData(db, response_data, policyData, app_id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['feeds'], 'readwrite');
        const store = transaction.objectStore('feeds');

        try {
            let compressed = LZString.compressToUTF16(JSON.stringify(response_data));
            store.put({
                id: `${app_id}-MY_FEED`,
                data: compressed
            });
            if (policyData) {
                store.put({
                    id: `${app_id}-MY_FEED-policyData`,
                    data: JSON.stringify(policyData)
                });
            }
            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        } catch (error) {
            reject(error);
        }
    });
}

function getFeedData(db, app_id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['feeds'], 'readonly');
        const store = transaction.objectStore('feeds');

        const request = store.get(`${app_id}-MY_FEED`);
        request.onsuccess = (event) => {
            let my_feed = event.target.result ? event.target.result.data : null;
            let parsedLocalFeed = null;
            let policy = {};
            if (my_feed) {
                my_feed = JSON.parse(LZString.decompressFromUTF16(my_feed));
                if (my_feed && Object.keys(my_feed).length > 1) {
                    parsedLocalFeed = my_feed;
                }
            }
            const policyRequest = store.get(`${app_id}-MY_FEED-policyData`);
            policyRequest.onsuccess = (event) => {
                policy = event.target.result ? JSON.parse(event.target.result.data) : {};
                resolve({
                    parsedLocalFeed,
                    policy
                });
            };
            policyRequest.onerror = (event) => {
                reject(event.target.errorCode);
            };
        };
        request.onerror = (event) => {
            reject(event.target.errorCode);
        };
    });
}
//utils end

//utils decrypts start
async function decrypt(text, algName, decryptKey, ivKey) {
    try {
        const algorithm = {
            name: algName,
            iv: new TextEncoder().encode(ivKey)
        };
        const key = await crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(decryptKey),
            algorithm,
            false, ["decrypt"]
        );

        const data = Uint8Array.from(atob(text), c => c.charCodeAt(0));

        const decrypted = await crypto.subtle.decrypt(algorithm, key, data);
        const decodedText = new TextDecoder().decode(decrypted);
        return decodedText;
    } catch (error) {
        throw error;
    }
}

//util decrypt end

//util message start
function sendMessageToClients(message) {
    self.clients.matchAll().then(clients => {
        clients.forEach(client => {
            client.postMessage(message);
        });
    }).catch(error => {
        console.error('SW', error);
    });
}
//util message end

//handlers
async function handleDecryptMessage(event) {
    const {
        text,
        algorithm,
        key,
        iv
    } = event.data.payload;
    try {
        const decryptedText = await decrypt(text, algorithm, key, iv);
        sendMessageToClients({
            type: 'DECRYPTED',
            payload: decryptedText
        });
    } catch (error) {
        sendMessageToClients({
            type: 'ERROR',
            payload: error.message
        });
    }
}

async function handleGetFeedMessage(event) {
    const {
        app_id
    } = event.data.payload;

    try {
        const db = await openDatabase();
        const feedData = await getFeedData(db, app_id);
        sendMessageToClients({
            type: 'GET_FEED_RESPONSE',
            payload: feedData
        });
    } catch (error) {
        sendMessageToClients({
            type: 'GET_FEED_ERROR',
            payload: error.message
        });
    }
}

async function handleStoreFeedMessage(event) {
    const {
        response_data,
        policyData,
        app_id
    } = event.data.payload;

    try {
        const db = await openDatabase();
        await storeFeedData(db, response_data, policyData, app_id);
        sendMessageToClients({
            type: 'STORE_FEED_SUCCESS'
        });
    } catch (error) {
        sendMessageToClients({
            type: 'STORE_FEED_ERROR',
            payload: error.message
        });
    }
}