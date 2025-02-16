const fornecedorService = require('../services/fornecedorService');

describe('FornecedorService', () => {
  describe('getFornecedoresPorConsumo', () => {
    it('deve lançar erro para consumo inválido', () => {
      expect(() => {
        fornecedorService.getFornecedoresPorConsumo(-100);
      }).toThrow('Consumo mensal deve ser um número positivo');

      expect(() => {
        fornecedorService.getFornecedoresPorConsumo('1000');
      }).toThrow('Consumo mensal deve ser um número positivo');
    });
  });

  describe('getFornecedoresOrdenados', () => {
    it('deve ordenar por custo em ordem crescente', () => {
      const resultado = fornecedorService.getFornecedoresOrdenados('custoKwh', 'asc');
      expect(resultado[0].custoKwh).toBeLessThanOrEqual(resultado[1].custoKwh);
    });

    it('deve ordenar por avaliação em ordem decrescente', () => {
      const resultado = fornecedorService.getFornecedoresOrdenados('avaliacaoMedia', 'desc');
      expect(resultado[0].avaliacaoMedia).toBeGreaterThanOrEqual(resultado[1].avaliacaoMedia);
    });

    it('deve lançar erro para critério inválido', () => {
      expect(() => {
        fornecedorService.getFornecedoresOrdenados('criterioInvalido');
      }).toThrow('Critério de ordenação inválido');
    });
  });
}); 