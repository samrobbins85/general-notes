import ActiveLink from "./ActiveLink";
export default function LinkList(props) {
	return (
		<li key={props.lecture.replace(/\.[^/.]+$/, "")}>
			<ActiveLink
				activeClassName="bg-blue-100 text-blue-800 rounded hover:text-blue-800"
				href={
					"/" +
					props.year +
					"/" +
					props.module +
					"/" +
					(props.submodule ? props.submodule + "/" : "") +
					props.lecture.replace(/\.[^/.]+$/, "")
				}
			>
				<a className="hover:text-gray-900 text-gray-600 font-medium block relative py-1 pl-2">
					{props.lecture.replace(/\.[^/.]+$/, "").replace(/_/g, " ")}
				</a>
			</ActiveLink>
		</li>
	);
}
