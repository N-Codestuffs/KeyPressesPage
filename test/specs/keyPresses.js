import { expect } from '@wdio/globals'
import keyPressesPage from '../pageobjects/keyPresses.page.js'

describe('Key presses page functionality', () => {
    // create a new page for key presses.

    it('Check that we are on the Key Presses page', async () => {
        //open the page
        await keyPressesPage.open()

        //maximize browser window
        await browser.maximizeWindow();

        //confirm we are on the right page by comparing h3 text to what should be the title
        await expect(keyPressesPage.title).toHaveText('Key Presses');   
    });

    it.skip('Check that it displays the last key entered somewhere on the page', async () => {
        //enter a key into the text box.
        await keyPressesPage.input('e');

        //Check if the result displays the same key that was entered.
        await expect(keyPressesPage.result).toHaveText('You entered: E');
    });

    it('Check that certain keys do not function on the page.', async () => {
        // create a const with each known invalid key
        const iKeys = '-;='

        //create an async for loop that inputs each key and checks if no result appears.
        for (const key of iKeys) {
            // input the current key of the loop
            await keyPressesPage.input(key);

            // ensure that no key is in the result
            await expect(keyPressesPage.result).toHaveText('You entered:');
        }
    });
    
});