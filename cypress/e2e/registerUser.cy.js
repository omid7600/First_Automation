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
  it('Enter Valid name and last name  ', () => {


  })
  it('Enter invalid name and invalid last name ', () => {


  })
  it('Enter valid Email address ', () => {


  })
  it('Enter invalid Email addres ', () => {


  })
  it('Enter valid password', () => {

  })
  it('Enter invalid password ', () => {

  })
  it('Enter valid  Rep passvord ', () => {

  })
  it('Enter invalid Rep password ', () => {

  })
  it('Click checkbox agree', () => {

  })
  it('Click checkbox News', () => {

  })
  it('Click button continue and leave all field empty', () => {

  })

})
