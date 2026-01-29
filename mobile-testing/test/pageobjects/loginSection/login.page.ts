import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Login {
    /**
     * define selectors using getter methods
     */
    public get loginScreen () {
        return $('~Login-screen');
    }

    public get loginFormButton () {
        return $('~button-login-container');
    }

    public get loginEmail () {
        return $('~input-email');
    }

    public get loginPassword () {
        return $('~input-password');
    }

    public get loginButton () {
        return $('~button-LOGIN');
    }

    public get successAlertHeader () {
        return $('android=new UiSelector().resourceId("com.wdiodemoapp:id/alert_title")');
    }

    public get successAlertMessage () {
        return $('android=new UiSelector().resourceId("android:id/message")');
    }

    public get successAlertOkButton () {
        return $('android=new UiSelector().resourceId("android:id/button1")');
    }

    public get emailErrorMessage () {
        return $('android=new UiSelector().text("Please enter a valid email address")');
    }

    public get passwordErrorMessage () {
        return $('android=new UiSelector().text("Please enter at least 8 characters")');
    }

    // Login user with email and password
    public async loginUser (email: string, password: string) {
        // Wait for login screen to be displayed
        await this.loginScreen.waitForDisplayed({ timeout: 30000 });

        // Tap login form button
        await this.loginFormButton.tap();

        // Enter email and password
        await this.loginEmail.setValue(email);
        await this.loginPassword.setValue(password);

        // Tap login button
        await this.loginButton.tap();
    }

    // Verify successful login
    public async verifySuccessfull () {
        // Verify header alert displayed
        await this.successAlertHeader.waitForDisplayed({ timeout: 30000 });
        
        // Verify alert text
        await expect(this.successAlertHeader).toHaveText('Success');
        await expect(this.successAlertMessage).toHaveText('You are logged in!');

        // Dismiss alert
        await this.successAlertOkButton.tap();
    }

    public async verifyErrorMessage(){
        // Check for email error message
        if(await this.emailErrorMessage.isDisplayed()){
            await expect(this.emailErrorMessage).toBeDisplayed();
            console.log("Email error displayed");
        }
        // Check for password error message
        if(await this.passwordErrorMessage.isDisplayed()){
            await expect(this.passwordErrorMessage).toBeDisplayed();
            console.log("Password error displayed");
        }
    }

}

export default new Login();
