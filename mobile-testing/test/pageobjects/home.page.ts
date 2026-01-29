import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Home {
    /**
     * define selectors using getter methods
     */
    public get homeScreen () {
        return $('~Home-screen');
    }

    public get homeMenuButton () {
        return $('~Home');
    }

    public get webviewMenuButton () {
        return $('~Webview');
    }

    public get loginMenuButton () {
        return $('~Login');
    }

    public get formsMenuButton () {
        return $('~Forms');
    }

    public get swipeMenuButton () {
        return $('~Swipe');
    }

    public get dragMenuButton () {
        return $('~Drag');
    }

    public async open () {
        await driver.activateApp("com.wdiodemoapp") 
        
        await this.homeScreen.waitForDisplayed({ timeout: 30000 });

        await expect(this.homeMenuButton).toBeDisplayed();
        await expect(this.webviewMenuButton).toBeDisplayed();
        await expect(this.loginMenuButton).toBeDisplayed();
        await expect(this.formsMenuButton).toBeDisplayed();
        await expect(this.swipeMenuButton).toBeDisplayed();
        await expect(this.dragMenuButton).toBeDisplayed();

    }

}

export default new Home();
