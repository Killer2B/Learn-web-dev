import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MangaList() {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/manga');
        setMangas(response.data);
      } catch (error) {
        console.error('خطأ في جلب قائمة المانجا:', error);
      }
    };

    fetchMangas();
  }, []);

  return (
    <div>
      <h2>قائمة المانجا</h2>
      <ul>
        {mangas.map((manga) => (
          <li key={manga._id}>
            <Link to={`/manga/${manga._id}`}>{manga.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MangaList;
