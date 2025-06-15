import { useContext } from 'react';
import type { Note } from '../../utils/data';
import NotesList from './NotesList';
import PropTypes from 'prop-types';
import LanguageContext from '../../contexts/LanguageContext';

interface PropTypes {
	notes: Note[];
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
}

const NotesActive = (props: PropTypes) => {
	const { language } = useContext(LanguageContext);
	const { notes, editNote, deleteNote, toggleArchiveNote } = props;

	return (
		<div>
			<h2>
				{language === 'id' ? 'Catatan Aktif' : 'Active Notes'}
			</h2>
			<NotesList
				notes={notes}
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

NotesActive.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
			archived: PropTypes.bool.isRequired,
		})
	).isRequired,
	editNote: PropTypes.func.isRequired,
	deleteNote: PropTypes.func.isRequired,
	toggleArchiveNote: PropTypes.func.isRequired,
};

export default NotesActive;
