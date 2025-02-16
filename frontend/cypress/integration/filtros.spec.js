describe('Filtros e Ordenação', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('input[type="number"]').type('30000')
    cy.get('button[type="submit"]').click()
  })

  it('deve manter os filtros ao recarregar a página', () => {
    cy.get('select[name="estado"]').select('SP')
    cy.get('select[name="ordenacao"]').select('custoKwh_asc')
    cy.reload()
    cy.get('select[name="estado"]').should('have.value', 'SP')
    cy.get('select[name="ordenacao"]').should('have.value', 'custoKwh_asc')
  })

  it('deve mostrar mensagem quando não houver resultados', () => {
    cy.get('input[type="number"]').clear().type('1000000')
    cy.get('button[type="submit"]').click()
    cy.contains('Nenhum fornecedor encontrado').should('be.visible')
  })
}) 