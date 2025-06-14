import { Link } from 'react-router-dom';

const NotesNotFound = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-purple-950 text-white p-6'>
			<h1 className='text-4xl font-bold text-balance mb-4'>
				404 - Notes Not Found
			</h1>
			<p className='text-lg text-balance decoration-inherit mb-6'>
				The notes you are looking for do not exist.
			</p>
			<Link to='/' className='text-balance hover:underline'>
				&larr; Go back to Notes Home
			</Link>
		</div>
	);
};

export default NotesNotFound;
