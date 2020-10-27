// This is used in the components such as definition and important
import remark from "remark";
import html from "remark-html";
import math from "../lib/remark-math";
export default function mdconvert(set, data) {
	const newchild = data.replace(/\\n /g, "\n");
	remark()
		.use(math)
		.use(html)
		.process(newchild, function (err, file) {
			set(file);
		});
}
