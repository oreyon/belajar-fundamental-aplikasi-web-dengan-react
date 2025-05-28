interface PropsType {
	title: string;
	description: string;
	image: string;
	isFeatured: boolean;
	tags: string[];
	bookmark: () => void;
	style?: React.CSSProperties;
}

const News = (props: PropsType) => {
	const { title, description, image, isFeatured, tags, bookmark, style } =
		props;

	return (
		<div style={style}>
			<h2>{title}</h2>
			<img src={image} alt={title} />
			<p>{description}</p>
			{isFeatured && <span>Featured</span>}
			<div>
				{tags.map((tag, index) => (
					<span key={index}>{tag}</span>
				))}
			</div>
			<button onClick={bookmark}>Bookmark</button>
		</div>
	);
};

export default News;
