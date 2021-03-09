import { useState } from "react";
import LinkList from "./LinkList";
import React from "react";
const Sidebar = React.forwardRef((props, ref) => {
	const [year, setYear] = useState(props.slug ? props.slug[0] : "Base");
	const [module, setModule] = useState(props.slug ? props.slug[1] : false);
	function handleChange(event) {
		setModule(false);
		setYear(event.target.value);
	}

	function Module_layer() {
		return (
			<ul className="divide-y divide-gray-400">
				{year &&
					props.tree.children
						.find((x) => x.name === year)
						.children.map((x) => x.name)
						.map((element) => (
							<li key={element} className="p-2 text-center">
								<button onClick={() => setModule(element)}>
									{element.replace(/_/g, " ")}
								</button>
							</li>
						))}
			</ul>
		);
	}

	function Submodule_List() {
		return (
			<ul className="divide-transparent pt-4">
				{props.tree.children
					.find((x) => x.name === year)
					.children.find((x) => x.name === module)
					.children.sort(function (a, b) {
						if ("extension" in a && !("extension" in b)) {
							return -1;
						}
						if ("extension" in b && !("extension" in a)) {
							return 1;
						}
						return 0;
					})
					.map(function (elem) {
						if ("extension" in elem) {
							return (
								<LinkList
									key={elem.name}
									year={year}
									module={module}
									lecture={elem.name}
								/>
							);
						} else {
							return (
								<li
									key={elem.name}
									className="text-xl font-semibold my-2"
								>
									{elem.name.replace(/_/g, " ")}
									<ul className="text-base font-normal">
										{elem.children.map((lecture) => (
											<LinkList
												key={lecture.name}
												year={year}
												module={module}
												submodule={elem.name}
												lecture={lecture.name}
											/>
										))}
									</ul>
								</li>
							);
						}
					})}
			</ul>
		);
	}

	function Submodule_layer() {
		return (
			<>
				<div className="grid grid-cols-8 gap-2">
					<button
						className="col-span-1"
						onClick={() => setModule(false)}
					>
						<svg
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="h-6"
						>
							<path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
						</svg>
					</button>
					<h1 className="col-span-7 text-2xl font-semibold">
						{module.replace(/_/g, " ")}
					</h1>
				</div>
				<hr className="mt-2 border-2 border-gray-400" />
				<Submodule_List />
			</>
		);
	}

	function Switching() {
		if (module) {
			return <Submodule_layer />;
		} else {
			return <Module_layer />;
		}
	}

	return (
		<div ref={ref}>
			<select
				className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				value={year}
				onChange={handleChange}
			>
				<option key="Base" value="Base" disabled hidden>
					Select a Category
				</option>

				{props.tree.children.map((x) => (
					<option key={x.name} value={x.name}>
						{x.name.replace(/_/g, " ")}
					</option>
				))}
			</select>

			<hr className="mt-4 mb-4" />
			{year !== "Base" && <Switching />}
		</div>
	);
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
