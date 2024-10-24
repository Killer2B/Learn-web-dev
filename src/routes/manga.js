const express = require('express');
const router = express.Router();
const Manga = require('../models/Manga');

// الحصول على قائمة المانجا
router.get('/', async (req, res) => {
  try {
    const mangas = await Manga.find().sort({ title: 1 }).limit(20);
    res.json(mangas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// الحصول على تفاصيل مانجا محددة
router.get('/:id', async (req, res) => {
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

module.exports = router;
