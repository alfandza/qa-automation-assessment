import { expect } from '@wdio/globals'
import Home from '../pageobjects/home.page.js';

describe('Launching App', () => {
    it('should launch the app successfully', async () => {
        // Example: wait for a known element on the home screen
        await Home.open();

        //Screenshot after open
        await driver.saveScreenshot(`./screenshots/launch-successfull.png`);
    })
})

