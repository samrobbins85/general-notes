export default function lemma(props) {
	return (
		<div className="border border-green-400 rounded p-4 mx-2 my-6 bg-green-200">
			<span className="block text-2xl font-semibold text-green-600">
				Lemma
			</span>
			<div>{props.children}</div>
		</div>
	);
}
