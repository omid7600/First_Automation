import forgotUserPage from  '../pages/forgotUserPage'
import cookiePage from '../pages/cookiePage'



beforeEach(()=>{
    cy.visit('/login');
    cookiePage.clickSelectAllCookie();
})

describe('Happy test cases: type a valid email for forgot password', () => {
  it('enter valid email ', () => {
  forgotUserPage.clickforgotten();



  })
})