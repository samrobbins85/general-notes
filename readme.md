# Notes Site

This is a site for my university notes, written in MDX

You can find the markdown for all the lectures in the `notes` directory, and all the images in the `public` directory. When adding styles you can use [Tailwind CSS](https://tailwindcss.com/).

## Diagrams

You can add diagrams using [mermaidjs](https://mermaid-js.github.io/mermaid/#/) and [graphviz](https://www.graphviz.org/). I also can easily add any of the diagram types from [kroki](https://kroki.io/), so raise an issue if you want to use one of them.

To use them, simply create a codeblock with the language of `mermaid` and `graphviz` respectively and write the diagram and it will be imported

## Workarounds

For all the admonitions, such as `<Definition>`, have a space before and after the text, such as

```
<Definition title="Test">

**Content** in here

</Definition>
```

This allows the markdown to be processed

## Performance issues in Firefox with uBlock Origin

By default uBlock Origin disables link prefetching, which is one of the methods that the website uses to increase performance. If you notice the site being slow when you are using Firefox with uBlock Origin, you can change this in the uBlock Origin settings on the **settings** tab under **privacy** uncheck **disable link prefetching**.
