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

        // Perform Swipe left action
        for (let i = 0; i <= 5; i++) {
            //Verify first item is displayed
            await expect(await Swipe.swipeCarouselItem(i)).toBeDisplayed();

            // Wait for a second before swiping
            await driver.pause(1000);

            // Perform swipe left action with 70% of screen width
            await driver.swipe({ direction: 'left', percent: 0.75, duration: 1000 });
        }

        // Wait for a second before swiping right
        await driver.pause(1000);

        // Perform Swipe right action
        for (let i = 5; i >= 0; i--) {
            //Verify first item is displayed
            await expect(await Swipe.swipeCarouselItem(i)).toBeDisplayed();

            // Wait for a second before swiping
            await driver.pause(1000);

            // Perform swipe right action with 70% of screen width
            await driver.swipe({ direction: 'right', percent: 0.75, duration: 1000 });
        }
    });

    //Swipe Down and Up
    it('Swipe down - up successfully', async () => {
        // Verify Swipe screen is displayed
        await Swipe.swipeScreen.waitForDisplayed({ timeout: 30000 });
        
        // Verify Carousel is visible first
        await expect(await Swipe.swipeCarouselItem0).toBeDisplayed();

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
    });

})
