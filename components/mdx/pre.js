export default function MyPre(props) {
	if (["language-mermaid", "language-graphviz"].includes(props.className)) {
		return <div className="overflow-x-auto">{props.children}</div>;
	} else {
		return <pre {...props} />;
	}
}
