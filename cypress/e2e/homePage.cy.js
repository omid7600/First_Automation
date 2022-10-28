import cookiePage from "../pages/cookiePage";
import loginPage from "../pages/loginPage";
import homePage from"../pages/homePage"


beforeEach(()=>{
  cy.visit('/login');
  cookiePage.clickSelectAllCookie();
})

describe('Happy test cases: login a  user successfully' , () => {
  it('Login a  user successfully for hoeffner website', () => {
    cy.fixture('example').then((date)=>{
      loginPage.typeEmail(date.email),
          loginPage.typePassword(date.password)
    });
    loginPage.clickButtonSubmit();

  });
})

describe('Login to the site, select products and save in the favorites section', () => {
  it('Login to the site, select products and save in the favorites section successfully', () => {

    homePage.clickFurniture();
    homePage.clickCouches();
    homePage.clickCornerSofas();
    homePage.clickProduct001();
    homePage.clickProduct002();
    homePage.clickProduct003();
    homePage.clickWishListHome();





  })
})