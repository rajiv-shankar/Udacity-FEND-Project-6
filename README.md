# Feed Reader Testing

[Click here] (https://rajiv-shankar.github.io/Udacity-FEND-Project-6/) to see a web-based application that reads RSS feeds (a pre-existing app).

The `feedreader.js` includes the following tests using Jasmine:

### SUITE 1: test RSS feeds (allFeeds) JSON
**TEST 1.1**:  ascertain allFeeds _variable_ is defined and not empty
**TEST 1.2**:  ascertain allFeeds _URL_ is defined and not empty
**TEST 1.3**:  ascertain allFeeds _name_ is defined and not empty


### SUITE 2: test sidebar (hamburger menu) behavior
**TEST 2.1**:  ascertain menu element is hidden by default
**TEST 2.2**:  ascertain menu toggles visibility when icon clicked


### SUITE 3: test initial feeds
**TEST 3.1**:  ascertain when loadFeed is executed, there is at least one .entry element within .feed container


### SUITE 4: test new feed selection
**TEST 4.1**:  ascertain when a new feed is loaded by the loadFeed function that the content actually changes

