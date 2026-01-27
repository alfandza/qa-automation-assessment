import { expect } from '@wdio/globals'
import Home from '../pageobjects/home.page.js';
import Forms from '../pageobjects/formSection/forms.page.js';

describe('Forms', () => {

    beforeEach(async () => {
        // Initiate app and navigate to Forms section
        await Home.open();
        await Home.formsMenuButton.tap();
    })

    afterEach(async () => {
        // Terminate the app after each test
        await driver.terminateApp("com.wdiodemoapp");
    });

    it('Input forms successfully', async () => {
        // Verify Forms screen is displayed
        await Forms.formsScreen.waitForDisplayed({ timeout: 30000 });

        //Input the text and verify input text result is correct
        const testWord = "Hello World";
        await Forms.inputTextField.setValue(testWord);
        await expect(Forms.inputTextResult).toHaveText(testWord);

        // Toggle the switch to ON
        await Forms.switchToggle.tap();
        await expect(Forms.switchToggleText).toHaveText("Click to turn the switch OFF");

        // Turn the switch back to OFF
        await Forms.switchToggle.tap();
        await expect(Forms.switchToggleText).toHaveText("Click to turn the switch ON");

        // Select an option from the dropdown
        await Forms.dropdownSelect("Appium is awesome");

        // Tap the Active button
        await Forms.buttonActive.tap();

        // Verify Alert Dialogue
        await Forms.alertHeader.waitForDisplayed({ timeout: 30000 });
        await expect(Forms.alertHeader).toBeDisplayed();
        await expect(Forms.alertMessage).toBeDisplayed();
        await expect(Forms.alertOkButton).toBeDisplayed();
        await expect(Forms.alertCancelButton).toBeDisplayed();
        await expect(Forms.alertAskMeLaterButton).toBeDisplayed();

        // Dismiss the alert by tapping OK
        await Forms.alertOkButton.tap();
        await expect(Forms.alertHeader).not.toBeDisplayed();

        // Verify Inactive button
        await expect(Forms.buttonInactive).toBeDisplayed();
    })
})

