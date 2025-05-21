interface PropTypes {
	id: number;
	title: string;
	backdropPath: string;
	overview: string;
}

function MovieItem(props: PropTypes) {
	const { title, backdropPath, overview } = props;

	return (
		<article>
			<img src={backdropPath} alt={title} />
			<h3>{title}</h3>
			<p>{overview}</p>
		</article>
	);
}
export default MovieItem;
