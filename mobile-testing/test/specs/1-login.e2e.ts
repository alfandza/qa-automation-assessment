import { expect } from '@wdio/globals'
import Home from '../pageobjects/home.page.js';
import Login from '../pageobjects/loginSection/login.page.js';

describe('Login', () => {

    beforeEach(async () => {
        await Home.open();
        await Home.loginMenuButton.tap();
    })

    afterEach(async () => {
        await driver.terminateApp("com.wdiodemoapp");
    });

    it('should login successfully', async () => {
        await Login.loginUser("test@mail.com", "password");
        await Login.verifySuccessfull();

        //Screenshot after login
        await driver.saveScreenshot(`./screenshots/01-login/01-login-success.png`);
    })

    it('Login incorrectly - Password is not 8 characters', async () => {
        await Login.loginUser("invalid@mail.com", "pass");

        await Login.verifyErrorMessage();

        //Screenshot after login
        await driver.saveScreenshot(`./screenshots/01-login/02-password-not-8-characters.png`);
    })

    it('Login incorrectly - Email is invalid', async () => {
        await Login.loginUser("invalid", "password123");

        await Login.verifyErrorMessage();

        //Screenshot after login
        await driver.saveScreenshot(`./screenshots/01-login/03-email-invalid.png`);
    })

    it('Login incorrectly - Email and password invalid', async () => {
        await Login.loginUser("invalid", "123");

        await Login.verifyErrorMessage();

        //Screenshot after login
        await driver.saveScreenshot(`./screenshots/01-login/04-email-password-invalid.png`);
    })
})

