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
        
        it('page shoule have award component', function () {
            var elem = element(by.id('award'));
            expect(elem).not.toBeNull();
        });
        
        it('page should have footer component', function () {
            var elem = element(by.id('footer'));
            expect(elem).not.toBeNull();
        });
    });
    
    describe('Navigation', function () {
       // Test each navigation links/buttons
    });
    
    describe('Award', function () {
        // Test award links
    });
    
    describe('Footer', function () {
        // Test footer link/buttons
    });
}());