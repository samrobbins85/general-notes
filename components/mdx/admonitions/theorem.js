function Theorem(props) {
	return (
		<div className="bg-clip-border bg-gradient-to-r from-orange-300 via-green-300 to-purple-300 py-2 mx-2 rounded">
			<div className="bg-white p-4 mx-2">
				<span className="block text-2xl font-semibold text-black mx-2">
					Theorem {props.name ? "- " + props.name : ""}
				</span>
				<div className="italic mx-2">{props.children}</div>
			</div>
		</div>
	);
}

export default Theorem;
