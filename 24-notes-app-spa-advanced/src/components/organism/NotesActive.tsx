import { useContext } from 'react';
import NotesList from './NotesList';
import PropTypes from 'prop-types';
import LanguageContext from '../../contexts/LanguageContext';
import type { Note } from '../../libs/api/note.service';

interface PropTypes {
	notes: Note[];
	deleteNote: (id: string) => void;
	toggleArchiveNote: (id: string) => void;
}

const NotesActive = (props: PropTypes) => {
	const { language } = useContext(LanguageContext);
	const { notes, deleteNote, toggleArchiveNote } = props;

	return (
		<div>
			<h2>
				{language === 'id' ? 'Catatan Aktif' : 'Active Notes'}
			</h2>
			<NotesList
				notes={notes}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

NotesActive.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
			archived: PropTypes.bool.isRequired,
			owner: PropTypes.string.isRequired,
		})
	).isRequired,
	deleteNote: PropTypes.func.isRequired,
	toggleArchiveNote: PropTypes.func.isRequired,
};

export default NotesActive;
