export default function MyImg(props) {
	if (props.title !== undefined) {
		return (
			<figure>
				<img
					className="mx-auto block"
					src={props.src}
					alt={props.alt}
				/>
				<figcaption className="text-center">{props.title}</figcaption>
			</figure>
		);
	} else {
		return (
			<img className="mx-auto block" src={props.src} alt={props.alt} />
		);
	}
}
