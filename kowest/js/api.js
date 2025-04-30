// تكوين API
const API_CONFIG = {
  baseURL: "https://x-production-2451.up.railway.app",
  endpoints: {
    status: "/status",
    players: "/players",
    history: "/history"
  },
  refreshInterval: 60000 // تحديث كل دقيقة
};

// دالة للتحقق من حالة السيرفر
async function fetchServerStatus() {
  try {
    const startTime = performance.now();
    const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.status}`);
    const endTime = performance.now();
    const pingTime = Math.round(endTime - startTime);
    
    if (!response.ok) {
      throw new Error(`خطأ في الاستجابة: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      ...data,
      pingTime,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error("خطأ في جلب حالة السيرفر:", error);
    return {
      online: false,
      players: 0,
      error: error.message,
      pingTime: 0,
      timestamp: new Date().toISOString()
    };
  }
}

// دالة لجلب قائمة اللاعبين (إذا كان السيرفر يدعم هذه الميزة)
async function fetchPlayersList() {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.players}`);
    
    if (!response.ok) {
      throw new Error(`خطأ في الاستجابة: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("خطأ في جلب قائمة اللاعبين:", error);
    return { players: [] };
  }
}

// دالة لجلب سجل السيرفر (إذا كان السيرفر يدعم هذه الميزة)
async function fetchServerHistory(days = 7) {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.history}?days=${days}`);
    
    if (!response.ok) {
      throw new Error(`خطأ في الاستجابة: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("خطأ في جلب سجل السيرفر:", error);
    return { history: [] };
  }
}

// دالة لحفظ بيانات السيرفر في التخزين المحلي
// حفظ بيانات السيرفر في السجل
function saveServerData(data) {
  try {
    // الحصول على البيانات الحالية
    let historyData = localStorage.getItem('serverHistory');
    historyData = historyData ? JSON.parse(historyData) : [];
    
    // إضافة البيانات الجديدة في بداية المصفوفة
    historyData.unshift(data);
    
    // تحديد الحد الأقصى لعدد السجلات (يمكن تغييره حسب الحاجة)
    const maxEntries = 1000;
    if (historyData.length > maxEntries) {
      historyData = historyData.slice(0, maxEntries);
    }
    
    // حفظ البيانات المحدثة
    localStorage.setItem('serverHistory', JSON.stringify(historyData));
    
    return true;
  } catch (error) {
    console.error('خطأ في حفظ بيانات السجل:', error);
    return false;
  }
}

// دالة لجلب سجل السيرفر من التخزين المحلي
function getServerHistory() {
  return JSON.parse(localStorage.getItem("serverHistory") || "[]");
}

// دالة لجلب آخر حالة للسيرفر من التخزين المحلي
function getLastServerStatus() {
  return JSON.parse(localStorage.getItem("lastServerStatus") || "null");
}

// دالة لمسح سجل السيرفر من التخزين المحلي
function clearServerHistory() {
  localStorage.removeItem("serverHistory");
  return [];
}

// دالة لحساب إحصائيات السيرفر
function calculateServerStats() {
  const history = getServerHistory();
  
  if (history.length === 0) {
    return {
      uptimePercent: 0,
      maxPlayers: 0,
      avgPing: 0
    };
  }
  
  // حساب نسبة التشغيل
  const onlineCount = history.filter(item => item.online).length;
  const uptimePercent = Math.round((onlineCount / history.length) * 100);
  
  // حساب أقصى عدد لاعبين
  const maxPlayers = Math.max(...history.map(item => item.players || 0));
  
  // حساب متوسط زمن الاستجابة
  const totalPing = history.reduce((sum, item) => sum + (item.pingTime || 0), 0);
  const avgPing = Math.round(totalPing / history.length);
  
  return {
    uptimePercent,
    maxPlayers,
    avgPing
  };
}

// تصدير الدوال
window.API = {
  fetchServerStatus,
  fetchPlayersList,
  fetchServerHistory,
  saveServerData,
  getServerHistory,
  getLastServerStatus,
  clearServerHistory,
  calculateServerStats,
  CONFIG: API_CONFIG
};