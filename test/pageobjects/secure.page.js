import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    get btnLogout () {
        // logout button on the secure page
        return $('a.button');
    }

    get checkbox () {
        return $('checkbox');
    }
}

export default new SecurePage();
