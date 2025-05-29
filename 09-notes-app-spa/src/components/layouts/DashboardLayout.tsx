import { Fragment } from 'react/jsx-runtime';
import NotesNavigationView from '../organism/NotesNavigationView';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
	return (
		<Fragment>
			<div>
				<NotesNavigationView />
			</div>
			<main>
				<Outlet />
			</main>
		</Fragment>
	);
};

export default DashboardLayout;
