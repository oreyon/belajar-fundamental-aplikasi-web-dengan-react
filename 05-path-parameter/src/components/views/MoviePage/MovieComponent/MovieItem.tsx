import { Link } from 'react-router-dom';

interface PropTypes {
	id: number;
	title: string;
	backdropPath: string;
	overview: string;
}

function MovieItem(props: PropTypes) {
	const { id, title, backdropPath, overview } = props;

	return (
		<article>
			<img src={backdropPath} alt={title} />
			<h3>
				<Link to={`/movies/${id}`}>{title}</Link>
			</h3>
			<p>{overview}</p>
		</article>
	);
}
export default MovieItem;
