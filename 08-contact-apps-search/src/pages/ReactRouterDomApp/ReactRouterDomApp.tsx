import { Link, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import HomePage from '../../components/views/Spa/HomePage';
import FAQPage from '../../components/views/Spa/FAQPage';
import AboutPage from '../../components/views/Spa/AboutPage';

function ReactRouterDomApp() {
	return (
		<Fragment>
			<header>
				<ul>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/faq'}>FAQ</Link>
					</li>
				</ul>
			</header>
			<main>
				<Routes>
					<Route path={'/'} element={<HomePage />} />
					<Route path={'/about'} element={<AboutPage />} />
					<Route path={'/faq'} element={<FAQPage />} />
				</Routes>
			</main>
		</Fragment>
	);
}

export default ReactRouterDomApp;
