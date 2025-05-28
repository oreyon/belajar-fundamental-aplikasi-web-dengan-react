import { Route, Routes } from 'react-router-dom';
import HomePage from '../../components/views/MoviePage/HomePage';
import NowPlayingPage from '../../components/views/MoviePage/NowPlayingPage';
import UpcomingPage from '../../components/views/MoviePage/UpcomingPage';
import SearchPage from '../../components/views/MoviePage/SearchPage';
import Navigation from '../../components/views/MoviePage/MovieComponent/Navigation';
import DetailPageWrapper from '../../components/views/MoviePage/DetailPage';

function ParameterPathPage() {
	return (
		<>
			<header>
				Movie Catalog
				<Navigation />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/now-playing' element={<NowPlayingPage />} />
					<Route path='/upcoming' element={<UpcomingPage />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/movies/:movieId' element={<DetailPageWrapper />} />
				</Routes>
			</main>
		</>
	);
}

export default ParameterPathPage;
