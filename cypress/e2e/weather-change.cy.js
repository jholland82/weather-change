const baseUrl = 'http://localhost:3000';

beforeEach(() => {
  cy.visit(baseUrl)
})

describe('Loads Weather Change', () => {
  it('Can see the title', () => {
    cy.contains('Weather Change').should('be.visible')
  })

  it('The Reset Button is available', () => {
    cy.contains('Reset').should('be.visible')
  })

  it('Has help text for the app', () => {
    cy.contains(/First, we need to find/).should('be.visible')
  })

  it('Has a search box', () => {
    cy.get('input').should('have.id', 'location-search')
  })
});

describe('Searching for Locations', () => {
  beforeEach(() => {
    cy.get('input').type('Berlin{enter}')
  })

  it('Enters a search value', () => {
    cy.contains('Berlin, Germany').should('be.visible')
  })

  it('Has 5 results', () => {
    cy.get('.location-card').should('have.length', 5)
  })
})

describe('Selecting a Location', () => {
  beforeEach(() => {
    cy.get('input').type('Berlin{enter}')
    cy.contains('Berlin, Germany').click()
  })

  it('Enters a search value', () => {
    cy.contains('.location-card').should('not.exist')
  })

  it('The Search input is removed', () => {
    cy.contains('input').should('not.exist')
  })

  it('Displays Weather information', () => {
    cy.contains('Historical Weather').should('be.visible')
  })

  it('Displays weather icon', () => {
    cy.get('img').should('exist')
  })
})

describe('Clicking Reset', () => {
  beforeEach(() => {
    cy.get('input').type('Berlin{enter}')
    cy.contains('Berlin, Germany').click()
    cy.get('button').click()
  })

  it('Clears the weather', () => {
    cy.contains('Historical Weather').should('not.exist')
  })

  it('Displays the search bar again', () => {
    cy.get('input').should('be.visible')
  })
})

describe('Reset Button Component', () => {
  beforeEach(() => {
    cy.get('input').type('Berlin{enter}')
    cy.contains('Berlin, Germany').click()
  })

  it('Can click the button', () => {
    cy.get('button').click()
    cy.contains('Historical Weather').should('not.exist')
  })

  it('Can click the reset icon', () => {
    cy.get('.refresh-icon').click()
    cy.contains('Historical Weather').should('not.exist')
  })
})
