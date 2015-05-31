var DemoAppDispatcher = require('../dispatcher/DemoAppDispatcher');
var EventEmitter = require('events').EventEmitter;

var assign = require('object-assign');

var _menus = {
  twitter: [
    {
      "text": "",
      "id": "gear",
      "description": "Settings and help",
      "groups": [
        {
          "items": [
            { "id": "profile", "url": "#", "text": "John Doe", "description": "Edit profile" }
          ]
        },
        {
          "items": [
            { "url": "#", "text": "Direct Messages", "selected": true },
            { "url": "#", "text": "Lists" }
          ]
        },
        {
          "items": [
            { "url": "#", "text": "Help" },
            { "url": "#", "text": "Keyboard Shortcuts" },
            { "url": "#", "text": "Twitter Ads" }
          ]
        },
        {
          "items": [
            { "url": "#", "text": "Settings" },
            { "url": "#", "text": "Sign out" }
          ]
        }
      ]
    }
  ],

  rally: [
    {
      "text": "Track",
      "groups": [
        {
          "items": [
            { "url": "#", "text": "Iteration Status" },
            { "url": "#", "text": "Team Status" },
            { "url": "#", "text": "Release Status" },
            { "url": "#", "text": "Work Product Status" },
            { "url": "#", "text": "Release Metrics" },
            { "url": "#", "text": "Portfolio Items" },
            { "url": "#", "text": "Portfolio Timeline" },
            { "url": "#", "text": "Tasks" }
          ]
        },
        {
          "items": [
            { "url": "#", "text": "Prioritized Pulling" },
            { "url": "#", "text": "MVF Kanban Board" },
            { "url": "#", "text": "MVF Capability Hierarchy and Tracking" },
            { "url": "#", "text": "Portfolio Alignment" },
            { "url": "#", "text": "Add Capabilities to an MVF" },
            { "url": "#", "text": "MVF WIP By Capability" },
            { "url": "#", "text": "Technology MVF Kanban" },
            { "url": "#", "text": "eCommerce MVF Kanban Board" }
          ]
        },
        {
          "id": "auxiliary",
          "items": [
            { "url": "#", "text": "New Page" }
          ]
        }
      ]
    },
    { "text": "Quality" },
    { "text": "Reports" },
    { "text": "Search" }
  ],

  hulu: [
    {
      "text": "Hulu",
      "url": "#",
      "id": "home"
    },
    {
      "text": "Browse",
      "groups": [
        {
          "text": "TV",
          "url": "#",
          "items": [
            { "text": "Popular", "url": "#" },
            { "text": "Recently Added", "url": "#" },
            { "text": "Genres", "url": "#" },
            { "text": "Staff Picks", "url": "#" },
            { "text": "Networks", "url": "#" }
          ]
        },
        {
          "text": "Movies",
          "url": "#",
          "items": [
            { "text": "Trailers", "url": "#" },
            { "text": "Documentaries", "url": "#" },
            { "text": "Genres", "url": "#" },
            { "text": "Staff Picks", "url": "#" },
            { "text": "Criterion", "url": "#" }
          ]
        },
        {
          "text": "",
          "id": "misc",
          "url": "#",
          "items": [
            { "text": "Kids", "url": "#" },
            { "text": "Latino", "url": "#" },
            { "text": "Video Games", "url": "#" },
            { "text": "Recommendations", "url": "#" },
            { "text": "Hulu Plus", "url": "#" }
          ]
        }
      ]
    },
    {
      "text": "Try Hulu Plus for Free",
      "url": "#"
    }
  ],

  facebook: [
    { "url": "#", "id": "news", "text": "News Feed", "selected": true },
    { "url": "#", "id": "messages", "text": "Messages", "description": "9" },
    { "url": "#", "id": "friends", "text": "Find Friends", "description": "6" },
    { "url": "#", "id": "events", "text": "Events" },
    { "url": "#", "id": "photos", "text": "Photos" }
  ],

  craigslist: [
    {
      "text": "community",
      "open": true,
      "url": "#",
      "items": [
        { "text": "activities", "url": "#" },
        { "text": "artists", "url": "#" },
        { "text": "childcare", "url": "#" },
        { "text": "general", "url": "#" },
        { "text": "groups", "url": "#" },
        { "text": "pets", "url": "#" },
        { "text": "events", "url": "#" },
        { "text": "lost+found", "url": "#" },
        { "text": "musicians", "url": "#" },
        { "text": "local news", "url": "#" },
        { "text": "politics", "url": "#" },
        { "text": "rideshare", "url": "#" },
        { "text": "volunteers", "url": "#" },
        { "text": "classes", "url": "#" }
      ]
    },
    {
      "text": "personals",
      "open": true,
      "items": [
        { "text": "strictly platonic", "url": "#" },
        { "text": "women seek women", "url": "#" },
        { "text": "women seeking men", "url": "#" },
        { "text": "men seeking women", "url": "#" },
        { "text": "men seeking men", "url": "#" },
        { "text": "misc romance", "url": "#" },
        { "text": "casual encounters", "url": "#" },
        { "text": "missed connections", "url": "#" },
        { "text": "rants and raves", "url": "#" }
      ]
    }
  ]
};

var ExampleMenusStore = assign({}, EventEmitter.prototype, {
  getExamples: function () {
    return _menus;
  }
});

module.exports = ExampleMenusStore;
