/*global describe, browser, expect, element, by */

(function () {
    describe('Initial Look & Feel', function () {
        browser.get('https://foralyka-shahfazliz.c9users.io/');
        
        it('page should have title Outback Initiatives', function () {
            expect(browser.getTitle()).toEqual('Outback Initiatives');
        });
        
        it('page should have banner component', function () {
            var elem = element(by.id('banner'));
            expect(elem).not.toBeNull();
        });
        
        it('page should have navigation component', function () {
            var elem = element(by.id('navigation'));
            expect(elem).not.toBeNull();
        });
        
        it('page should have footer component', function () {
            var elem = element(by.id('footer'));
            expect(elem).not.toBeNull();
        });
    });
}());