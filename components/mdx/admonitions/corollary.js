export default function corollary(props) {
	return (
		<div className="border border-orange-400 rounded p-4 mx-2 my-6 bg-orange-200">
			<span className="block text-2xl font-semibold text-orange-600">
				Corollary
			</span>
			<div>{props.children}</div>
		</div>
	);
}
