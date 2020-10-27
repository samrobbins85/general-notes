export default function definition(props) {
	return (
		<div className="border border-gray-400 rounded p-4 mx-2 my-6">
			<span className="block text-2xl font-semibold text-black">
				{props.name}
			</span>
			<div>{props.children}</div>
		</div>
	);
}
