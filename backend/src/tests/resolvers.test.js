const resolvers = require('../resolvers');

describe('Resolvers', () => {
  describe('Query', () => {
    describe('fornecedores', () => {
      it('deve retornar lista de todos os fornecedores', () => {
        const result = resolvers.Query.fornecedores();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
      });
    });

    describe('fornecedoresPorConsumo', () => {
      it('deve retornar fornecedores compatíveis com o consumo', () => {
        const consumo = 6000;
        const result = resolvers.Query.fornecedoresPorConsumo(null, { consumoMensal: consumo });
        
        expect(Array.isArray(result)).toBe(true);
        result.forEach(fornecedor => {
          expect(fornecedor.limiteMinKwh).toBeLessThanOrEqual(consumo);
        });
      });

      it('deve retornar array vazio quando consumo menor que todos os limites', () => {
        const result = resolvers.Query.fornecedoresPorConsumo(null, { consumoMensal: 100 });
        expect(result).toHaveLength(0);
      });
    });
  });
}); 