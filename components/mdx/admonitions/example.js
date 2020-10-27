import { useState } from "react";
export default function Example(props) {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="border border-gray-400 rounded p-4 mx-2 my-6">
			<div className="flex">
				<button
					className="inline-block mr-4"
					onClick={() => setToggle(!toggle)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-6 w-6 stroke-current text-gray-600 hover:text-gray-800"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8 9l4-4 4 4m0 6l-4 4-4-4"
						/>
					</svg>
				</button>
				<div className="text-xl font-semibold text-black leading-none w-full flex flex-col sm:block">
					<span className="inline-block">Example</span>
					{props.title && (
						<span className="text-gray-600 text-base sm:text-lg float-right inline-block ">
							{props.title}
						</span>
					)}
				</div>
			</div>
			<div className={!toggle && "hidden"}>{props.children}</div>
		</div>
	);
}
