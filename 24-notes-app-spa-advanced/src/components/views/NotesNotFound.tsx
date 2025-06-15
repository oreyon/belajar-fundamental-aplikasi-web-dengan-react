import { Link } from 'react-router-dom';
import LanguageContext from '../../contexts/LanguageContext';
import { useContext } from 'react';

const NotesNotFound = () => {
	const { language } = useContext(LanguageContext);
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-purple-950 text-white p-6'>
			<h1 className='text-4xl font-bold text-balance mb-4'>
				{language === 'id' ? 'Catatan Tidak Ditemukan' : 'Notes Not Found'}
			</h1>
			<p className='text-lg text-balance decoration-inherit mb-6'>
				{language === 'id'
					? 'Maaf, catatan yang Anda cari tidak ditemukan.'
					: 'Sorry, the note you are looking for does not exist.'}
			</p>
			<Link to='/' className='text-balance hover:underline'>
				{
					language === 'id'
						? 'Kembali ke Beranda'
						: 'Back to Home'
				}
			</Link>
		</div>
	);
};

export default NotesNotFound;
