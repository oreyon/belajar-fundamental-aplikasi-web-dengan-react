import { useContext } from 'react';
import PropTypes from 'prop-types';
import LanguageContext from '../../contexts/LanguageContext';
import NotesList from './NotesList';
import type { Note } from '../../libs/api/note.service';

interface PropTypes {
	notes: Note[];
	deleteNote: (id: string) => void;
	toggleArchiveNote: (id: string) => void;
}

const NotesArchive = (props: PropTypes) => {
	const { notes, deleteNote, toggleArchiveNote } = props;
	const { language } = useContext(LanguageContext);

	return (
		<div>
			<h2>{language === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</h2>
			<NotesList
				notes={notes}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

NotesArchive.propTypes = {
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

export default NotesArchive;
