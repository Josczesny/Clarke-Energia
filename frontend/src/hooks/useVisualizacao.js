import { useState, useCallback } from 'react';

export const useVisualizacao = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [detalhesAberto, setDetalhesAberto] = useState(null);
  const [comparacaoAtiva, setComparacaoAtiva] = useState(false);

  const toggleDetalhes = useCallback((fornecedorId) => {
    setDetalhesAberto(current => current === fornecedorId ? null : fornecedorId);
  }, []);

  const toggleComparacao = useCallback(() => {
    setComparacaoAtiva(current => !current);
  }, []);

  return {
    viewMode,
    setViewMode,
    detalhesAberto,
    toggleDetalhes,
    comparacaoAtiva,
    toggleComparacao
  };
}; 