import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NewsPage from '../pages/NewsPage';
import ContactsPage from '../pages/ContactsPage';

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
]);

export default Routers;
