import { Fragment } from 'react/jsx-runtime';
import NotesCreate from '../../components/molecules/NotesCreate';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';

interface PropTypes {
	addNote: (title: string, body: string) => void;
}

const NotesCreatePage = (props: PropTypes) => {
	const { addNote } = props;
	const { language } = useContext(LanguageContext);
	const navigate = useNavigate();

	const handleAddContact = (title: string, body: string) => {
		addNote(title, body);
		navigate('/');
	};

	return (
		<Fragment>
			<div className={'max-w-2xl w-4/5 mx-auto p-4'}>
				<h1 className='text-2xl font-bold text-quaternary mb-4'>
					{language === 'id' ? 'Buat Catatan' : 'Create Note'}
				</h1>
				<NotesCreate createNote={handleAddContact} />
			</div>
		</Fragment>
	);
};

NotesCreatePage.propTypes = {
	addNote: PropTypes.func.isRequired,
};

export default NotesCreatePage;
