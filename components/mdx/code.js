var base64 = require("base-64");
var utf8 = require("utf8");
const pako = require("pako");

export default function MyCode(props) {
	if (props.className === "language-mermaid") {
		var result = base64.encode(props.children);
		return <img src={"https://mermaid.ink/img/" + result} alt="Diagram" />;
	} else if (props.className === "language-graphviz") {
		// var bytes = utf8.encode(props.children);
		const compressed = pako.deflate(props.children, {
			level: 9,
			to: "string",
		});
		var result = base64
			.encode(compressed)
			.replace(/\+/g, "-")
			.replace(/\//g, "_");
		return (
			<img
				src={"https://kroki.io/graphviz/svg/" + result}
				alt="Diagram"
			/>
		);
	} else {
		return <code {...props} />;
	}
}
