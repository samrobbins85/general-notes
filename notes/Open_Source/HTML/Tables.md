---
title: Using Tables in HTML
---

To start with tables you use a `<table>` tag, this wraps the whole structure, in
the same way as `<body>` wraps your website.

Each row is then implemented using `<tr>` (table row)

The in each row, you insert cells that are either **header** or **data**

For header cells, you use the tag `<th>` and for data cells you use the tag
`<td>`.

There's a lot more to think about here than the previous examples, but an
example should help

```html
<table>
	<tr>
		<th>Header 1</th>
		<th>Header 2</th>
	</tr>
	<tr>
		<td>Data 1</td>
		<td>Data 2</td>
	</tr>
</table>
```

This would form a table that looks like this

| Header 1 | Header 2 |
| -------- | -------- |
| Data 1   | Data 2   |

We will come to the particular way in which tables can be styled in the CSS
section
