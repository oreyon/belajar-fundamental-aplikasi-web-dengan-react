import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import NotesNotFound from '../../components/views/NotesNotFound';
import NotesCreatePage from '../NotesCreatePage/NotesCreatePage';
import { useEffect, useState } from 'react';
import {
	addNote,
	archiveNote,
	deleteNote,
	editNotes,
	getAllNotes,
	unarchiveNote,
	type Note,
} from '../../utils/data';
import NotesAppHomePage from '../NotesAppHomePage/NotesAppHomePage';
import NotesArchivePage from '../NotesArchivePage/NotesArchivePage';
import NotesDetailPage from '../NotesDetailPage/NotesDetailPage';

const NotesApp = () => {
	const [notes, setNotes] = useState<Note[]>([]);

	useEffect(() => {
		const initialNotes = getAllNotes();
		setNotes(initialNotes);
	}, []);

	const handleAddNote = (title: string, body: string) => {
		addNote({ title, body });
		const updateNotes = getAllNotes();
		setNotes(updateNotes);
	};

	const handleEditNote = (id: number, newTitle: string, newBody: string) => {
		editNotes(id, { title: newTitle, body: newBody, archived: false });
		const updatedNotes = getAllNotes();
		setNotes(updatedNotes);
	};

	const handleDeleteNote = (id: number) => {
		deleteNote(id);
		const updatedNotes = getAllNotes();
		setNotes(updatedNotes);
	};

	const handleToggleArchiveNote = (id: number) => {
		const note = notes.find((n) => n.id === id);
		if (!note) return;

		if (note.archived) {
			unarchiveNote(id);
		} else {
			archiveNote(id);
		}
		const updatedNotes = getAllNotes();
		setNotes(updatedNotes);
	};

	return (
		<Routes>
			<Route element={<DashboardLayout />}>
				<Route path='/' element={<Navigate to={'/notes'} />} />
				<Route
					path='/notes'
					index
					element={
						<NotesAppHomePage
							notes={notes}
							addNote={handleAddNote}
							editNote={handleEditNote}
							deleteNote={handleDeleteNote}
							toggleArchiveNote={handleToggleArchiveNote}
						/>
					}
				/>
				<Route
					path='/notes/create'
					element={<NotesCreatePage addNote={handleAddNote} />}
				/>
				<Route
					path='/notes/archive'
					element={
						<NotesArchivePage
							notes={notes}
							editNote={handleEditNote}
							deleteNote={handleDeleteNote}
							toggleArchiveNote={handleToggleArchiveNote}
						/>
					}
				/>
				<Route
					path='/notes/:noteId'
					element={<NotesDetailPage notes={notes} editNote={handleEditNote} />}
				/>
			</Route>
			<Route path='/not-found' element={<NotesNotFound />} />
			<Route path='*' element={<NotesNotFound />} />
		</Routes>
	);
};

export default NotesApp;
