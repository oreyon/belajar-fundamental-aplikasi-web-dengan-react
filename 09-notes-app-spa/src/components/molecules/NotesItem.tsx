import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import type { Note } from '../../utils/data';

interface PropTypes {
	note: Note;
	editNote: (id: number, title: string, body: string) => void;
	deleteNote: (id: number) => void;
	toggleArchiveNote: (id: number) => void;
}

const NotesItem = (props: PropTypes) => {
	const { note, editNote, deleteNote, toggleArchiveNote } = props;

	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(note.title);
	const [newBody, setNewBody] = useState(note.body);

	const handleSubmitEdit = (e: FormEvent) => {
		e.preventDefault();
		editNote(note.id, newTitle, newBody);
		setIsEditing(false);
	};

	return (
		<div className='bg-white p-5 mb-4 border border-gray-300 rounded-md shadow'>
			{isEditing ? (
				<form
					onSubmit={handleSubmitEdit}
					className='bg-secondary p-5 rounded-md shadow-lg mb-4'>
					<div className='mb-4'>
						<input
							type='text'
							value={newTitle}
							onChange={(e) => setNewTitle(e.target.value)}
							placeholder='Whats Happening?!'
							required
							className='w-full p-3 text-base border border-quaternary rounded-md bg-tertiary'
						/>
					</div>
					<div className='mb-4'>
						<textarea
							value={newBody}
							onChange={(e) => setNewBody(e.target.value)}
							placeholder='Details'
							required
							className='w-full p-3 text-base border border-quaternary rounded-md bg-tertiary'
						/>
					</div>
					<div className='flex gap-2'>
						<button
							type='submit'
							className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'>
							Save
						</button>
						<button
							type='button'
							className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'
							onClick={() => setIsEditing(false)}>
							Cancel
						</button>
					</div>
				</form>
			) : (
				<>
					<h3 className='text-xl text-primary mb-2'>
						<Link to={`/notes/${note.id}`}>{note.title}</Link>
					</h3>
					<p className='text-base mb-4'>{note.body}</p>
					<p className='text-sm text-gray-500 mb-3'>
						Created: {new Date(note.createdAt).toLocaleDateString()}
					</p>
					<div className='flex gap-2'>
						<button
							type='button'
							className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'
							onClick={() => setIsEditing(true)}>
							Edit
						</button>
						<button
							type='button'
							className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'
							onClick={() => toggleArchiveNote(note.id)}>
							{note.archived ? 'Unarchive' : 'Archive'}
						</button>
						<button
							type='button'
							className='py-2 px-4 text-base text-white bg-primary rounded-md hover:bg-quaternary'
							onClick={() => deleteNote(note.id)}>
							Delete
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default NotesItem;
