describe('Powder Report', () => {
  beforeEach('',()=>{
    cy.intercept('GET','https://api.worldweatheronline.com/premium/v1/ski.ashx?key=b5a5dbe0295146dfa83163732231809&q=breckenridge&format=json',{
      statusCode: 201,
      fixture: 'report'
    }).as('report')
    .intercept('GET','https://api.worldweatheronline.com/premium/v1/ski.ashx?key=b5a5dbe0295146dfa83163732231809&q=sdfsdfsdf&format=json',{
      statusCode: 201,
      body: {
          "data": {
            "error": [
              {
              "msg": "Unable to find any matching weather location to the query submitted!"
              }
            ]
          }
        }
    }).as('report2')
    .intercept('GET','https://api.worldweatheronline.com/premium/v1/ski.ashx?key=b5a5dbe0295146dfa83163732231809&q=sdfsdfsdf3&format=json',{
      statusCode: 404,
      body: {
        message: 'Not Found'
      }
    }).as('report3')
    .intercept('GET','https://api.worldweatheronline.com/premium/v1/ski.ashx?key=b5a5dbe0295146dfa83163732231809&q=sdfsdfsdf4&format=json',{
      statusCode: 500,
      body: {
        message: 'Not Found'
      }
    }).as('report4')
    .visit('http://localhost:3000/')
  })
  it('should show home page with a header and form', () => {
    cy.get('.header').contains('button', 'Home').should('be.visible')
    .get('.header').contains('h1', 'Powder Report').should('be.visible')
    .get('.header').contains('button', 'Saved Reports').should('be.visible')
    .get('input[name="location"]').should('be.visible')
    .get('form').contains('button','SUBMIT').should('be.visible')
  })
  it('should allow a user to type in a location and view the snow report', () => {
    cy.get('input[name="location"]').type("breckenridge").should('have.value','breckenridge')
    .get('form').contains('button','SUBMIT').click().wait('@report')
    .url().should('contain','/breckenridge')
    .get('.report').contains('h2','breckenridge Snow Report.')
    .get('.report').contains('p', 'Chance of Snowfall: 10%')
    .get('.report').contains('p','High: 67ºF Low: 46ºF')
    .get('.hour-container').children().should('have.length', 8)
    .get('.hour-container').children().first().contains('h3','12am')
    .get('.hour-container').children().first().contains('p','snow fall: 0.0cm')
    .get('.hour-container').children().last().contains('h3','9pm')
    .get('.hour-container').children().last().contains('p','snow fall: 0.0cm')
    .get('.report').contains('button', 'Save Report')
  })
  it('should allow a user to type in a location and then save the snow report, but not more than once, then view the report and return home to start the process again.', () => {
    cy.get('input[name="location"]').type("breckenridge").should('have.value','breckenridge')
    .get('form').contains('button','SUBMIT').click().wait('@report')
    .get('.report').contains('button', 'Save Report').click()
    .get('.report').contains('p','Congrats! You have saved this report!')
    .get('.report').contains('button', 'Save Report').click()
    .get('.report').contains('p','You have already saved this report!')
    .get('.report').contains('button', 'Save Report').click()
    .get('.report').contains('p','You have already saved this report!')
    .get('.header').contains('button', 'Saved Reports').click()
    .url().should('contain','/savedReports')
    .get('.reports-container').children().should('have.length', 1)
    .get('.card').contains('h3','breckenridge')
    .get('.card').contains('p','Current Snowfall: 0.0cm')
    .get('.card').contains('p','Chance of new Snow: 10%')
    .get('.card').contains('button','🗑').click()
    .get('.reports-container').children().should('have.length', 0)
    .get('.header').contains('button','Home').click()
  })
  it('should allow a user to type in a nonsense location and show the error page', () => {
    cy.get('input[name="location"]').type("sdfsdfsdf").should('have.value','sdfsdfsdf')
    .get('form').contains('button','SUBMIT').click().wait('@report2')
    .url().should('contain','/*')
    .get('.error').contains('p','Unable to find any matching weather location, please return home and try again.')
})
  it('should allow a user to see the error page with a 404 code', () => {
    cy.get('input[name="location"]').type("sdfsdfsdf3").should('have.value','sdfsdfsdf3')
    .get('form').contains('button','SUBMIT').click().wait('@report3')
    .url().should('contain','/*')
    .get('.error').contains('p','Error: please try again later')
})
  it('should allow a user to see the error page with a 500 code', () => {
    cy.get('input[name="location"]').type("sdfsdfsdf4").should('have.value','sdfsdfsdf4')
    .get('form').contains('button','SUBMIT').click().wait('@report4')
    .url().should('contain','/*')
    .get('.error').contains('p','Error: please try again later')
})
})