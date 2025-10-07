import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class keyPressesPage extends Page {
    /**
     * define selectors using getter methods
     */

    //Get the h3 header of the page
    get title () {
        return $("//div[@id='content']//h3[.='Key Presses']");
    }

    //Get the result of the last pressed key on the page.
    get result () {
        return $("/html//p[@id='result']");
    }

    //Get the textbox where inputs are entered.
    get textbox () {
        return $("/html//input[@id='target']");
    }

    /**
     * A method to input a key press into the website.
     * can be used to type one key or a whole sentence.
     */
    async input (keyPress) {
        await this.textbox.setValue(keyPress);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('key_presses');
    }
}

export default new keyPressesPage();
