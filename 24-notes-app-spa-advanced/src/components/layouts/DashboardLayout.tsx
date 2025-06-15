import NotesNavigationView from '../organism/NotesNavigationView';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const DashboardLayout = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div  className={`min-h-screen transition-colors duration-300 ${
			theme === 'light' ? 'bg-secondary' : 'bg-tertiary text-white'
      }`}>
			<div>
				<NotesNavigationView />
			</div>
			<main className={"p-4"}>
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;
