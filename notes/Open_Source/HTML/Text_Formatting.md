---
title: "Basic Text Formatting"
---

The most basic way to include text in your website is inside a `<p>` tag, this
is for **paragraphs**, so standard formatted text. You use it as follows:

```html
<p>Include your text here</p>
```

# Headings

You can also add headings to your website, these are numbered `<h1>` through to
`<h6>` and will be smaller as you increase the number. The styling of these is
determined by your browser, but they will all follow this rule.

You would use these as follows:

```html
<h1>Biggest title</h1>
<h2>Then this one</h2>
<h3>Then this one</h3>
<h4>Then this one</h4>
<h5>Then this one</h5>
<h6>And this is the smallest</h6>
```

# Text styling

There are many ways to style your text using HTML tags

## Bold

To make text **bold**, you need to use the `<b>` tag

```HTML
<p>Normal text <b>Now the text is bold</b> back to normal</p>
```

You may also see `<strong>` being used. Most browsers will style these the same.
`<strong>` is for text with "strong importance".

## Italic

To make text _italic_, you need to use the `<i>` tag, used in a very similar way
to bold

```HTML
<p>Normal text <i>Here is italic text</i> now back to normal </p>
```

There is also a similar tag `<em>`, used for emphasis. Again this will usually
be styled in the same way. A screen reader will place verbal stress on words in
`<em>` tags but not `<i>`, so that is to consider

## Other styling

There are a range of other styles, including

-   [`<small>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)
    for small text
-   [`<sub>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub) for
    subscript text
-   [`<ins>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins) for
    text that has been added to a document
-   [`<del>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del) for
    text that has been removed from a document
-   [`<mark>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
    for highlighted text

However they are not commonly used so I won't go into detail on them
