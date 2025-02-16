import { useState, useEffect } from 'react';

export const useFavoritos = (tipo) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(`favoritos_${tipo}`);
    if (saved) {
      setFavoritos(JSON.parse(saved));
    }
  }, [tipo]);

  const toggleFavorito = (id) => {
    const newFavoritos = favoritos.includes(id)
      ? favoritos.filter(f => f !== id)
      : [...favoritos, id];
    
    setFavoritos(newFavoritos);
    localStorage.setItem(`favoritos_${tipo}`, JSON.stringify(newFavoritos));
  };

  return [favoritos, toggleFavorito];
}; 