---
title: "Code in Markdown"
---

# Inline

Inline code flows with the text, for example `function`, the backticks here
aren't default in HTML, instead are part of my styling. However backticks is how
you use inline code.

```md
for example `function`
```

# Block

Code blocks are distinct from the text, for example:

```js
console.log("Hello World");
```

These are used for larger snippets of code. They also have the option to add a
language attribute, which can be used for syntax highlighting

They are started with three backticks followed by the language and ended with
three backticks.

<pre>
	<code class="language-md">
		```js
		<br />
		console.log("Hello World")
		<br />
		```
	</code>
</pre>
