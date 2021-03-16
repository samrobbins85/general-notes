---
title: "Text formatting in Markdown"
---

# Headings

Using headings in Markdown has a much nicer syntax than that in HTML, all you
need is the hash symbol (`#`).

The number of hashes corresponds to the `h` value in HTML. So `#` is for a
`<h1>`, `##` is for a `<h2>` and so on.

You add text to these headings by adding a space after the symbol then putting
whatever you want the title to be

```md
# This is the top level heading

## This is the second level

### Third level

###### And like HTML, it goes all the way down to 6
```

# Text styling

## Bold

For bold text there are two ways of formatting it, either with stars or
underscores. Unlike in HTML, these do exactly the same thing and so are just
personal preference. The only thing to remember is that there should be **two**
of the symbol on each side

```md
**This is bold**
```

## Italic

Italics have very similar syntax, with the option of stars or underscores, but
just with **one** symbol on each side

```md
_This is italic_
```

You will notice that I have done the two examples with different symbols, this
is due to my code formatter, but is a good idea so that you can do things such
as:

```md
**This is bold _but with italic inside_ **
```

with less confusion
