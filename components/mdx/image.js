import Image from "next/image";
export default function MyImg(props) {
	if (props.title !== undefined) {
		return (
			<figure>
				<Image
					className="mx-auto block"
					src={props.src}
					alt={props.alt}
					unsized={true}
				/>
				<figcaption className="text-center">{props.title}</figcaption>
			</figure>
		);
	} else {
		return (
			<Image
				className="mx-auto block"
				src={props.src}
				alt={props.alt}
				unsized={true}
			/>
		);
	}
}
