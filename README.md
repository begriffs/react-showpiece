<img src="illustrations/darkdiamond.png" alt="Showpiece" align="right" />
### your data → perfect semantic html

Check out the [project page](http://begriffs.github.io/showpiece) and
try the [playground](http://begriffs.github.io/showpiece/playground).

Let's give designers a sane baseline for their work. Showpiece is a compilation of
[templates](https://json-template.googlecode.com/svn/trunk/doc/Introducing-JSON-Template.html)
to turn JSON descriptions of page elements into perfect semantic markup.
The idea is that web apps will serve only relevant JSON data and then
either client side code or a separate dedicated server will use these
templates to render the final markup.

This isn't an effort to make all web pages look the same, but to
standardize expressive markup and allow designers maximum freedom while
giving them a familiar standard. Sites using showpiece can crib from a
common pool of styles, and are expressive enough to gracefully degrade
on all devices and clients.

### Abstracted from Real Sites

The markup in this project comes from experiments replicating parts of
real sites. The challenge is to collect a wide assortment of screenshots
of actual page items, like menus, then invent one piece of clean markup
that can be styled to look like any of them.

### Quality

The resulting markup is crowd-curated to be
* responsive
* accessible
* continuously refined
* semantic
* search-engine optimized

### Efficiency

* Language and framework agnostic
* Protect designers from noob developers
* Confidently share stylesheets

### Contributing

So far this project includes a template for menus, but it still needs
templates for every other kind of common web widget To name a few:
breadcrumbs, forms, and pagination links.

You can also improve existing templates. Here's how. Take a screenshot
of a widget on a real site. Let's say it's a menu on www.foo.com. And
the screenshot to `wild/menus/foo.png`. Now try to define the showpiece
structure of the menu and save it in `templates/menu/examples/foo.json`.
Finally try to style the markup that showpiece generates and save your
style to `templates/menu/styles/foo.css`. If the markup isn't flexible
enough to let you style the widget correctly then submit an issue to
this repo.

The showpiece
[playground](http://begriffs.github.io/showpiece/playground) is a good
place to experiment with creating a new widget style. It dynamically
loads templates, examples, and styles from this repo and provides quick
feedback.

### License

Showpiece is Copyright © 2013 Joe Nelson. It is free software, and may
be redistributed under the terms specified in the LICENSE file.
