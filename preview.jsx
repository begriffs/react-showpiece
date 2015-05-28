'use strict';

var Menu = require('./lib/Menu.jsx');

var items = [
  { url: "http://google.com", text: "Search Engine" },
  { url: "http://wagonhq.com", text: "Wag", description: "Short for wagon" },
  { text: "Just Fun", description: "See, no href" }
];

React.render(<Menu items={items} />, document.getElementById('content'));
