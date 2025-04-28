document.addEventListener('DOMContentLoaded', function() {
    // تحديث السنة الحالية في التذييل
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // تعريف العناصر
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    const extractBtn = document.getElementById('extractBtn');
    const extractedText = document.getElementById('extractedText');
    const translateBtn = document.getElementById('translateBtn');
    const translatedText = document.getElementById('translatedText');
    const sourceLanguage = document.getElementById('sourceLanguage');
    const targetLanguage = document.getElementById('targetLanguage');
    
    // قائمة اللغات المدعومة
    const languages = [
        { code: 'ar', name: 'العربية' },
        { code: 'en', name: 'الإنجليزية' },
        { code: 'fr', name: 'الفرنسية' },
        { code: 'es', name: 'الإسبانية' },
        { code: 'de', name: 'الألمانية' },
        { code: 'it', name: 'الإيطالية' },
        { code: 'ru', name: 'الروسية' },
        { code: 'zh', name: 'الصينية' },
        { code: 'ja', name: 'اليابانية' },
        { code: 'ko', name: 'الكورية' },
        { code: 'hi', name: 'الهندية' },
        { code: 'pt', name: 'البرتغالية' },
        { code: 'tr', name: 'التركية' },
        { code: 'nl', name: 'الهولندية' },
        { code: 'sv', name: 'السويدية' }
    ];
    
    // إضافة اللغات إلى قوائم الاختيار
    languages.forEach(lang => {
        const sourceOption = document.createElement('option');
        sourceOption.value = lang.code;
        sourceOption.textContent = lang.name;
        sourceLanguage.appendChild(sourceOption);
        
        const targetOption = document.createElement('option');
        targetOption.value = lang.code;
        targetOption.textContent = lang.name;
        targetLanguage.appendChild(targetOption);
    });
    
    // تعيين اللغة الافتراضية
    sourceLanguage.value = 'auto';
    targetLanguage.value = 'ar';
    
    // معاينة الصورة عند اختيارها
    imageUpload.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            }
            
            reader.readAsDataURL(e.target.files[0]);
        }
    });
    
    // استخراج النص من الصورة
    extractBtn.addEventListener('click', function() {
        if (!imageUpload.files || !imageUpload.files[0]) {
            alert('الرجاء اختيار صورة أولاً');
            return;
        }
        
        extractedText.value = 'جاري استخراج النص...';
        translateBtn.disabled = true;
        
        const selectedLang = sourceLanguage.value === 'auto' ? 'eng' : sourceLanguage.value;
        
        Tesseract.recognize(
            imageUpload.files[0],
            selectedLang
        ).then(({ data: { text } }) => {
            extractedText.value = text;
            translateBtn.disabled = false;
        }).catch(error => {
            console.error('خطأ في استخراج النص:', error);
            extractedText.value = 'حدث خطأ أثناء استخراج النص. الرجاء المحاولة مرة أخرى.';
        });
    });
    
    // ترجمة النص
    translateBtn.addEventListener('click', function() {
        const text = extractedText.value;
        if (!text) {
            alert('لا يوجد نص للترجمة');
            return;
        }
        
        translatedText.value = 'جاري الترجمة...';
        
        // استخدام واجهة برمجة التطبيقات للترجمة (مثال)
        // في الإصدار الحقيقي، ستحتاج إلى استخدام خدمة ترجمة فعلية مثل Google Translate API
        translateText(text, sourceLanguage.value, targetLanguage.value)
            .then(translatedResult => {
                translatedText.value = translatedResult;
            })
            .catch(error => {
                console.error('خطأ في الترجمة:', error);
                translatedText.value = 'حدث خطأ أثناء الترجمة. الرجاء المحاولة مرة أخرى.';
            });
    });
    
    // وظيفة الترجمة (نموذج)
    // في الإصدار الحقيقي، ستحتاج إلى استبدال هذا بواجهة برمجة تطبيقات ترجمة حقيقية
    async function translateText(text, sourceLang, targetLang) {
        // هذه مجرد محاكاة للترجمة
        // في التطبيق الحقيقي، ستحتاج إلى استخدام خدمة ترجمة مثل:
        // - Google Cloud Translation API
        // - Microsoft Translator API
        // - DeepL API
        
        // محاكاة تأخير الشبكة
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // إرجاع نص توضيحي
        return `هذا نص مترجم توضيحي. في الإصدار الحقيقي، سيتم استبدال هذا بترجمة فعلية من ${sourceLang} إلى ${targetLang}.\n\nالنص الأصلي:\n${text}`;
    }
});