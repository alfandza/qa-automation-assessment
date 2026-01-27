import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Forms {
    /**
     * define selectors using getter methods
     */
    public get formsScreen () {
        return $('~Forms-screen');
    }

    public get inputTextField () {
        return $('~text-input');
    }

    public get inputTextResult () {
        return $('~input-text-result')
    }

    public get switchToggle () {
        return $('~switch');
    }

    public get switchToggleText () {
        return $('~switch-text');
    }

    public get dropDownMenu () {
        return $('~Dropdown');
    }

    public async dropdownSelect (option: string) {
        // Tap Dropdown to open options
        await this.dropDownMenu.tap();

        // Select the option based on the visible text
        const optionSelector = $(`//android.widget.ListView[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]` + `/android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${option}"]`);
        await optionSelector.click();
    }

    public get buttonActive () {
        return $('~button-Active')
    }

    public get buttonInactive () {
        return $('~button-Inactive')
    }

    public get alertHeader () {
        return $('android=new UiSelector().resourceId("com.wdiodemoapp:id/alert_title")')
    }

    public get alertMessage () {
        return $('android=new UiSelector().resourceId("android:id/message")')
    }

    public get alertOkButton () {
        return $('android=new UiSelector().resourceId("android:id/button1")')
    }

    public get alertCancelButton () {
        return $('android=new UiSelector().resourceId("android:id/button2")')
    }

    public get alertAskMeLaterButton () {
        return $('android=new UiSelector().resourceId("android:id/button3")')
    }
}

export default new Forms();
