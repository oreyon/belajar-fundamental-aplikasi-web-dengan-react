import { Link } from 'react-router-dom';

const NotesNavigationView = () => {
	return (
		<header className='flex items-center justify-around gap-3 bg-primary p-3 text-white shadow-md'>
			<div className='flex items-center justify-center space-x-6'>
				<Link
					to={'/notes'}
					className='text-white hover:text-gray-300 transition-colors'>
					<h1 className='text-2xl font-bold'>Notes App</h1>
				</Link>
				<nav>
					<ul className='flex space-x-4'>
						<li>
							<Link
								to='/notes'
								className={'hover:text-gray-300 transition-colors'}>
								Home
							</Link>
						</li>
						<li>
							<Link
								to={'/notes/create'}
								className={'hover:text-gray-300 transition-colors'}>
								Add Note
							</Link>
						</li>
						<li>
							<Link
								to={'/notes/archive'}
								className={'hover:text-gray-300 transition-colors'}>
								Archive
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default NotesNavigationView;
