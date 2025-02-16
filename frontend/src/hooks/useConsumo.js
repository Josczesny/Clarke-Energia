import { useState, useCallback } from 'react';

export const useConsumo = () => {
  const [consumo, setConsumo] = useState('');
  const [error, setError] = useState('');

  const validateConsumo = useCallback((valor) => {
    if (!valor) {
      setError('Consumo é obrigatório');
      return false;
    }
    if (valor <= 0) {
      setError('Consumo deve ser maior que zero');
      return false;
    }
    if (valor > 1000000) {
      setError('Consumo muito alto. Entre em contato com nosso suporte');
      return false;
    }
    setError('');
    return true;
  }, []);

  const handleConsumoChange = useCallback((valor) => {
    setConsumo(valor);
    validateConsumo(parseFloat(valor));
  }, [validateConsumo]);

  return {
    consumo,
    error,
    handleConsumoChange,
    validateConsumo
  };
}; 