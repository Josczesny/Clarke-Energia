describe('Clarke Energia App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve permitir buscar fornecedores', () => {
    cy.get('input[type="number"]').type('30000')
    cy.get('button[type="submit"]').click()
    cy.get('[data-testid="fornecedor-card"]').should('have.length.at.least', 1)
  })

  it('deve filtrar por estado', () => {
    cy.get('input[type="number"]').type('30000')
    cy.get('button[type="submit"]').click()
    cy.get('select[name="estado"]').select('SP')
    cy.get('[data-testid="fornecedor-card"]').each(($card) => {
      cy.wrap($card).should('contain', 'SP')
    })
  })

  it('deve ordenar por preço', () => {
    cy.get('input[type="number"]').type('30000')
    cy.get('button[type="submit"]').click()
    cy.get('select[name="ordenacao"]').select('custoKwh_asc')
    cy.get('[data-testid="custo-kwh"]').then(($precos) => {
      const precos = [...$precos].map(el => parseFloat(el.textContent))
      expect(precos).to.equal(precos.sort())
    })
  })
}) 