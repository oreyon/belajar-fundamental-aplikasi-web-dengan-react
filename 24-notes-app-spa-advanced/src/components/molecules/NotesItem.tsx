import { useContext } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import LanguageContext from '../../contexts/LanguageContext';
import type { Note } from '../../libs/api/note.service';

interface PropTypes {
	note: Note;
	deleteNote: (id: string) => void;
	toggleArchiveNote: (id: string) => void;
}

const NotesItem = (props: PropTypes) => {
	const { note, deleteNote, toggleArchiveNote } = props;
	const { language } = useContext(LanguageContext);

	return (
		<div className='bg-secondary p-5 mb-4 border border-quaternary rounded-md shadow'>
          <h3 className='text-xl text-quaternary mb-2 font-bold'>
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </h3>
          <p className='text-base mb-4 text-[--font-color]'>{note.body}</p>
          <p className='text-sm mb-3'>
            {language === 'id' ? 'Dibuat' : 'Created'}: {new Date(note.createdAt).toLocaleDateString()}
          </p>
          <div className='flex gap-2'>
            <button
              type='button'
              className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'
              onClick={() => toggleArchiveNote(note.id)}
            >
							{language === 'id' ? (note.archived ? 'Batalkan Arsip' : 'Arsipkan') : (note.archived ? 'Unarchive' : 'Archive')}
            </button>
            <button
              type='button'
              className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'
              onClick={() => deleteNote(note.id)}
            >
              {language === 'id' ? 'Hapus' : 'Delete'}
            </button>
          </div>
    </div>
	);
};

NotesItem.propTypes = {
	note: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
		createdAt: PropTypes.string.isRequired,
		archived: PropTypes.bool.isRequired,
    owner: PropTypes.string.isRequired,
	}).isRequired,
	deleteNote: PropTypes.func.isRequired,
	toggleArchiveNote: PropTypes.func.isRequired,
};

export default NotesItem;
