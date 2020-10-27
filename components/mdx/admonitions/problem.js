export default function problem(props) {
	return (
		<div className="border border-teal-600 rounded p-4 mx-2 my-6 bg-teal-200">
			<span className="text-xl text-teal-800 font-semibold uppercase">
				Problem {props.name ? "- " + props.name : ""}:
			</span>
			<span className="block text-lg text-teal-700 pl-4 py-4">
				<span className="font-semibold">Instance -</span>{" "}
				{props.instance}
			</span>
			<span className="block text-lg text-teal-700 pl-4">
				<span className="font-semibold">Question -</span>{" "}
				{props.question}
			</span>
		</div>
	);
}
