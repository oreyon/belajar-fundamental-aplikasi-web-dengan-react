import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NewsPage from '../pages/NewsApp/NewsPage';
import ContactsPage from '../components/views/ContactView/ContactsPage';
import SinglePageApp from '../pages/SpaPage/SinglePageApp';

const Routers = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>Page Not Found</div>,
	},
	{
		path: '/01',
		element: <NewsPage />,
		errorElement: <div>Page Not Found</div>,
	},
	{
		path: '/02',
		element: <ContactsPage />,
		errorElement: <div>Page Not Found</div>,
	},
	{
		path: '/03',
		element: <SinglePageApp />,
		errorElement: <div>Page Not Found</div>,
	},
]);

export default Routers;
