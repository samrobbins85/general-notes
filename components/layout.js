export default function Layout(props) {
	const toggle = props.toggle
		? "fixed lg:sticky"
		: "hidden lg:sticky lg:block";

	return (
		<div className="flex flex-col">
			<div className="fixed w-full z-30">{props.navbar}</div>
			<div className="flex">
				<div
					className={`h-screen ${toggle} top-0 w-64 lg:w-1/4 max-w-xs border-r border-gray-400 px-4 overflow-y-auto pt-16 bg-white z-10`}
				>
					{props.sidebar}
				</div>
				<div className="flex flex-col flex-grow max-w-full h-screen lg:h-auto">
					<div
						className={`flex-grow pt-16 ${
							props.toggle && "opacity-25"
						} lg:opacity-100`}
					>
						{props.main}
					</div>
					{props.isFooter && props.footer}
				</div>
			</div>
		</div>
	);
}
