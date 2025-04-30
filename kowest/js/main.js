// متغيرات عامة
let notificationsEnabled = localStorage.getItem('notifications') === 'true';
let theme = localStorage.getItem('theme') || 'light';
let autoRefresh = localStorage.getItem('autoRefresh') === 'true';
let autoRefreshInterval = null;
let lastStatus = null;
let refreshInterval = parseInt(localStorage.getItem('refreshInterval')) || 60; // بالثواني

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
  // تطبيق الثيم المحفوظ
  applyTheme();
  
  // تحديث حالة زر الإشعارات
  updateNotificationButton();
  
  // تحقق من دعم الإشعارات
  checkNotificationPermission();
  
  // تحميل التاريخ الأخير
  loadRecentHistory();
  
  // تحقق من حالة السيرفر عند تحميل الصفحة
  if (document.getElementById('statusIndicator')) {
    checkServer();
  }
  
  // تفعيل التحديث التلقائي إذا كان مفعلاً
  if (autoRefresh) {
    startAutoRefresh();
    
    // تحديث حالة زر التحديث التلقائي
    const autoRefreshBtn = document.getElementById('autoRefreshBtn');
    if (autoRefreshBtn) {
      autoRefreshBtn.classList.add('active');
      autoRefreshBtn.querySelector('i').classList.replace('fa-toggle-off', 'fa-toggle-on');
    }
  }
  
  // تهيئة عناصر التحكم في الإعدادات
  initializeSettings();
});

// وظائف التنقل والواجهة
function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  if (navMenu) {
    navMenu.classList.toggle('show');
  }
}

function applyTheme() {
  // تطبيق السمة على عنصر html بدلاً من إضافة فئات إلى body
  document.documentElement.setAttribute('data-theme', theme);
  
  // تحديث أيقونة زر التبديل
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (theme === 'dark') {
      themeIcon.className = 'fas fa-sun';
    } else {
      themeIcon.className = 'fas fa-moon';
    }
  }
}

function toggleTheme() {
  // تبديل الوضع
  theme = theme === 'dark' ? 'light' : 'dark';
  
  // حفظ الإعداد في التخزين المحلي
  localStorage.setItem('theme', theme);
  
  // تطبيق الوضع الجديد
  applyTheme();
  
  // إظهار إشعار
  showNotification(`تم تفعيل الوضع ${theme === 'dark' ? 'المظلم' : 'الفاتح'}`, 'success');
}

// وظائف الإشعارات
function toggleNotifications() {
  if (notificationsEnabled) {
    notificationsEnabled = false;
    localStorage.setItem('notifications', 'false');
    showNotification('تم إيقاف الإشعارات', 'info');
  } else {
    requestNotificationPermission();
  }
  
  updateNotificationButton();
}

function updateNotificationButton() {
  const notificationIcon = document.getElementById('notificationIcon');
  if (notificationIcon) {
    if (notificationsEnabled) {
      notificationIcon.classList.remove('fa-bell-slash');
      notificationIcon.classList.add('fa-bell');
    } else {
      notificationIcon.classList.remove('fa-bell');
      notificationIcon.classList.add('fa-bell-slash');
    }
  }
}

function requestNotificationPermission() {
  if (!("Notification" in window)) {
    showNotification('متصفحك لا يدعم الإشعارات', 'error');
    return;
  }
  
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      notificationsEnabled = true;
      localStorage.setItem('notifications', 'true');
      showNotification('تم تفعيل الإشعارات', 'success');
      updateNotificationButton();
    } else {
      showNotification('تم رفض إذن الإشعارات', 'warning');
    }
  });
}

function checkNotificationPermission() {
  if ("Notification" in window && Notification.permission === "granted") {
    notificationsEnabled = localStorage.getItem('notifications') === 'true';
  } else {
    notificationsEnabled = false;
  }
  updateNotificationButton();
}

function sendNotification(title, body) {
  if (notificationsEnabled && Notification.permission === "granted") {
    const notification = new Notification(title, {
      body: body,
      icon: 'assets/images/logo.jpg'
    });
    
    notification.onclick = function() {
      window.focus();
      notification.close();
    };
  }
}

function showNotification(message, type = 'info') {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notificationMessage');
  const notificationIcon = document.querySelector('.notification-icon');
  
  if (!notification || !notificationMessage) return;
  
  // تعيين الرسالة
  notificationMessage.textContent = message;
  
  // تعيين الفئة المناسبة للإشعار
  notification.className = `notification notification-${type}`;
  
  // تعيين الأيقونة المناسبة
  if (notificationIcon) {
    switch (type) {
      case 'success':
        notificationIcon.className = 'notification-icon fas fa-check-circle';
        break;
      case 'warning':
        notificationIcon.className = 'notification-icon fas fa-exclamation-triangle';
        break;
      case 'error':
        notificationIcon.className = 'notification-icon fas fa-times-circle';
        break;
      default:
        notificationIcon.className = 'notification-icon fas fa-info-circle';
    }
  }
  
  // إظهار الإشعار
  notification.classList.add('show');
  
  // إخفاء الإشعار بعد 5 ثوانٍ
  setTimeout(closeNotification, 5000);
}

function closeNotification() {
  const notification = document.getElementById('notification');
  if (notification) {
    notification.classList.remove('show');
  }
}

// وظائف التحديث التلقائي
function toggleAutoRefresh() {
  const autoRefreshBtn = document.getElementById('autoRefreshBtn');
  
  if (autoRefresh) {
    stopAutoRefresh();
    autoRefresh = false;
    localStorage.setItem('autoRefresh', 'false');
    
    if (autoRefreshBtn) {
      autoRefreshBtn.classList.remove('active');
      autoRefreshBtn.querySelector('i').classList.replace('fa-toggle-on', 'fa-toggle-off');
    }
    
    showNotification('تم إيقاف التحديث التلقائي', 'info');
  } else {
    startAutoRefresh();
    autoRefresh = true;
    localStorage.setItem('autoRefresh', 'true');
    
    if (autoRefreshBtn) {
      autoRefreshBtn.classList.add('active');
      autoRefreshBtn.querySelector('i').classList.replace('fa-toggle-off', 'fa-toggle-on');
    }
    
    showNotification('تم تفعيل التحديث التلقائي', 'success');
  }
}

function startAutoRefresh() {
  // إيقاف أي فاصل زمني سابق
  stopAutoRefresh();
  
  // بدء فاصل زمني جديد
  autoRefreshInterval = setInterval(() => {
    checkServer();
  }, refreshInterval * 1000);
}

function stopAutoRefresh() {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
    autoRefreshInterval = null;
  }
}

function updateRefreshInterval(seconds) {
  refreshInterval = seconds;
  localStorage.setItem('refreshInterval', seconds.toString());
  
  if (autoRefresh) {
    startAutoRefresh();
  }
  
  showNotification(`تم تعيين الفاصل الزمني إلى ${seconds} ثانية`, 'success');
}

// وظائف التحقق من السيرفر
function checkServer() {
  // تحديث واجهة المستخدم لتظهر أنه جاري التحقق
  const statusIndicator = document.getElementById('statusIndicator');
  const statusText = document.getElementById('status');
  const playerCount = document.getElementById('playerCount');
  const pingTime = document.getElementById('pingTime');
  const lastCheck = document.getElementById('lastCheck');
  
  if (statusIndicator) statusIndicator.className = 'status-indicator';
  if (statusText) statusText.textContent = 'جاري التحقق...';
  if (statusText) statusText.className = 'status status-pending';
  if (playerCount) playerCount.textContent = '-';
  if (pingTime) pingTime.textContent = '-';
  
  // إظهار أيقونة التحميل
  const checkButton = document.querySelector('.primary-btn');
  if (checkButton) {
    checkButton.innerHTML = '<div class="loading-spinner"></div> جاري التحقق';
    checkButton.disabled = true;
  }
  
  // الحصول على الوقت الحالي
  const now = new Date();
  const currentTime = formatTime(now);
  const currentDate = formatDate(now);
  
  if (lastCheck) lastCheck.textContent = currentTime;
  
  const startTime = Date.now();
  
  // التحقق من حالة السيرفر
  fetchServerStatus()
    .then(data => {
      const endTime = Date.now();
      const pingTime = endTime - startTime;
      
      // تحديث واجهة المستخدم بناءً على حالة السيرفر
      let status = 'offline';
      let statusClass = 'status-error';
      let statusMessage = 'غير متصل';
      let state, players;
      
      if (data.online) {
        if (pingTime > 500) {
          status = 'warning';
          statusClass = 'status-warning';
          statusMessage = 'متصل (استجابة بطيئة)';
          state = "⛔ استجابة بطيئة";
        } else if (data.players > 0) {
          status = 'online';
          statusClass = 'status-success';
          statusMessage = 'متصل';
          state = "✅ شغّال";
          players = data.players;
        } else {
          state = "⛔ لا لاعبين";
          players = 0;
          status = 'warning';
          statusClass = 'status-warning';
          statusMessage = "متصل (بدون لاعبين)";
        }
      } else {
        state = "❌ غير شغّال";
        players = "-";
      }
      
      // تحديث مؤشر الحالة
      if (statusIndicator) {
        statusIndicator.className = `status-indicator ${status}`;
      }
      
      // تحديث نص الحالة
      if (statusText) {
        statusText.textContent = statusMessage;
        statusText.className = `status ${statusClass}`;
      }
      
      // تحديث عدد اللاعبين
      if (playerCount) {
        playerCount.textContent = data.online ? `${data.players} / ${data.maxPlayers}` : '-';
      }
      
      // تحديث وقت الاستجابة
      if (pingTime) {
        pingTime.textContent = data.online ? `${pingTime} مللي ثانية` : '-';
      }
      
      // إضافة إلى التاريخ
      const historyEntry = {
        date: currentDate,
        time: currentTime,
        state: state,
        players: data.online ? data.players : "-",
        ping: `${pingTime} مللي ثانية`,
        status: status
      };
      saveServerData(historyEntry);
      
      // التحقق من تغيير الحالة للإشعارات
      checkStatusChange(data.online, data.players);
      
      // إعادة تمكين زر التحقق
      if (checkButton) {
        checkButton.innerHTML = '<i class="fas fa-sync-alt"></i> إعادة التحقق';
        checkButton.disabled = false;
      }
      
      return data;
    })
    .catch(error => {
      console.error('Error checking server:', error);
      
      // تحديث واجهة المستخدم لتظهر أن هناك خطأ
      if (statusIndicator) {
        statusIndicator.className = 'status-indicator offline';
      }
      
      if (statusText) {
        statusText.textContent = 'خطأ في الاتصال';
        statusText.className = 'status status-error';
      }
      
      if (playerCount) playerCount.textContent = "-";
      if (pingTime) pingTime.textContent = "-";
      
      const time = formatTime(new Date());
      if (lastCheck) lastCheck.textContent = time;
      
      // إضافة إلى التاريخ
      const historyEntry = {
        date: currentDate,
        time: time,
        state: "⚠️ تعذر الاتصال",
        players: "-",
        ping: "-",
        status: "error"
      };
      saveServerData(historyEntry);
      
      // إعادة تمكين زر التحقق
      if (checkButton) {
        checkButton.innerHTML = '<i class="fas fa-sync-alt"></i> إعادة التحقق';
        checkButton.disabled = false;
      }
      
      // إظهار إشعار بالخطأ
      showNotification('تعذر الاتصال بالسيرفر. يرجى التحقق من اتصالك بالإنترنت.', 'error');
    });
}

function checkStatusChange(isOnline, playerCount) {
  // إذا كانت هذه هي المرة الأولى للتحقق، فقط احفظ الحالة
  if (lastStatus === null) {
    lastStatus = { online: isOnline, players: playerCount };
    return;
  }
  
  // التحقق من تغيير الحالة
  if (lastStatus.online !== isOnline) {
    if (isOnline) {
      sendNotification('السيرفر متصل الآن', 'تم تشغيل السيرفر بنجاح');
      showNotification('السيرفر متصل الآن', 'success');
    } else {
      sendNotification('السيرفر غير متصل', 'السيرفر غير متاح حالياً');
      showNotification('السيرفر غير متصل', 'error');
    }
  } 
  // التحقق من تغيير عدد اللاعبين (فقط إذا كان السيرفر متصل)
  else if (isOnline && lastStatus.online && lastStatus.players !== playerCount) {
    // إذا كان هناك لاعبين جدد
    if (playerCount > lastStatus.players) {
      sendNotification('لاعبين جدد', `عدد اللاعبين الآن: ${playerCount}`);
      showNotification(`عدد اللاعبين الآن: ${playerCount}`, 'info');
    }
    // إذا غادر جميع اللاعبين
    else if (playerCount === 0 && lastStatus.players > 0) {
      sendNotification('لا يوجد لاعبين', 'غادر جميع اللاعبين السيرفر');
      showNotification('غادر جميع اللاعبين السيرفر', 'warning');
    }
  }
  
  // تحديث الحالة الأخيرة
  lastStatus = { online: isOnline, players: playerCount };
}

// وظائف التاريخ
function formatTime(date) {
  return date.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function formatDate(date) {
  return date.toLocaleDateString('ar-EG', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

function addToHistory(time, state, players, ping) {
  const tableBody = document.querySelector("#recentHistoryTable tbody");
  if (!tableBody) return;
  
  const row = document.createElement("tr");
  row.innerHTML = `<td>${time}</td><td>${state}</td><td>${players}</td><td>${ping}</td>`;
  
  // إضافة لون خلفية حسب الحالة
  if (state.includes("✅")) {
    row.classList.add('status-success-row');
  } else if (state.includes("⛔")) {
    row.classList.add('status-warning-row');
  } else if (state.includes("❌") || state.includes("⚠️")) {
    row.classList.add('status-error-row');
  }
  
  tableBody.prepend(row);
  
  // الاحتفاظ فقط بآخر 5 صفوف في العرض الرئيسي
  while (tableBody.children.length > 5) {
    tableBody.removeChild(tableBody.lastChild);
  }
  
  saveHistory();
}

function saveHistory() {
  // الحصول على جميع بيانات التاريخ من جميع الصفوف في جميع الجداول
  const allRows = document.querySelectorAll("table tbody tr");
  
  const history = Array.from(allRows).map(row => ({
    time: row.children[0].textContent,
    date: formatDate(new Date()),
    state: row.children[1].textContent,
    players: row.children[2].textContent,
    ping: row.children.length > 3 ? row.children[3].textContent : "-",
    status: row.classList.contains('status-success-row') ? 'online' : 
            row.classList.contains('status-warning-row') ? 'warning' : 'offline'
  }));
  
  // تخزين التاريخ في التخزين المحلي
  localStorage.setItem("serverHistory", JSON.stringify(history));
}

function loadRecentHistory() {
  const tableBody = document.querySelector("#recentHistoryTable tbody");
  if (!tableBody) return;
  
  const historyData = localStorage.getItem("serverHistory");
  if (!historyData) return;
  
  try {
    const history = JSON.parse(historyData);
    
    // تفريغ الجدول أولاً
    tableBody.innerHTML = "";
    
    // إضافة آخر 5 سجلات فقط
    const recentHistory = history.slice(0, 5);
    
    recentHistory.forEach(entry => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${entry.time}</td><td>${entry.state}</td><td>${entry.players}</td><td>${entry.ping}</td>`;
      
      // إضافة الفئة المناسبة للصف
      if (entry.status === 'online') {
        row.classList.add('status-success-row');
      } else if (entry.status === 'warning') {
        row.classList.add('status-warning-row');
      } else {
        row.classList.add('status-error-row');
      }
      
      tableBody.appendChild(row);
    });
    
    // إذا لم تكن هناك سجلات، أضف صفًا يشير إلى ذلك
    if (recentHistory.length === 0) {
      const emptyRow = document.createElement("tr");
      const emptyCell = document.createElement("td");
      emptyCell.colSpan = 4;
      emptyCell.textContent = "لا توجد سجلات سابقة";
      emptyCell.className = "empty-history";
      emptyRow.appendChild(emptyCell);
      tableBody.appendChild(emptyRow);
    }
  } catch (error) {
    console.error('Error loading history:', error);
    
    // إضافة صف يشير إلى وجود خطأ
    const errorRow = document.createElement("tr");
    const errorCell = document.createElement("td");
    errorCell.colSpan = 4;
    errorCell.textContent = "حدث خطأ أثناء تحميل السجلات";
    errorCell.className = "error-history";
    errorRow.appendChild(errorCell);
    tableBody.appendChild(errorRow);
  }
}

function loadFullHistory() {
  const tableBody = document.querySelector("#fullHistoryTable tbody");
  if (!tableBody) return;
  
  const historyData = localStorage.getItem("serverHistory");
  if (!historyData) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-history">لا توجد سجلات سابقة</td>
      </tr>
    `;
    return;
  }
  
  try {
    const history = JSON.parse(historyData);
    
    // تفريغ الجدول أولاً
    tableBody.innerHTML = "";
    
    // تجميع السجلات حسب التاريخ
    const groupedHistory = {};
    
    history.forEach(entry => {
      if (!groupedHistory[entry.date]) {
        groupedHistory[entry.date] = [];
      }
      
      groupedHistory[entry.date].push(entry);
    });
    
    // إضافة السجلات إلى الجدول مرتبة حسب التاريخ
    Object.keys(groupedHistory).sort().reverse().forEach(date => {
      // إضافة صف التاريخ
      const dateRow = document.createElement("tr");
      dateRow.className = "date-row";
      dateRow.innerHTML = `<td colspan="5">${date}</td>`;
      tableBody.appendChild(dateRow);
      
      // إضافة سجلات هذا التاريخ
      groupedHistory[date].forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${entry.time}</td>
          <td>${entry.state}</td>
          <td>${entry.players}</td>
          <td>${entry.ping}</td>
        `;
        
        // إضافة الفئة المناسبة للصف
        if (entry.status === 'online') {
          row.classList.add('status-success-row');
        } else if (entry.status === 'warning') {
          row.classList.add('status-warning-row');
        } else {
          row.classList.add('status-error-row');
        }
        
        tableBody.appendChild(row);
      });
    });
    
    // إذا لم تكن هناك سجلات، أضف صفًا يشير إلى ذلك
    if (history.length === 0) {
      const emptyRow = document.createElement("tr");
      const emptyCell = document.createElement("td");
      emptyCell.colSpan = 5;
      emptyCell.textContent = "لا توجد سجلات سابقة";
      emptyCell.className = "empty-history";
      emptyRow.appendChild(emptyCell);
      tableBody.appendChild(emptyRow);
    }
  } catch (error) {
    console.error('Error loading full history:', error);
    
    // إضافة صف يشير إلى وجود خطأ
    const errorRow = document.createElement("tr");
    const errorCell = document.createElement("td");
    errorCell.colSpan = 5;
    errorCell.textContent = "حدث خطأ أثناء تحميل السجلات";
    errorCell.className = "error-history";
    errorRow.appendChild(errorCell);
    tableBody.appendChild(errorRow);
  }
}

function clearHistory() {
  if (confirm("هل أنت متأكد من أنك تريد مسح جميع السجلات؟")) {
    localStorage.removeItem("serverHistory");
    
    // تحديث جداول التاريخ
    const recentHistoryTable = document.querySelector("#recentHistoryTable tbody");
    if (recentHistoryTable) {
      recentHistoryTable.innerHTML = `
        <tr>
          <td colspan="4" class="empty-history">لا توجد سجلات سابقة</td>
        </tr>
      `;
    }
    
    const fullHistoryTable = document.querySelector("#fullHistoryTable tbody");
    if (fullHistoryTable) {
      fullHistoryTable.innerHTML = `
        <tr>
          <td colspan="5" class="empty-history">لا توجد سجلات سابقة</td>
        </tr>
      `;
    }
    
    showNotification("تم مسح جميع السجلات بنجاح", "success");
  }
}

// وظائف الإعدادات
function initializeSettings() {
  // تهيئة إعدادات الثيم
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    themeSelect.value = theme;
  }
  
  // تهيئة إعدادات الإشعارات
  const notificationsEnabled = document.getElementById('notificationsEnabled');
  if (notificationsEnabled) {
    notificationsEnabled.checked = localStorage.getItem('notifications') === 'true';
  }
  
  // تهيئة إعدادات التحقق التلقائي
  const autoCheckEnabled = document.getElementById('autoCheckEnabled');
  if (autoCheckEnabled) {
    autoCheckEnabled.checked = localStorage.getItem('autoRefresh') === 'true';
  }
  
  const checkInterval = document.getElementById('checkInterval');
  if (checkInterval) {
    checkInterval.value = Math.floor(refreshInterval / 60);
    updateIntervalValue();
  }
  
  // تهيئة إعدادات السيرفر
  const serverAddress = document.getElementById('serverAddress');
  if (serverAddress) {
    serverAddress.value = localStorage.getItem('serverAddress') || '';
  }
  
  const serverPort = document.getElementById('serverPort');
  if (serverPort) {
    serverPort.value = localStorage.getItem('serverPort') || '25565';
  }
  
  // تهيئة خيارات الألوان
  initializeColorOptions();
}

function initializeColorOptions() {
  const colorOptions = document.querySelectorAll('.color-option');
  
  // تحديد الألوان المحفوظة
  const onlineColor = localStorage.getItem('onlineColor') || '#4CAF50';
  const warningColor = localStorage.getItem('warningColor') || '#FF9800';
  const offlineColor = localStorage.getItem('offlineColor') || '#F44336';
  
  // تعيين الألوان في عناصر الإدخال
  const onlineColorInput = document.getElementById('onlineColor');
  const warningColorInput = document.getElementById('warningColor');
  const offlineColorInput = document.getElementById('offlineColor');
  
  if (onlineColorInput) onlineColorInput.value = onlineColor;
  if (warningColorInput) warningColorInput.value = warningColor;
  if (offlineColorInput) offlineColorInput.value = offlineColor;
  
  // تطبيق الألوان على متغيرات CSS
  document.documentElement.style.setProperty('--online-color', onlineColor);
  document.documentElement.style.setProperty('--warning-color', warningColor);
  document.documentElement.style.setProperty('--offline-color', offlineColor);
  
  // إضافة مستمعي الأحداث لتغيير الألوان
  colorOptions.forEach(option => {
    option.addEventListener('input', function() {
      const color = this.value;
      const property = this.dataset.property;
      
      document.documentElement.style.setProperty(`--${property}-color`, color);
      localStorage.setItem(`${property}Color`, color);
    });
  });
}


function updateIntervalValue() {
  const checkInterval = document.getElementById('checkInterval');
  const intervalValue = document.getElementById('intervalValue');
  
  if (checkInterval && intervalValue) {
    intervalValue.textContent = checkInterval.value;
  }
}

function saveSettings() {
  // حفظ إعدادات الثيم
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    theme = themeSelect.value;
    localStorage.setItem('theme', theme);
    applyTheme();
  }
  
  // حفظ إعدادات الإشعارات
  const notificationsEnabled = document.getElementById('notificationsEnabled');
  if (notificationsEnabled) {
    localStorage.setItem('notifications', notificationsEnabled.checked);
    
    if (notificationsEnabled.checked) {
      requestNotificationPermission();
    }
  }
  
  // حفظ إعدادات التحقق التلقائي
  const autoCheckEnabled = document.getElementById('autoCheckEnabled');
  if (autoCheckEnabled) {
    autoRefresh = autoCheckEnabled.checked;
    localStorage.setItem('autoRefresh', autoRefresh);
    
    if (autoRefresh) {
      startAutoRefresh();
    } else {
      stopAutoRefresh();
    }
  }
  
  // حفظ الفاصل الزمني
  const checkInterval = document.getElementById('checkInterval');
  if (checkInterval) {
    refreshInterval = checkInterval.value * 60;
    localStorage.setItem('refreshInterval', refreshInterval);
    
    if (autoRefresh) {
      startAutoRefresh();
    }
  }
  
  // حفظ إعدادات السيرفر
  const serverAddress = document.getElementById('serverAddress');
  const serverPort = document.getElementById('serverPort');
  
  if (serverAddress && serverPort) {
    localStorage.setItem('serverAddress', serverAddress.value);
    localStorage.setItem('serverPort', serverPort.value);
  }
  
  showNotification('تم حفظ الإعدادات بنجاح', 'success');
}

function resetSettings() {
  if (confirm('هل أنت متأكد من أنك تريد إعادة ضبط جميع الإعدادات؟')) {
    localStorage.clear();
    location.reload();
  }
}

// وظيفة الاتصال بالسيرفر
function fetchServerStatus() {
  return new Promise((resolve, reject) => {
    // استخدام سيرفر Node.js المرفوع على Railway
    const apiUrl = `https://x-production-2451.up.railway.app/status`;
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('فشل الاتصال بالسيرفر');
        }
        return response.json();
      })
      .then(data => {
        // تحويل بيانات API إلى التنسيق المطلوب
        const result = {
          online: data.online || false,
          players: data.players || 0,
          maxPlayers: data.maxPlayers || 0,
          version: data.version || 'غير معروف',
          motd: data.motd || 'غير متوفر',
          ping: data.ping || 0
        };
        
        resolve(result);
      })
      .catch(error => {
        console.error('خطأ في الاتصال بالسيرفر:', error);
        reject(error);
      });
  });
}

// وظائف إضافية لتحسين تجربة المستخدم
function exportHistory() {
  const historyData = localStorage.getItem("serverHistory");
  
  if (!historyData) {
    showNotification('لا توجد سجلات للتصدير', 'warning');
    return;
  }
  
  try {
    const history = JSON.parse(historyData);
    
    // تحويل البيانات إلى تنسيق CSV
    let csvContent = "التاريخ,الوقت,الحالة,عدد اللاعبين,زمن الاستجابة\n";
    
    history.forEach(entry => {
      csvContent += `${entry.date},${entry.time},${entry.state},${entry.players},${entry.ping}\n`;
    });
    
    // إنشاء رابط تنزيل
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // تعيين خصائص الرابط
    link.setAttribute('href', url);
    link.setAttribute('download', `server_history_${formatDate(new Date()).replace(/\//g, '-')}.csv`);
    link.style.display = 'none';
    
    // إضافة الرابط إلى المستند وتنفيذ النقر
    document.body.appendChild(link);
    link.click();
    
    // تنظيف
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showNotification('تم تصدير السجلات بنجاح', 'success');
  } catch (error) {
    console.error('خطأ في تصدير السجلات:', error);
    showNotification('حدث خطأ أثناء تصدير السجلات', 'error');
  }
}

function showServerDetails() {
  fetchServerStatus()
    .then(data => {
      // إنشاء نافذة منبثقة لعرض تفاصيل السيرفر
      const detailsModal = document.getElementById('serverDetailsModal');
      const modalContent = document.getElementById('serverDetailsContent');
      
      if (!detailsModal || !modalContent) return;
      
      // تعيين محتوى النافذة المنبثقة
      modalContent.innerHTML = `
        <h3>تفاصيل السيرفر</h3>
        <div class="server-detail">
          <span class="detail-label">العنوان:</span>
          <span class="detail-value">${localStorage.getItem('serverAddress') || 'غير محدد'}</span>
        </div>
        <div class="server-detail">
          <span class="detail-label">المنفذ:</span>
          <span class="detail-value">${localStorage.getItem('serverPort') || '25565'}</span>
        </div>
        <div class="server-detail">
          <span class="detail-label">الحالة:</span>
          <span class="detail-value ${data.online ? 'online' : 'offline'}">${data.online ? '✅ متصل' : '❌ غير متصل'}</span>
        </div>
        <div class="server-detail">
          <span class="detail-label">عدد اللاعبين:</span>
          <span class="detail-value">${data.players} / ${data.maxPlayers}</span>
        </div>
        <div class="server-detail">
          <span class="detail-label">الإصدار:</span>
          <span class="detail-value">${data.version}</span>
        </div>
        <div class="server-detail">
          <span class="detail-label">رسالة اليوم:</span>
          <span class="detail-value">${data.motd}</span>
        </div>
      `;
      
      // عرض النافذة المنبثقة
      detailsModal.style.display = 'block';
    })
    .catch(error => {
      showNotification('تعذر الحصول على تفاصيل السيرفر', 'error');
    });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// إضافة مستمعي الأحداث عند تحميل الصفحة
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});

// وظيفة لتحديث الساعة في الوقت الحقيقي
function startRealTimeClock() {
  const clockElement = document.getElementById('realTimeClock');
  
  if (clockElement) {
    setInterval(() => {
      const now = new Date();
      clockElement.textContent = formatTime(now);
    }, 1000);
  }
}

// تشغيل الساعة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  // بدء الساعة في الوقت الحقيقي
  startRealTimeClock();
});




function startAutoRefresh() {
  // إيقاف أي فاصل زمني سابق
  stopAutoRefresh();
  
  // بدء فاصل زمني جديد
  autoRefreshInterval = setInterval(() => {
    checkServer();
  }, refreshInterval * 1000);
}

function stopAutoRefresh() {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
    autoRefreshInterval = null;
  }
}

function updateRefreshInterval(seconds) {
  refreshInterval = seconds;
  localStorage.setItem('refreshInterval', seconds.toString());
  
  if (autoRefresh) {
    startAutoRefresh();
  }
  
  showNotification(`تم تعيين الفاصل الزمني إلى ${seconds} ثانية`, 'success');
}

// وظائف التحقق من السيرفر
function checkServer() {
  // تحديث واجهة المستخدم لتظهر أنه جاري التحقق
  const statusIndicator = document.getElementById('statusIndicator');
  const statusText = document.getElementById('status');
  const playerCount = document.getElementById('playerCount');
  const pingTime = document.getElementById('pingTime');
  const lastCheck = document.getElementById('lastCheck');
  
  if (statusIndicator) statusIndicator.className = 'status-indicator';
  if (statusText) statusText.textContent = 'جاري التحقق...';
  if (statusText) statusText.className = 'status status-pending';
  if (playerCount) playerCount.textContent = '-';
  if (pingTime) pingTime.textContent = '-';
  
  // إظهار أيقونة التحميل
  const checkButton = document.querySelector('.primary-btn');
  if (checkButton) {
    checkButton.innerHTML = '<div class="loading-spinner"></div> جاري التحقق';
    checkButton.disabled = true;
  }
  
  // الحصول على الوقت الحالي
  const now = new Date();
  const currentTime = formatTime(now);
  const currentDate = formatDate(now);
  
  if (lastCheck) lastCheck.textContent = currentTime;
  
  const startTime = Date.now();
  
  // التحقق من حالة السيرفر
  fetchServerStatus()
    .then(data => {
      const endTime = Date.now();
      const pingTime = endTime - startTime;
      
      // تحديث واجهة المستخدم بناءً على حالة السيرفر
      let status = 'offline';
      let statusClass = 'status-error';
      let statusMessage = 'غير متصل';
      let state, players;
      
      if (data.online) {
        if (pingTime > 500) {
          status = 'warning';
          statusClass = 'status-warning';
          statusMessage = 'متصل (استجابة بطيئة)';
          state = "⛔ استجابة بطيئة";
        } else if (data.players > 0) {
          status = 'online';
          statusClass = 'status-success';
          statusMessage = 'متصل';
          state = "✅ شغّال";
          players = data.players;
        } else {
          state = "⛔ لا لاعبين";
          players = 0;
          status = 'warning';
          statusClass = 'status-warning';
          statusMessage = "متصل (بدون لاعبين)";
        }
      } else {
        state = "❌ غير شغّال";
        players = "-";
      }
      
      // تحديث مؤشر الحالة
      if (statusIndicator) {
        statusIndicator.className = `status-indicator ${status}`;
      }
      
      // تحديث نص الحالة
      if (statusText) {
        statusText.textContent = statusMessage;
        statusText.className = `status ${statusClass}`;
      }
      
      // تحديث عدد اللاعبين
      if (playerCount) {
        playerCount.textContent = data.online ? `${data.players} / ${data.maxPlayers}` : '-';
      }
      
      // تحديث وقت الاستجابة
      if (pingTime) {
        pingTime.textContent = data.online ? `${pingTime} مللي ثانية` : '-';
      }
      
      // إضافة إلى التاريخ
      const historyEntry = {
        date: currentDate,
        time: currentTime,
        state: state,
        players: data.online ? data.players : "-",
        ping: `${pingTime} مللي ثانية`,
        status: status
      };
      saveServerData(historyEntry);
      
      // التحقق من تغيير الحالة للإشعارات
      checkStatusChange(data.online, data.players);
      
      // إعادة تمكين زر التحقق
      if (checkButton) {
        checkButton.innerHTML = '<i class="fas fa-sync-alt"></i> إعادة التحقق';
        checkButton.disabled = false;
      }
      
      return data;
    })
    .catch(error => {
      console.error('Error checking server:', error);
      
      // تحديث واجهة المستخدم لتظهر أن هناك خطأ
      if (statusIndicator) {
        statusIndicator.className = 'status-indicator offline';
      }
      
      if (statusText) {
        statusText.textContent = 'خطأ في الاتصال';
        statusText.className = 'status status-error';
      }
      
      if (playerCount) playerCount.textContent = "-";
      if (pingTime) pingTime.textContent = "-";
      
      const time = formatTime(new Date());
      if (lastCheck) lastCheck.textContent = time;
      
      // إضافة إلى التاريخ
      const historyEntry = {
        date: currentDate,
        time: time,
        state: "⚠️ تعذر الاتصال",
        players: "-",
        ping: "-",
        status: "error"
      };
      saveServerData(historyEntry);
      
      // إعادة تمكين زر التحقق
      if (checkButton) {
        checkButton.innerHTML = '<i class="fas fa-sync-alt"></i> إعادة التحقق';
        checkButton.disabled = false;
      }
      
      // إظهار إشعار بالخطأ
      showNotification('تعذر الاتصال بالسيرفر. يرجى التحقق من اتصالك بالإنترنت.', 'error');
    });
}

function checkStatusChange(isOnline, playerCount) {
  // إذا كانت هذه هي المرة الأولى للتحقق، فقط احفظ الحالة
  if (lastStatus === null) {
    lastStatus = { online: isOnline, players: playerCount };
    return;
  }
  
  // التحقق من تغيير الحالة
  if (lastStatus.online !== isOnline) {
    if (isOnline) {
      sendNotification('السيرفر متصل الآن', 'تم تشغيل السيرفر بنجاح');
      showNotification('السيرفر متصل الآن', 'success');
    } else {
      sendNotification('السيرفر غير متصل', 'السيرفر غير متاح حالياً');
      showNotification('السيرفر غير متصل', 'error');
    }
  } 
  // التحقق من تغيير عدد اللاعبين (فقط إذا كان السيرفر متصل)
  else if (isOnline && lastStatus.online && lastStatus.players !== playerCount) {
    // إذا كان هناك لاعبين جدد
    if (playerCount > lastStatus.players) {
      sendNotification('لاعبين جدد', `عدد اللاعبين الآن: ${playerCount}`);
      showNotification(`عدد اللاعبين الآن: ${playerCount}`, 'info');
    }
    // إذا غادر جميع اللاعبين
    else if (playerCount === 0 && lastStatus.players > 0) {
      sendNotification('لا يوجد لاعبين', 'غادر جميع اللاعبين السيرفر');
      showNotification('غادر جميع اللاعبين السيرفر', 'warning');
    }
  }
  
  // تحديث الحالة الأخيرة
  lastStatus = { online: isOnline, players: playerCount };
}

// وظائف التاريخ
function formatTime(date) {
  return date.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function formatDate(date) {
  return date.toLocaleDateString('ar-EG', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

function addToHistory(time, state, players, ping) {
  const tableBody = document.querySelector("#recentHistoryTable tbody");
  if (!tableBody) return;
  
  const row = document.createElement("tr");
  row.innerHTML = `<td>${time}</td><td>${state}</td><td>${players}</td><td>${ping}</td>`;
  
  // إضافة لون خلفية حسب الحالة
  if (state.includes("✅")) {
    row.classList.add('status-success-row');
  } else if (state.includes("⛔")) {
    row.classList.add('status-warning-row');
  } else if (state.includes("❌") || state.includes("⚠️")) {
    row.classList.add('status-error-row');
  }
  
  tableBody.prepend(row);
  
  // الاحتفاظ فقط بآخر 5 صفوف في العرض الرئيسي
  while (tableBody.children.length > 5) {
    tableBody.removeChild(tableBody.lastChild);
  }
  
  saveHistory();
}

function saveHistory() {
  // الحصول على جميع بيانات التاريخ من جميع الصفوف في جميع الجداول
  const allRows = document.querySelectorAll("table tbody tr");
  
  const history = Array.from(allRows).map(row => ({
    time: row.children[0].textContent,
    date: formatDate(new Date()),
    state: row.children[1].textContent,
    players: row.children[2].textContent,
    ping: row.children.length > 3 ? row.children[3].textContent : "-",
    status: row.classList.contains('status-success-row') ? 'online' : 
            row.classList.contains('status-warning-row') ? 'warning' : 'offline'
  }));
  
  // تخزين التاريخ في التخزين المحلي
  localStorage.setItem("serverHistory", JSON.stringify(history));
}

function loadRecentHistory() {
  const tableBody = document.querySelector("#recentHistoryTable tbody");
  if (!tableBody) return;
  
  const historyData = localStorage.getItem("serverHistory");
  if (!historyData) return;
  
  try {
    const history = JSON.parse(historyData);
    
    // تفريغ الجدول أولاً
    tableBody.innerHTML = "";
    
    // إضافة آخر 5 سجلات فقط
    const recentHistory = history.slice(0, 5);
    
    recentHistory.forEach(entry => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${entry.time}</td><td>${entry.state}</td><td>${entry.players}</td><td>${entry.ping}</td>`;
      
      // إضافة الفئة المناسبة للصف
      if (entry.status === 'online') {
        row.classList.add('status-success-row');
      } else if (entry.status === 'warning') {
        row.classList.add('status-warning-row');
      } else {
        row.classList.add('status-error-row');
      }
      
      tableBody.appendChild(row);
    });
    
    // إذا لم تكن هناك سجلات، أضف صفًا يشير إلى ذلك
    if (recentHistory.length === 0) {
      const emptyRow = document.createElement("tr");
      const emptyCell = document.createElement("td");
      emptyCell.colSpan = 4;
      emptyCell.textContent = "لا توجد سجلات سابقة";
      emptyCell.className = "empty-history";
      emptyRow.appendChild(emptyCell);
      tableBody.appendChild(emptyRow);
    }
  } catch (error) {
    console.error('Error loading history:', error);
    
    // إضافة صف يشير إلى وجود خطأ
    const errorRow = document.createElement("tr");
    const errorCell = document.createElement("td");
    errorCell.colSpan = 4;
    errorCell.textContent = "حدث خطأ أثناء تحميل السجلات";
    errorCell.className = "error-history";
    errorRow.appendChild(errorCell);
    tableBody.appendChild(errorRow);
  }
}

function loadFullHistory() {
  const tableBody = document.querySelector("#fullHistoryTable tbody");
  if (!tableBody) return;
  
  const historyData = localStorage.getItem("serverHistory");
  if (!historyData) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-history">لا توجد سجلات سابقة</td>
      </tr>
    `;
    return;
  }
  
  try {
    const history = JSON.parse(historyData);
    
    // تفريغ الجدول أولاً
    tableBody.innerHTML = "";
    
    // تجميع السجلات حسب التاريخ
    const groupedHistory = {};
    
    history.forEach(entry => {
      if (!groupedHistory[entry.date]) {
        groupedHistory[entry.date] = [];
      }
      
      groupedHistory[entry.date].push(entry);
    });
    
    // إضافة السجلات إلى الجدول مرتبة حسب التاريخ
    Object.keys(groupedHistory).sort().reverse().forEach(date => {
      // إضافة صف التاريخ
      const dateRow = document.createElement("tr");
      dateRow.className = "date-row";
      dateRow.innerHTML = `<td colspan="5">${date}</td>`;
      tableBody.appendChild(dateRow);
      
      // إضافة سجلات هذا التاريخ
      groupedHistory[date].forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${entry.time}</td>
          <td>${entry.state}</td>
          <td>${entry.players}</td>
          <td>${entry.ping}</td>
        `;
        
        // إضافة الفئة المناسبة للصف
        if (entry.status === 'online') {
          row.classList.add('status-success-row');
        } else if (entry.status === 'warning') {
          row.classList.add('status-warning-row');
        } else {
          row.classList.add('status-error-row');
        }
        
        tableBody.appendChild(row);
      });
    });
    
    // إذا لم تكن هناك سجلات، أضف صفًا يشير إلى ذلك
    if (history.length === 0) {
      const emptyRow = document.createElement("tr");
      const emptyCell = document.createElement("td");
      emptyCell.colSpan = 5;
      emptyCell.textContent = "لا توجد سجلات سابقة";
      emptyCell.className = "empty-history";
      emptyRow.appendChild(emptyCell);
      tableBody.appendChild(emptyRow);
    }
  } catch (error) {
    console.error('Error loading full history:', error);
    
    // إضافة صف يشير إلى وجود خطأ
    const errorRow = document.createElement("tr");
    const errorCell = document.createElement("td");
    errorCell.colSpan = 5;
    errorCell.textContent = "حدث خطأ أثناء تحميل السجلات";
    errorCell.className = "error-history";
    errorRow.appendChild(errorCell);
    tableBody.appendChild(errorRow);
  }
}

function clearHistory() {
  if (confirm("هل أنت متأكد من أنك تريد مسح جميع السجلات؟")) {
    localStorage.removeItem("serverHistory");
    
    // تحديث جداول التاريخ
    const recentHistoryTable = document.querySelector("#recentHistoryTable tbody");
    if (recentHistoryTable) {
      recentHistoryTable.innerHTML = `
        <tr>
          <td colspan="4" class="empty-history">لا توجد سجلات سابقة</td>
        </tr>
      `;
    }
    
    const fullHistoryTable = document.querySelector("#fullHistoryTable tbody");
    if (fullHistoryTable) {
      fullHistoryTable.innerHTML = `
        <tr>
          <td colspan="5" class="empty-history">لا توجد سجلات سابقة</td>
        </tr>
      `;
    }
    
    showNotification("تم مسح جميع السجلات بنجاح", "success");
  }
}

// وظائف الإعدادات
function initializeSettings() {
  // تهيئة إعدادات الثيم
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    themeSelect.value = theme;
  }
  
  // تهيئة إعدادات الإشعارات
  const notificationsEnabled = document.getElementById('notificationsEnabled');
  if (notificationsEnabled) {
    notificationsEnabled.checked = localStorage.getItem('notifications') === 'true';
  }
  
  // تهيئة إعدادات التحقق التلقائي
  const autoCheckEnabled = document.getElementById('autoCheckEnabled');
  if (autoCheckEnabled) {
    autoCheckEnabled.checked = localStorage.getItem('autoRefresh') === 'true';
  }
  
  const checkInterval = document.getElementById('checkInterval');
  if (checkInterval) {
    checkInterval.value = Math.floor(refreshInterval / 60);
    updateIntervalValue();
  }
  
  // تهيئة إعدادات السيرفر
  const serverAddress = document.getElementById('serverAddress');
  if (serverAddress) {
    serverAddress.value = localStorage.getItem('serverAddress') || '';
  }
  
  const serverPort = document.getElementById('serverPort');
  if (serverPort) {
    serverPort.value = localStorage.getItem('serverPort') || '25565';
  }
  
  // تهيئة خيارات الألوان
  initializeColorOptions();
}

function initializeColorOptions() {
  const colorOptions = document.querySelectorAll('.color-option');
  
  // تحديد الألوان المحفوظة
  const onlineColor = localStorage.getItem('onlineColor') || '#4CAF50';
  const warningColor = localStorage.getItem('warningColor') || '#FF9800';
  const offlineColor = localStorage.getItem('offlineColor') || '#F44336';
  
  // تعيين الألوان في عناصر الإدخال
  const onlineColorInput = document.getElementById('onlineColor');
  const warningColorInput = document.getElementById('warningColor');
  const offlineColorInput = document.getElementById('offlineColor');
  
  if (onlineColorInput) onlineColorInput.value = onlineColor;
  if (warningColorInput) warningColorInput.value = warningColor;
  if (offlineColorInput) offlineColorInput.value = offlineColor;
  
  // تطبيق الألوان على متغيرات CSS
  document.documentElement.style.setProperty('--online-color', onlineColor);
  document.documentElement.style.setProperty('--warning-color', warningColor);
  document.documentElement.style.setProperty('--offline-color', offlineColor);
  
  // إضافة مستمعي الأحداث لتغيير الألوان
  colorOptions.forEach(option => {
    option.addEventListener('input', function() {
      const color = this.value;
      const property = this.dataset.property;
      
      document.documentElement.style.setProperty(`--${property}-color`, color);
      localStorage.setItem(`${property}Color`, color);
    });
  });
}


function updateIntervalValue() {
  const checkInterval = document.getElementById('checkInterval');
  const intervalValue = document.getElementById('intervalValue');
  
  if (checkInterval && intervalValue) {
    intervalValue.textContent = checkInterval.value;
  }
}

function saveSettings() {
  // حفظ إعدادات الثيم
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    theme = themeSelect.value;
    localStorage.setItem('theme', theme);
    applyTheme();
  }
  
  // حفظ إعدادات الإشعارات
  const notificationsEnabled = document.getElementById('notificationsEnabled');
  if (notificationsEnabled) {
    localStorage.setItem('notifications', notificationsEnabled.checked);
    
    if (notificationsEnabled.checked) {
      requestNotificationPermission();
    }
  }
  
  // حفظ إعدادات التحقق التلقائي
  const autoCheckEnabled = document.getElementById('autoCheckEnabled');
  if (autoCheckEnabled) {
    autoRefresh = autoCheckEnabled.checked;
    localStorage.setItem('autoRefresh', autoRefresh);
    
    if (autoRefresh) {
      startAutoRefresh();
    } else {
      stopAutoRefresh();
    }
  }
  
  // حفظ الفاصل الزمني
  const checkInterval = document.getElementById('checkInterval');
  if (checkInterval) {
    refreshInterval = checkInterval.value * 60;
    localStorage.setItem('refreshInterval', refreshInterval);
    
    if (autoRefresh) {
      startAutoRefresh();
    }
  }
  
  // حفظ إعدادات السيرفر
  const serverAddress = document.getElementById('serverAddress');
  const serverPort = document.getElementById('serverPort');
  
  if (serverAddress && serverPort) {
    localStorage.setItem('serverAddress', serverAddress.value);
    localStorage.setItem('serverPort', serverPort.value);
  }
  
  showNotification('تم حفظ الإعدادات بنجاح', 'success');
}

function resetSettings() {
  if (confirm('هل أنت متأكد من أنك تريد إعادة ضبط جميع الإعدادات؟')) {
    localStorage.clear();
    location.reload();
  }
}