---
title: Using links and images in HTML
---

# Links

Links allow you to direct the user to different pages on your site, or to
different sites on the internet.

Links use the `<a>` tag and `href` attribute in order to work. An example of
linking to google is

```HTML
<a href="https://google.com">Google</a>
```

If you want to link to a page in your site, include all the link after your
domain, including the slash. For example, if you look at the address bar for
this page it says `https://initoss.dev/learn_code/HTML/4-Links`, so all you need
to include is `/learn_code/HTML/4-Links` like this

```HTML
<a href="/learn_code/HTML/4-Links">Links</a>
```

If you instead want to link relative to where you are, start the URL with a dot.
For example, if there was a page under this one called `relative`, using the
link

```HTML
<a href="./relative">Links</a>
```

would link there.

# Images

Images are inserted into HTML using the `<img>` tag The source of the image is
passed in using the `src` attribute, like in the following example

```html
<img src="image.png" alt="Image description" />
```

`alt` is provided for if the image can't be found and for accessibility. An
example of why it might not be found is that you are using an image from a
remote site and the site has gone down.

As for accessibility, people who use screen readers will be read the `alt` text,
so it is important for them that it is descriptive.
