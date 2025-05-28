import { Route, Routes } from 'react-router-dom';
import HomePage from '../../components/views/MovieView/HomePage';
import NowPlayingPage from '../../components/views/MovieView/NowPlayingPage';
import UpcomingPage from '../../components/views/MovieView/UpcomingPage';
import SearchPage from '../../components/views/MovieView/SearchPage';
import Navigation from '../../components/views/MovieView/MovieComponent/Navigation';
import DetailPageWrapper from '../../components/views/MovieView/DetailPage';

function ParameterPathApp() {
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

export default ParameterPathApp;
