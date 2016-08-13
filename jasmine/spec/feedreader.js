/* Spec file that Jasmine reads. Contains all tests run against the app. */

/* All tests placed within $() function, since some tests may require DOM elements.
   To ensure they don't run until the DOM is ready. */

$(function() {  // ref: jQuery() or $() searches through the DOM for any elements that match the
                // provided selector and creates a new jQuery object that references these elements

    /* SUITE 1: test RSS feeds (allFeeds) JSON */
    describe('RSS Feeds', function() {

        /* TEST 1.1: ascertain allFeeds _variable_ is defined and not empty */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds).not.toBe("");          // simpler than length != 0
        });

        /* TEST 1.2: ascertain allFeeds _URL_ is defined and not empty */
        it('have URLs', function() {
            allFeeds.forEach(function(eachFeed) {
                expect(eachFeed.url).toBeDefined();
                expect(eachFeed.url).not.toBe("");
            });
        });

        /* TEST 1.3: ascertain allFeeds _name_ is defined and not empty */
        it('have names', function() {
            allFeeds.forEach(function(eachName) {
                expect(eachName.url).toBeDefined();
                expect(eachName.url).not.toBe("");
            });
        });

    });

    /*-----------------------------------------------------------------------*/

    /* SUITE 2: test sidebar (hamburger menu) behavior */
    describe('The sidebar', function() {

        /* TEST 2.1: ascertain menu element is hidden by default */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TEST 2.2: ascertain menu toggles visibility when icon clicked */
        it('toggles visibility when icon clicked', function() {

            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

    });

    /*-----------------------------------------------------------------------*/

    /* SUITE 3: test initial feeds */
    describe('Initial Entries', function() {

        /* TEST 3.1: ascertain when loadFeed is executed, there is at least one .entry element within .feed container */
        beforeEach(function(done) {
            loadFeed(Math.floor(Math.random()*allFeeds.length), done);  // load a random feed
        })

        it('are present', function(done) {
            expect($('.feed .entry')).not.toBe("");  // check that it is not empty
            done();
         })

        afterEach(function(done) {
            loadFeed(0, done);  // then return to the first feed
        })

    });

    /*-----------------------------------------------------------------------*/

    /* SUITE 4: test new feed selection */
    describe('New Feed Selection', function() {

        /* TEST 4.1: ascertain when a new feed is loaded by the loadFeed function that the content actually changes */
        var initialFeed;

        beforeEach(function(done) {
            var feed_A = Math.floor(Math.random()*allFeeds.length);  // load a random feed
            var feed_B = feed_A === 0 ? allFeeds.length - 1 : feed_A - 1;  // load next feed down or last feed

            loadFeed(feed_A, function(){
                initialFeed = $('.feed').html();
                loadFeed(feed_B, done);
            });
        })

         it('changes content when feed is reloaded', function() {
            expect($('.feed').html()).not.toBe(initialFeed);
         })

        afterEach(function(done) {
            loadFeed(0, done);  // then return to the first feed 
        })

    });

}());
