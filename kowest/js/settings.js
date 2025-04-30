/**
 * ملف إعدادات موقع Kowest لمراقبة سيرفرات ماينكرافت
 * يحتوي على وظائف إدارة الإعدادات وتخصيص واجهة المستخدم
 * تم التطوير بواسطة فريق Kowest
 */

// المتغيرات العامة
let currentSettings = {};
let serversList = [];
let backupsList = [];
let currentTab = 'appearance';
let confirmCallback = null;
let debugMode = false;

/**
 * تهيئة الصفحة عند التحميل
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('تهيئة صفحة الإعدادات...');
  
  // تهيئة علامات التبويب
  initializeTabs();
  
  // تحميل الإعدادات المحفوظة
  loadSettings();
  
  // تهيئة خيارات الألوان
  initializeColorOptions();
  
  // تهيئة قائمة السيرفرات
  initializeServersList();
  
  // التحقق من إذن الإشعارات
  checkNotificationPermission();
  
  // إضافة مستمعي الأحداث للأزرار والعناصر
  setupEventListeners();
  
  // تحديث السنة الحالية في تذييل الصفحة
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  console.log('تم تهيئة صفحة الإعدادات بنجاح');
});

/**
 * تهيئة علامات التبويب
 */
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');
      
      // إزالة الفئة النشطة من جميع الأزرار والمحتويات
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // إضافة الفئة النشطة للزر والمحتوى المحدد
      button.classList.add('active');
      document.getElementById(`${tabName}-tab`).classList.add('active');
      
      // تحديث علامة التبويب الحالية
      currentTab = tabName;
      
      // حفظ علامة التبويب النشطة في التخزين المحلي
      localStorage.setItem('activeSettingsTab', tabName);
    });
  });
  
  // استعادة علامة التبويب النشطة من التخزين المحلي
  const savedTab = localStorage.getItem('activeSettingsTab');
  if (savedTab) {
    const tabButton = document.querySelector(`.tab-btn[data-tab="${savedTab}"]`);
    if (tabButton) {
      tabButton.click();
    }
  }
}

/**
 * تهيئة خيارات الألوان
 */
function initializeColorOptions() {
  const colorOptions = document.querySelectorAll('.color-option');
  const savedColor = localStorage.getItem('accentColor') || '#00ffd5';
  
  // تعيين اللون النشط
  colorOptions.forEach(option => {
    const color = option.getAttribute('data-color');
    if (color === savedColor) {
      option.classList.add('active');
    }
    
    // إضافة مستمع حدث للنقر
    option.addEventListener('click', function() {
      // إزالة الفئة النشطة من جميع الخيارات
      colorOptions.forEach(opt => opt.classList.remove('active'));
      
      // إضافة الفئة النشطة للخيار المحدد
      this.classList.add('active');
      
      // تعيين اللون الجديد
      const selectedColor = this.getAttribute('data-color');
      setAccentColor(selectedColor);
      
      // عرض إشعار
      showNotification(`تم تغيير لون التمييز إلى ${getColorName(selectedColor)}`, 'success');
    });
  });
  
  // تطبيق اللون المحفوظ
  setAccentColor(savedColor);
}

/**
 * الحصول على اسم اللون بناءً على قيمته
 * @param {string} color - قيمة اللون
 * @returns {string} - اسم اللون
 */
function getColorName(color) {
  const colorNames = {
    '#00ffd5': 'الفيروزي',
    '#ff5722': 'الأحمر',
    '#4caf50': 'الأخضر',
    '#2196f3': 'الأزرق',
    '#ffeb3b': 'الأصفر',
    '#9c27b0': 'البنفسجي'
  };
  
  return colorNames[color] || 'المخصص';
}

/**
 * تعيين لون التمييز
 * @param {string} color - قيمة اللون
 */
function setAccentColor(color) {
  // تعيين متغيرات CSS المخصصة
  document.documentElement.style.setProperty('--primary-color', color);
  
  // اشتقاق ألوان إضافية من اللون الأساسي
  const rgbColor = hexToRgb(color);
  if (rgbColor) {
    // إنشاء نسخة أفتح
    const lighterColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.5)`;
    document.documentElement.style.setProperty('--primary-color-light', lighterColor);
    
    // إنشاء نسخة أغمق
    const darkerR = Math.max(0, rgbColor.r - 30);
    const darkerG = Math.max(0, rgbColor.g - 30);
    const darkerB = Math.max(0, rgbColor.b - 30);
    const darkerColor = rgbToHex(darkerR, darkerG, darkerB);
    document.documentElement.style.setProperty('--primary-color-dark', darkerColor);
  }
  
  // حفظ اللون في التخزين المحلي
  localStorage.setItem('accentColor', color);
  
  // تحديث لون الـ meta theme-color
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', color);
  }
  
  console.log('تم تطبيق اللون:', color);
}

/**
 * تحويل لون Hex إلى RGB
 * @param {string} hex - قيمة اللون بصيغة Hex
 * @returns {Object|null} - كائن يحتوي على قيم RGB أو null إذا كانت الصيغة غير صالحة
 */
function hexToRgb(hex) {
  // التحقق من صحة الصيغة
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * تحويل قيم RGB إلى صيغة Hex
 * @param {number} r - قيمة اللون الأحمر
 * @param {number} g - قيمة اللون الأخضر
 * @param {number} b - قيمة اللون الأزرق
 * @returns {string} - قيمة اللون بصيغة Hex
 */
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * تهيئة قائمة السيرفرات
 * @param {Array} servers - قائمة السيرفرات
 */
function loadServersList(servers) {
  const serversList = document.getElementById('serversList');
  if (!serversList) return;
  
  // مسح القائمة الحالية
  serversList.innerHTML = '';
  
  // إضافة السيرفرات
  servers.forEach(server => {
    const serverItem = createServerElement(server);
    serversList.appendChild(serverItem);
  });
}

/**
 * إنشاء عنصر سيرفر
 * @param {Object} server - بيانات السيرفر
 * @returns {HTMLElement} - عنصر السيرفر
 */

  
  // إضافة مستمع حدث لزر الحذف
  const deleteBtn = serverItem.querySelector('.delete-server-btn');
  deleteBtn.addEventListener('click', () => removeServer(server.id));
  
  return serverItem;


/**
 * إزالة سيرفر
 * @param {number} id - معرف السيرفر
 */
function removeServer(id) {
  const serverItem = document.getElementById(`server-${id}`);
  if (serverItem) {
    serverItem.remove();
    updateServersListInStorage();
    showNotification('تم حذف السيرفر بنجاح', 'success');
  }
}

/**
 * تطبيق السمة
 * @param {string} theme - اسم السمة
 */
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (theme === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else if (theme === 'auto') {
    // تطبيق السمة حسب تفضيلات النظام
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    
    // إضافة مستمع لتغييرات تفضيلات النظام
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (localStorage.getItem('theme') === 'auto') {
        if (e.matches) {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
        }
      }
    });
  }
}

/**
 * تغيير السمة
 */
function changeTheme() {
  const theme = document.getElementById('themeSelect').value;
  applyTheme(theme);
  localStorage.setItem('theme', theme);
  showNotification(`تم تغيير السمة إلى ${getThemeName(theme)}`, 'success');
}

/**
 * الحصول على اسم السمة
 * @param {string} theme - قيمة السمة
 * @returns {string} - اسم السمة
 */
function getThemeName(theme) {
  switch (theme) {
    case 'light': return 'الوضع الفاتح';
    case 'dark': return 'الوضع الداكن';
    case 'auto': return 'الوضع التلقائي';
    default: return theme;
  }
}

/**
 * تطبيق حجم الخط
 * @param {string} size - حجم الخط
 */
function applyFontSize(size) {
  document.documentElement.style.fontSize = getFontSizeValue(size);
}

/**
 * الحصول على قيمة حجم الخط
 * @param {string} size - اسم حجم الخط
 * @returns {string} - قيمة حجم الخط
 */
function getFontSizeValue(size) {
  switch (size) {
    case 'small': return '14px';
    case 'medium': return '16px';
    case 'large': return '18px';
    case 'xlarge': return '20px';
    default: return '16px';
  }
}

/**
 * تغيير حجم الخط
 */
function changeFontSize() {
  const fontSize = document.getElementById('fontSizeSelect').value;
  applyFontSize(fontSize);
  localStorage.setItem('fontSize', fontSize);
  showNotification(`تم تغيير حجم الخط إلى ${getFontSizeName(fontSize)}`, 'success');
}

/**
 * الحصول على اسم حجم الخط
 * @param {string} size - قيمة حجم الخط
 * @returns {string} - اسم حجم الخط
 */
function getFontSizeName(size) {
  switch (size) {
    case 'small': return 'صغير';
    case 'medium': return 'متوسط';
    case 'large': return 'كبير';
    case 'xlarge': return 'كبير جدًا';
    default: return size;
  }
}

/**
 * تبديل الرسوم المتحركة
 */
function toggleAnimations() {
  const enabled = document.getElementById('animationsEnabled').checked;
  document.body.classList.toggle('no-animations', !enabled);
  localStorage.setItem('animationsEnabled', enabled);
  showNotification(`تم ${enabled ? 'تفعيل' : 'تعطيل'} الرسوم المتحركة`, 'success');
}

/**
 * تحديث قيمة الفاصل الزمني
 */
function updateIntervalValue() {
  const interval = document.getElementById('checkInterval').value;
  const intervalValueElement = document.getElementById('intervalValue');
  if (intervalValueElement) {
    intervalValueElement.textContent = interval;
  }
}
