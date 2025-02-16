import { useState, useEffect } from 'react';

export const useFiltrosSalvos = () => {
  const [filtrosSalvos, setFiltrosSalvos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('filtros_salvos');
    if (saved) {
      setFiltrosSalvos(JSON.parse(saved));
    }
  }, []);

  const salvarFiltro = (nome, filtros) => {
    const novoFiltro = {
      id: Date.now(),
      nome,
      filtros,
      favorito: false,
      dataCriacao: new Date().toISOString()
    };

    const novosFiltros = [...filtrosSalvos, novoFiltro];
    setFiltrosSalvos(novosFiltros);
    localStorage.setItem('filtros_salvos', JSON.stringify(novosFiltros));
  };

  // ... outras funções
}; 