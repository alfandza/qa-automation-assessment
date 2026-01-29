import { expect } from '@wdio/globals'
import Home from '../pageobjects/home.page.js';
import Swipe from '../pageobjects/swipeSection/swipe.page.js';

describe('Swipe', () => {
    
    beforeEach(async () => {
        // Initiate app and navigate to Forms section
        await Home.open();
        await Home.swipeMenuButton.tap();
        const log = await driver.getWindowSize();
        console.log(log);
        console.log("Width is " + log.width);
        console.log("Height is " + log.height);
    })

    afterEach(async () => {
        // Terminate the app after each test
        await driver.terminateApp("com.wdiodemoapp");
    });

    it('Swipe left - right successfully', async () => {
        // Verify Swipe screen is displayed
        await Swipe.swipeScreen.waitForDisplayed({ timeout: 30000 });

        //Verify first item is displayed
        await expect(await Swipe.swipeCarouselItem(0)).toBeDisplayed();

        //Screenshot after verifying item is displayed
        await driver.saveScreenshot(`./screenshots/03-swipe/swipe-left-right/01-initialize.png`);

        // Wait for a second before swiping
        await driver.pause(1000);

        // Perform swipe left action with 85% of screen width
        await driver.swipe({ direction: 'left', percent: 0.85, duration: 1000 });

        //Verify first item is displayed
        await expect(await Swipe.swipeCarouselItem(1)).toBeDisplayed();

        // Wait for a second before swiping right
        await driver.pause(1000);

        //Screenshot after verifying item is displayed
        await driver.saveScreenshot(`./screenshots/03-swipe/swipe-left-right/02-swipe-left.png`);

        // Perform swipe right action with 85% of screen width
        await driver.swipe({ direction: 'right', percent: 0.85, duration: 1000 });

        //Verify first item is displayed
        await expect(await Swipe.swipeCarouselItem(0)).toBeDisplayed();

        // Wait for a second
        await driver.pause(1000);

        //Screenshot after verifying item is displayed
        await driver.saveScreenshot(`./screenshots/03-swipe/swipe-left-right/03-swipe-right.png`);

    });

    //Swipe Down and Up
    it('Swipe down - up successfully', async () => {
        // Verify Swipe screen is displayed
        await Swipe.swipeScreen.waitForDisplayed({ timeout: 30000 });
        
        // Verify Carousel is visible first
        await expect(await Swipe.swipeCarouselItem0).toBeDisplayed();

        //Screenshot after verifying item is displayed
        await driver.saveScreenshot(`./screenshots/03-swipe/swipe-up-down/01-swipe-up-down.png`);

        // Perform Swipe up action twice
        for (let i = 0; i < 2; i++) {
            // Perform Swipe up action
            await driver.swipe({ direction: 'up', percent: 0.75, duration: 1000 });

            // Wait for a second before swiping
            await driver.pause(1000);
        }

        // Verify image is visible after swiping down
        await expect(await Swipe.swipeDownLogo).toBeDisplayed();
        await expect(await Swipe.swipeDownText).toBeDisplayed();

        //Screenshot after verifying item is displayed
        await driver.saveScreenshot(`./screenshots/03-swipe/swipe-up-down/02-swipe-up-down.png`);

        // Perform Swipe up action twice
        for (let i = 0; i < 2; i++) {
            // Perform Swipe down action
            await driver.swipe({ direction: 'down', percent: 0.75, duration: 1000 });
            // Wait for a second before swiping
            await driver.pause(1000);
        }
        
        // Verify logo is not visible after swiping down
        await expect(await Swipe.swipeDownLogo).not.toBeDisplayed();

        // Verify Carousel is visible instead
        await expect(await Swipe.swipeCarouselItem0).toBeDisplayed();

        //Screenshot after verifying item is displayed
        await driver.saveScreenshot(`./screenshots/03-swipe/swipe-up-down/03-swipe-up-down.png`);
    });

})
