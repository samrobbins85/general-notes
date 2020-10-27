export default function Footer(props) {
	return (
		<footer className="w-full bg-gray-200 text-center py-4 flex justify-evenly flex-wrap gap-y-2">
			<span className="px-2">
				Credit for the contents of this page goes to{" "}
				<a
					className="text-blue-700 hover:underline"
					href={props.details.link}
				>
					{props.details.name}
				</a>
			</span>
		</footer>
	);
}
