import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import LanguageContext from '../../contexts/LanguageContext';
import { FiLogOut } from 'react-icons/fi';

const NotesNavigationView = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { language, toggleLanguage } = useContext(LanguageContext);

	return (
	<header className="flex items-center justify-between bg-primary p-3 text-white shadow-md">
		<div className="flex items-center gap-8">
			<Link to="/notes" className="text-white hover:text-gray-300 transition-colors">
				<h1 className="text-2xl font-bold">Notes App</h1>
			</Link>

			<nav>
				<ul className="flex gap-4">
					<li>
						<Link to="/notes" className="hover:text-gray-300 transition-colors">
							Home
						</Link>
					</li>
					<li>
						<Link to="/notes/create" className="hover:text-gray-300 transition-colors">
							Add Note
						</Link>
					</li>
					<li>
						<Link to="/notes/archive" className="hover:text-gray-300 transition-colors">
							Archive
						</Link>
					</li>
				</ul>
			</nav>
		</div>

		<div className="flex items-center gap-4">
			<button
				aria-label="toggle theme"
				type="button"
				onClick={toggleTheme}
				className="transition-colors hover:text-gray-300"
			>
				{theme === 'light' ? <FaMoon /> : <FaSun />}
			</button>

			<button
				aria-label="toggle language"
				type="button"
				onClick={toggleLanguage}
				className="px-3 py-1 border border-white rounded transition-colors hover:bg-quaternary"
			>
				{language === 'id' ? 'EN' : 'ID'}
			</button>

			<button type={"button"}>
				<Link to="/logout" className="px-3 py-1 border border-white rounded transition-colors hover:bg-quaternary">
					<FiLogOut className="inline-block" />
					{language === 'id' ? 'Keluar' : 'Logout'}
				</Link>
			</button>
		</div>
	</header>
	);
};

export default NotesNavigationView;
