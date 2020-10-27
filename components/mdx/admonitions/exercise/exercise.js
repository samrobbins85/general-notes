import { useState } from "react";
export default function Exercise(props) {
	const [hidden, setHidden] = useState(true);
	return (
		<div className="border border-gray-700 p-4 rounded my-12">
			{props.children.length ? (
				<>
					{props.children.filter(
						(child) => child.props.originalType.name === "Question"
					)}

					<div className={hidden ? "hidden" : ""}>
						{props.children.filter(
							(child) =>
								child.props.originalType.name === "Answer"
						)}
					</div>
				</>
			) : (
				<div>{props.children}</div>
			)}
			{props.children.length && (
				<div className="flex justify-center">
					<button onClick={() => setHidden(!hidden)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="h-6 w-6 inline-block mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d={
									hidden
										? "M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
										: "M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
								}
							/>
						</svg>
						{hidden ? "Show" : "Hide"} answer
					</button>
				</div>
			)}
		</div>
	);
}
