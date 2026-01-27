import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Swipe {
    /**
     * define selectors using getter methods
     */
    public get swipeScreen () {
        return $('~Swipe-screen');
    }

    public get swipeCarouselItem0 () {
        return $('android=new UiSelector().resourceId("__CAROUSEL_ITEM_0__")');
    }

    public get swipeCarouselItem1 () {
        return $('android=new UiSelector().resourceId("__CAROUSEL_ITEM_1__")');
    }

    public get swipeCarouselItem2 () {
        return $('android=new UiSelector().resourceId("__CAROUSEL_ITEM_2__")');
    }

    public get swipeCarouselItem3 () {
        return $('android=new UiSelector().resourceId("__CAROUSEL_ITEM_3__")');
    }

    public get swipeCarouselItem4 () {
        return $('android=new UiSelector().resourceId("__CAROUSEL_ITEM_4__")');
    }

    public get swipeCarouselItem5 () {
        return $('android=new UiSelector().resourceId("__CAROUSEL_ITEM_5__")');
    }

    public async swipeCarouselItem (index: number) {
        return $(`android=new UiSelector().resourceId("__CAROUSEL_ITEM_${index}__")`);
    }

    public get swipeDownLogo () {
        return $('~WebdriverIO logo');
    }

    public get swipeDownText() {
        return $('android=new UiSelector().text("You found me!!!")')
    }

}

export default new Swipe();
