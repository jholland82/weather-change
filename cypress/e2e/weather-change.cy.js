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

  it('Shows what it feels like', () => {
    cy.contains('Feels Like').should('be.visible')
  })

  it('Displays weather icon', () => {
    cy.get('img').should('exist')
  })


  describe('Clicking a weather row', () => {
    beforeEach(() => {
      cy.contains('Feels Like').click()
    })

    it('Shows pressure', () => {
      cy.contains('mb').should('be.visible')
    })

    it('Displays humidity', () => {
      cy.contains('Humidity').should('be.visible')
    })

    it('Shows wind speed', () => {
      cy.contains('mph').should('be.visible')
    })
  })

  describe('Clicking Historical Data button', () => {
    beforeEach(() => {
      cy.contains('Load').click()
    })

    it('Loads more rows of data', () => {
      cy.get('.weather-row').should('have.length', 3)
    })

    it('Expands new rows', () => {
      cy.get('.weather-row:last-of-type').click()
      cy.contains('mph')
    })
  })
})

describe('Clicking Reset', () => {
  beforeEach(() => {
    cy.get('input').type('Berlin{enter}')
    cy.contains('Berlin, Germany').click()
    cy.get('.reset-button').click()
  })

  it('Clears the weather', () => {
    cy.contains('Historical Weather').should('not.exist')
  })

  it('Displays the search bar again', () => {
    cy.get('#location-search').should('be.visible')
  })
})

describe('Reset Button Component', () => {
  beforeEach(() => {
    cy.get('input').type('Berlin{enter}')
    cy.contains('Berlin, Germany').click()
  })

  it('Can click the button', () => {
    cy.get('.reset-button').click()
    cy.contains('Historical Weather').should('not.exist')
  })

  it('Can click the reset icon', () => {
    cy.get('.refresh-icon').click()
    cy.contains('Historical Weather').should('not.exist')
  })
})
