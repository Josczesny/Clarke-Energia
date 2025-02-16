import React, { useState, useCallback } from 'react';

export const useFormValidation = (formData) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = useCallback(() => {
    const newErrors = {};

    // Validação de Consumo Mensal
    if (formData.consumoMensal) {
      if (formData.consumoMensal < 0) {
        newErrors.consumoMensal = 'O consumo não pode ser negativo';
      }
      if (formData.consumoMensal > 1000000) {
        newErrors.consumoMensal = 'Valor muito alto. Verifique a unidade (kWh)';
      }
    }

    // Validação de Demanda
    if (formData.demandaContratada) {
      if (formData.demandaContratada < 0) {
        newErrors.demandaContratada = 'A demanda não pode ser negativa';
      }
      if (formData.demandaContratada > 10000) {
        newErrors.demandaContratada = 'Valor muito alto. Verifique a unidade (kW)';
      }
    }

    // Validação de Horário
    if (formData.horarioFuncionamento.inicio && formData.horarioFuncionamento.fim) {
      if (formData.horarioFuncionamento.inicio >= formData.horarioFuncionamento.fim) {
        newErrors.horarioFuncionamento = 'Horário de início deve ser anterior ao fim';
      }
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
    
    return newErrors;
  }, [formData]);

  return { errors, isValid, validate };
}; 