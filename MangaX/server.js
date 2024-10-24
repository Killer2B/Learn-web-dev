const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// اتصال بقاعدة البيانات
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('تم الاتصال بقاعدة البيانات بنجاح'))
.catch((err) => console.error('خطأ في الاتصال بقاعدة البيانات:', err));

// تعريف النماذج
const mangaSchema = new mongoose.Schema({
  title: String,
  description: String,
  coverImage: String,
  chapters: [{ title: String, url: String }]
});

const Manga = mongoose.model('Manga', mangaSchema);

// المسارات
app.get('/api/manga', async (req, res) => {
  try {
    const mangas = await Manga.find().limit(20);
    res.json(mangas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/manga/:id', async (req, res) => {
  try {
    const manga = await Manga.findById(req.params.id);
    if (!manga) {
      return res.status(404).json({ message: 'المانجا غير موجودة' });
    }
    res.json(manga);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`الخادم يعمل على المنفذ ${PORT}`);
});
