import { useContext } from 'react';
import NotesItem from '../molecules/NotesItem';
import PropTypes from 'prop-types';
import LanguageContext from '../../contexts/LanguageContext';
import type { Note } from '../../libs/api/note.service';

interface PropTypes {
	notes: Note[];
	deleteNote: (id: string) => void;
	toggleArchiveNote: (id: string) => void;
}

const NotesList = (props: PropTypes) => {
	const { notes, deleteNote, toggleArchiveNote } = props;
	const { language } = useContext(LanguageContext);

	if (notes.length === 0) {
		return <p>{language === 'id' ? 'Tidak ada catatan' : 'No notes available'}</p>;
	}

	return (
		<div>
			{notes.map((note: Note) => (
				<NotesItem
					key={note.id}
					note={note}
					deleteNote={deleteNote}
					toggleArchiveNote={toggleArchiveNote}
				/>
			))}
		</div>
	);
};

NotesList.propTypes = {
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

export default NotesList;
