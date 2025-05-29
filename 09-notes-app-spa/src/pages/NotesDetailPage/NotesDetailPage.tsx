import { useParams, useNavigate, Navigate } from 'react-router-dom';
import type { Note } from '../../utils/data';
import { useState, type FormEvent } from 'react';

interface Props {
	notes: Note[];
	editNote: (id: number, title: string, body: string) => void;
}

const NotesDetailPage = (props: Props) => {
	const { notes, editNote } = props;
	const { noteId } = useParams();
	const navigate = useNavigate();
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const note = notes.find((n: Note) => n.id === Number(noteId));

	if (!note) {
		return <Navigate to='/not-found' replace />;
	}

	const handleEditSubmit = (e: FormEvent) => {
		e.preventDefault();
		editNote(note.id, title, body);
		setIsEditing(false);
	};

	return (
		<div className='max-w-2xl mx-auto mt-4 p-5 bg-white shadow-lg rounded-md'>
			{isEditing ? (
				<form onSubmit={handleEditSubmit}>
					<div className='mb-4'>
						<input
							placeholder='Title'
							type='text'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
							className='w-full p-3 text-base border border-quaternary rounded-md bg-tertiary'
						/>
					</div>
					<div className='mb-4'>
						<textarea
							placeholder='Body'
							value={body}
							onChange={(e) => setBody(e.target.value)}
							required
							className='w-full p-3 text-base border border-quaternary rounded-md bg-tertiary'
						/>
					</div>
					<div className='flex gap-2'>
						<button
							type='submit'
							className='py-2 px-4 text-white bg-primary rounded-md hover:bg-quaternary'>
							Save
						</button>
						<button
							type='button'
							onClick={() => setIsEditing(false)}
							className='py-2 px-4 text-white bg-primary rounded-md hover:bg-quaternary'>
							Cancel
						</button>
					</div>
				</form>
			) : (
				<>
					<h1 className='text-xl text-primary mb-4'>{note.title}</h1>
					<p className='text-base mb-4'>{note.body}</p>
					<p className='text-sm text-gray-500 mb-4'>
						Created: {new Date(note.createdAt).toLocaleDateString()}
					</p>
					<div className='flex gap-2'>
						<button
							type='button'
							onClick={() => setIsEditing(true)}
							className='py-2 px-4 text-white bg-primary rounded-md hover:bg-quaternary'>
							Edit
						</button>
						<button
							type='button'
							onClick={() => navigate(-1)}
							className='py-2 px-4 text-white bg-primary rounded-md hover:bg-quaternary'>
							Back
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default NotesDetailPage;
