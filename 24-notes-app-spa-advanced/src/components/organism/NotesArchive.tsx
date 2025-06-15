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

const NotesArchive = (props: PropTypes) => {
	const { notes, editNote, deleteNote, toggleArchiveNote } = props;
	const { language } = useContext(LanguageContext);

	return (
		<div>
			<h2>{language === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</h2>
			<NotesList
				notes={notes}
				editNote={editNote}
				deleteNote={deleteNote}
				toggleArchiveNote={toggleArchiveNote}
			/>
		</div>
	);
};

NotesArchive.propTypes = {
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

export default NotesArchive;
