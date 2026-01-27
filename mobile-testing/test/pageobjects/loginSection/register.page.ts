import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Register {
    /**
     * define selectors using getter methods
     */

    public get registerFormButton () {
        return $('~button-sign-up-container');
    }

    public get registerEmail () {
        return $('~input-email');
    }

    public get registerPassword () {
        return $('~input-password');
    }

    public get registerConfirmPassword () {
        return $('~input-repeat-password');
    }

    public get registerButton () {
        return $('~button-SIGN UP');
    }

    public async register (email: string, password: string, confirmPassword: string) {
        await this.registerFormButton.waitForDisplayed({ timeout: 30000 });
        await this.registerFormButton.tap();
        await this.registerEmail.setValue(email);
        await this.registerPassword.setValue(password);
        await this.registerConfirmPassword.setValue(confirmPassword);
        await this.registerButton.tap();
    }

}

export default new Register();
