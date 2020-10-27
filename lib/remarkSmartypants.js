const visit = require("unist-util-visit");
const retext = require("retext");
const retextSmartypants = require("retext-smartypants");
export default function remarkSmartypants(options) {
	const processor = retext().use(retextSmartypants, options);
	function transformer(tree) {
		visit(tree, "text", (node) => {
			node.value = String(processor.processSync(node.value));
		});
	}
	return transformer;
}
