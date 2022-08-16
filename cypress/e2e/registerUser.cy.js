import cookiePage from '../pages/cookiePage'

beforeEach(()=>{
  cy.visit('/registrierung');
  cookiePage.clickSelectAllCookie();
})

describe('register a new user', () => {
  it('register a new user successfully for hoeffner website', () => {


  })
  it('Register a doplicate user', () => {


  })

})
