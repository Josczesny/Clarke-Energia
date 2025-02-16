import { useState, useEffect } from 'react';

export const useComparacao = () => {
  const [fornecedoresComparacao, setFornecedoresComparacao] = useState([]);
  const [economiaTotal, setEconomiaTotal] = useState(0);
  const [melhorOpcao, setMelhorOpcao] = useState(null);

  const adicionarComparacao = (fornecedor) => {
    if (fornecedoresComparacao.length >= 3) {
      return false;
    }
    setFornecedoresComparacao([...fornecedoresComparacao, fornecedor]);
    return true;
  };

  const removerComparacao = (id) => {
    setFornecedoresComparacao(
      fornecedoresComparacao.filter(f => f.id !== id)
    );
  };

  useEffect(() => {
    if (fornecedoresComparacao.length > 0) {
      const melhor = fornecedoresComparacao.reduce((prev, curr) => 
        prev.custoKwh < curr.custoKwh ? prev : curr
      );
      setMelhorOpcao(melhor);
      
      // Calcular economia total
      const custoBase = fornecedoresComparacao[0].custoKwh;
      const economiaTotal = fornecedoresComparacao.reduce((total, f) => 
        total + (custoBase - f.custoKwh) * 100 / custoBase, 0
      );
      setEconomiaTotal(economiaTotal);
    }
  }, [fornecedoresComparacao]);

  return {
    fornecedoresComparacao,
    economiaTotal,
    melhorOpcao,
    adicionarComparacao,
    removerComparacao
  };
}; 