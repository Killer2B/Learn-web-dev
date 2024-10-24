import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MangaDetails() {
  const [manga, setManga] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/manga/${id}`);
        setManga(response.data);
      } catch (error) {
        console.error('خطأ في جلب تفاصيل المانجا:', error);
      }
    };

    fetchManga();
  }, [id]);

  if (!manga) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div>
      <h2>{manga.title}</h2>
      <img src={manga.coverImage} alt={manga.title} style={{ maxWidth: '200px' }} />
      <p>{manga.description}</p>
      <h3>الفصول:</h3>
      <ul>
        {manga.chapters.map((chapter, index) => (
          <li key={index}>
            <a href={chapter.url} target="_blank" rel="noopener noreferrer">{chapter.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MangaDetails;
