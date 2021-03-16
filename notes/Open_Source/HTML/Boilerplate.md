---
title: "HTML Boilerplate"
---

The **boilerplate** of a HTML page looks like the below code snippet

<Definition name="Boilerplate">
	Sections of code that have to be included in many places with little or no
	alteration
</Definition>

```HTML
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
  </body>
</html>
```

## DOCTYPE

At the top of every HTML document you will see `<!DOCTYPE html>`, this tells the
browser that the content of the file is HTML. This is largely unneeded in modern
browsers as they will assume this, but it is best practice, so you should still
include it.

## html tag

The `html` tag is used to show that all the content inside should be processed
as HTML. This is the root (top level) element of a HTML document. An important
attribute to include on this tag is `lang`. This allows you to specify the
language of your page, this is useful for screen readers for people with visual
impairment. To specify the language to be english you would do

```HTML
<html lang="en">
<!-- Content in here -->
</html>
```

## head tag

The head is used for all the data that isn't displayed on the page. This
includes a variety of things, including setting the page title and importing
content.

### meta tag

This tag is used to set **metadata** about the page

<Definition name="Metadata">Data about data</Definition>

The example here is to set the character set to be unicode. This allows for a
wider range of characters, such as emojis. If this is not set, then characters
might appear differently on different devices as it will be left to the browser
to choose the character set.

### title tag

This tag is used to set the title of the page, this will appear in the tabs in a
browser. To set it, just insert the desired title inside the tag, for example.

```html
<title>Hello, World!</title>
```

### body tag

This is used for all the content on the page. Whatever you put in here will be
put onto the page.
