/**
 * ملف وظائف صفحة السجل
 * يحتوي على الوظائف الخاصة بصفحة سجل التحقق من حالة السيرفر
 */

// وظائف خاصة بصفحة السجل

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
  // تهيئة السمة المظلمة
  initTheme();
  
  // تحميل بيانات السجل
  loadFullHistory();
  
  console.log('تم تهيئة صفحة السجل بنجاح');
});

// تهيئة السمة المظلمة
function initTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// تبديل السمة بين الفاتح والمظلم
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  localStorage.setItem('theme', newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
  
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// تبديل القائمة في الأجهزة المحمولة
function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  if (navMenu) {
    navMenu.classList.toggle('show');
    
    // تغيير حالة زر القائمة
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuBtn) {
      menuBtn.classList.toggle('active');
    }
    
    console.log('تم تبديل حالة القائمة');
  } else {
    console.error('لم يتم العثور على عنصر القائمة');
  }
}

// تحميل بيانات السجل كاملة
function loadFullHistory() {
  const historyData = getServerHistory();
  displayHistory(historyData);
}

// الحصول على بيانات السجل من التخزين المحلي
function getServerHistory() {
  try {
    const historyData = localStorage.getItem('serverHistory');
    return historyData ? JSON.parse(historyData) : [];
  } catch (error) {
    console.error('خطأ في قراءة بيانات السجل:', error);
    return [];
  }
}

// عرض بيانات السجل في الجدول
function displayHistory(historyData) {
  const tableBody = document.getElementById('historyTableBody');
  const noDataMessage = document.getElementById('noDataMessage');
  
  if (!tableBody) {
    console.error('لم يتم العثور على جسم الجدول');
    return;
  }
  
  // مسح المحتوى الحالي
  tableBody.innerHTML = '';
  
  if (!historyData || historyData.length === 0) {
    // عرض رسالة عدم وجود بيانات
    if (noDataMessage) {
      noDataMessage.style.display = 'block';
    }
    return;
  }
  
  // إخفاء رسالة عدم وجود بيانات
  if (noDataMessage) {
    noDataMessage.style.display = 'none';
  }
  
  // عرض البيانات في الجدول
  historyData.forEach(entry => {
    const row = document.createElement('tr');
    
    // تحديد لون الصف بناءً على الحالة
    if (entry.status === 'online') {
      row.classList.add('status-online');
    } else if (entry.status === 'offline') {
      row.classList.add('status-offline');
    } else if (entry.status === 'error') {
      row.classList.add('status-error');
    }
    
    row.innerHTML = `
      <td>${entry.date}</td>
      <td>${entry.time}</td>
      <td>${entry.state}</td>
      <td>${entry.players}</td>
      <td>${entry.ping}</td>
    `;
    
    tableBody.appendChild(row);
  });
  
  // تحديث معلومات الصفحات
  updatePagination();
}

// تصفية بيانات السجل
function filterHistory() {
  const dateFilter = document.getElementById('dateFilter').value;
  const statusFilter = document.getElementById('statusFilter').value;
  const sortBy = document.getElementById('sortBy').value;
  
  // الحصول على البيانات الكاملة
  let historyData = getServerHistory();
  
  // تطبيق التصفية حسب التاريخ
  if (dateFilter !== 'all') {
    historyData = filterByDate(historyData, dateFilter);
  }
  
  // تطبيق التصفية حسب الحالة
  if (statusFilter !== 'all') {
    historyData = historyData.filter(entry => entry.status === statusFilter);
  }
  
  // تطبيق الترتيب
  historyData = sortHistory(historyData, sortBy);
  
  // عرض البيانات المصفاة
  displayHistory(historyData);
}

// تصفية البيانات حسب التاريخ
function filterByDate(data, filter) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - today.getDay());
  
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  
  return data.filter(entry => {
    const entryDate = parseDate(entry.date);
    
    switch (filter) {
      case 'today':
        return isSameDay(entryDate, today);
      case 'yesterday':
        return isSameDay(entryDate, yesterday);
      case 'week':
        return entryDate >= weekStart;
      case 'month':
        return entryDate >= monthStart;
      default:
        return true;
    }
  });
}

// ترتيب بيانات السجل
function sortHistory(data, sortBy) {
  switch (sortBy) {
    case 'newest':
      return data.sort((a, b) => {
        const dateA = parseDate(`${a.date} ${a.time}`);
        const dateB = parseDate(`${b.date} ${b.time}`);
        return dateB - dateA;
      });
    case 'oldest':
      return data.sort((a, b) => {
        const dateA = parseDate(`${a.date} ${a.time}`);
        const dateB = parseDate(`${b.date} ${b.time}`);
        return dateA - dateB;
      });
    case 'status':
      return data.sort((a, b) => {
        if (a.status === b.status) return 0;
        if (a.status === 'online') return -1;
        if (b.status === 'online') return 1;
        if (a.status === 'offline') return -1;
        return 1;
      });
    case 'players':
      return data.sort((a, b) => {
        const playersA = parseInt(a.players) || 0;
        const playersB = parseInt(b.players) || 0;
        return playersB - playersA;
      });
    default:
      return data;
  }
}

// تحليل التاريخ من النص
function parseDate(dateStr) {
  // تحويل التاريخ العربي إلى تنسيق يمكن تحليله
  const parts = dateStr.split(/[\/\s:]/);
  if (parts.length >= 3) {
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = parseInt(parts[2]);
    
    if (parts.length >= 5) {
      const hour = parseInt(parts[3]);
      const minute = parseInt(parts[4]);
      return new Date(year, month, day, hour, minute);
    }
    
    return new Date(year, month, day);
  }
  
  return new Date();
}

// التحقق من تطابق اليوم
function isSameDay(date1, date2) {
  return date1.getDate() === date2.getDate() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getFullYear() === date2.getFullYear();
}

// تحديث معلومات الصفحات
function updatePagination() {
  const pageInfo = document.getElementById('pageInfo');
  const prevPageBtn = document.getElementById('prevPage');
  const nextPageBtn = document.getElementById('nextPage');
  
  if (pageInfo) {
    pageInfo.textContent = 'صفحة 1 من 1';
  }
  
  if (prevPageBtn) {
    prevPageBtn.disabled = true;
  }
  
  if (nextPageBtn) {
    nextPageBtn.disabled = true;
  }
}

// تغيير الصفحة
function changePage(direction) {
  // تنفيذ تغيير الصفحة هنا
  console.log(`تغيير الصفحة بمقدار ${direction}`);
}

// تصدير السجل
function exportHistory() {
  const historyData = getServerHistory();
  if (!historyData || historyData.length === 0) {
    alert('لا توجد بيانات للتصدير');
    return;
  }
  
  // تحويل البيانات إلى CSV
  let csvContent = 'التاريخ,الوقت,الحالة,اللاعبين,الاستجابة\n';
  
  historyData.forEach(entry => {
    csvContent += `${entry.date},${entry.time},${entry.state},${entry.players},${entry.ping}\n`;
  });
  
  // إنشاء ملف للتنزيل
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.setAttribute('href', url);
  link.setAttribute('download', `سجل_السيرفر_${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  console.log('تم تصدير السجل بنجاح');
}

// مسح السجل
function clearHistory() {
  if (confirm('هل أنت متأكد من رغبتك في مسح جميع بيانات السجل؟')) {
    clearServerHistory();
    displayHistory([]);
    console.log('تم مسح السجل بنجاح');
  }
}

// مسح بيانات السجل من التخزين المحلي
function clearServerHistory() {
  localStorage.removeItem('serverHistory');
}
