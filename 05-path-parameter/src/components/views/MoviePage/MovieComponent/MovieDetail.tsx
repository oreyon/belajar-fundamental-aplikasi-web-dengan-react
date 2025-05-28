interface PropTypes {
	title: string;
	overview: string;
	posterPath: string;
	releaseDate: string;
}

function MovieDetail(props: PropTypes) {
	const { title, overview, posterPath, releaseDate } = props;
	return (
		<div>
			<img src={posterPath} alt={title} />
			<h2>{title}</h2>
			<p>Release date: {releaseDate}</p>
			<p>{overview}</p>
		</div>
	);
}

export default MovieDetail;
