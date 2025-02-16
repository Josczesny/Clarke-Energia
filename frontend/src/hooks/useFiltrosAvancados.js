import { useState, useCallback, useEffect } from 'react';

const initialFiltros = {
  economiaMin: '',
  custoMaximo: '',
  certificacoes: [],
  tipoEnergia: '',
  avaliacaoMin: '',
  clientesMin: '',
};

export const useFiltrosAvancados = () => {
  const [filtros, setFiltros] = useState(initialFiltros);
  const [filtrosSalvos, setFiltrosSalvos] = useState([]);

  useEffect(() => {
    const savedFiltros = localStorage.getItem('filtros_salvos');
    if (savedFiltros) {
      setFiltrosSalvos(JSON.parse(savedFiltros));
    }
  }, []);

  const handleChange = useCallback((campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  }, []);

  const salvarFiltro = useCallback((nome) => {
    if (!nome) return;

    const novoFiltro = {
      id: Date.now(),
      nome,
      filtros: { ...filtros },
      dataCriacao: new Date().toISOString()
    };

    setFiltrosSalvos(prev => {
      const novosFiltros = [...prev, novoFiltro];
      localStorage.setItem('filtros_salvos', JSON.stringify(novosFiltros));
      return novosFiltros;
    });
  }, [filtros]);

  const limparFiltros = useCallback(() => {
    setFiltros(initialFiltros);
  }, []);

  const aplicarFiltroSalvo = useCallback((filtroSalvo) => {
    setFiltros(filtroSalvo.filtros);
  }, []);

  const aplicarFiltros = useCallback((fornecedores) => {
    return fornecedores.filter(fornecedor => {
      if (filtros.economiaMin && fornecedor.economia < Number(filtros.economiaMin)) {
        return false;
      }
      if (filtros.custoMaximo && fornecedor.custoKwh > Number(filtros.custoMaximo)) {
        return false;
      }
      if (filtros.certificacoes.length > 0 && 
          !filtros.certificacoes.every(cert => fornecedor.certificacoes.includes(cert))) {
        return false;
      }
      // ... outras validações
      return true;
    });
  }, [filtros]);

  return {
    filtros,
    filtrosSalvos,
    handleChange,
    salvarFiltro,
    limparFiltros,
    aplicarFiltroSalvo,
    aplicarFiltros
  };
}; 