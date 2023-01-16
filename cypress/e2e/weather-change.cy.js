const baseUrl = 'http://localhost:3000';


describe('Loads Weather Change', () => {
  beforeEach(() => {
    cy.visit(baseUrl)
  })

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
    cy.get('input').should('have.class', 'pac-target-input')
  })
});

describe('Searching for Locations', () => {
  beforeEach(() => {
    cy.visit(baseUrl)
      .get('input.pac-target-input')
      .type('Berlin')
      .wait(1000)
      .type('{downarrow}')
      .wait(100)
      .type('{enter}')
  })

  it('Enters a search value', () => {
    cy.contains('Berlin, Germany').should('be.visible')
  })
})

describe('Clicking Reset', () => {
  beforeEach(() => {
    cy.visit(baseUrl)
      .get('input.pac-target-input')
      .type('Berlin')
      .wait(1000)
      .type('{downarrow}')
      .wait(100)
      .type('{enter}')
      .get('button')
      .click()
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
    cy.visit(baseUrl)
      .get('input.pac-target-input')
      .type('Berlin')
      .wait(1000)
      .type('{downarrow}')
      .wait(100)
      .type('{enter}')
      .get('button')
      .click()
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
