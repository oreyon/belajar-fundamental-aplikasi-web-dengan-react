import { Fragment } from 'react';
import Navigation from '../../components/views/MovieView/MovieComponent/Navigation';
import { Route, Routes } from 'react-router-dom';
import NowPlayingPage from '../../components/views/MovieView/NowPlayingPage';
import UpcomingPage from '../../components/views/MovieView/UpcomingPage';
import DetailPageWrapper from '../../components/views/MovieView/DetailPage';
import HomePage from '../../components/views/MovieView/HomePage';
import SearchPageWrapper from '../../components/views/MovieView/SearchPage';

const QueryParameterApp = () => {
	return (
		<Fragment>
			<header>
				Movie Catalog
				<Navigation />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/now-playing' element={<NowPlayingPage />} />
					<Route path='/upcoming' element={<UpcomingPage />} />
					<Route path='/search' element={<SearchPageWrapper />} />
					<Route path='/movies/:movieId' element={<DetailPageWrapper />} />
				</Routes>
			</main>
		</Fragment>
	);
};

export default QueryParameterApp;
