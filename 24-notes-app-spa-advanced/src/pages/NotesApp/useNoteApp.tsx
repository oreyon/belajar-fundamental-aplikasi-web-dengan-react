import { useEffect, useState } from 'react';
import {
	addNote as apiAddNote,
	archiveNote as apiArchiveNote,
	deleteNote as apiDeleteNote,
	getNotes,
	unarchiveNote as apiUnarchiveNote,
	type Note,
  getArchivedNotes,
} from '../../libs/api/note.service';

export const useNoteApp = () => {
	const [activeNotes, setActiveNotes] = useState<Note[]>([]);
	const [archivedNotes, setArchivedNotes] = useState<Note[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchNotes = async () => {
		setLoading(true);
		try {
			const [activeRes, archivedRes] = await Promise.all([
				getNotes(),
				getArchivedNotes(),
			]);
			const activeJson = await activeRes.json();
			const archivedJson = await archivedRes.json();

			setActiveNotes(activeJson.data);
			setArchivedNotes(archivedJson.data);
		} catch (err) {
			console.error('Failed to fetch notes:', err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchNotes();
	}, []);

	// const addNote = async (title: string, body: string) => {
	// 	try {
	// 		await apiAddNote({ title, body });
	// 		await fetchNotes();
	// 	} catch (err) {
	// 		console.error('Failed to add note:', err);
	// 	}
	// };
	//
	// const deleteNote = async (id: string) => {
	// 	try {
	// 		await apiDeleteNote(id);
	// 		await fetchNotes();
	// 	} catch (err) {
	// 		console.error('Failed to delete note:', err);
	// 	}
	// };
	//
	// const toggleArchiveNote = async (id: string, archived: boolean) => {
	// 	try {
	// 		if (archived) {
	// 			await apiUnarchiveNote(id);
	// 		} else {
	// 			await apiArchiveNote(id);
	// 		}
	// 		await fetchNotes();
	// 	} catch (err) {
	// 		console.error('Failed to toggle archive:', err);
	// 	}
	// }; 

	return {
		activeNotes,
		archivedNotes,
		loading,
		addNote: async (title: string, body: string) => {
			await apiAddNote({ title, body });
			await fetchNotes();
		},
		deleteNote: async (id: string) => {
			await apiDeleteNote(id);
			await fetchNotes();
		},
		toggleArchiveNote: async (id: string, archived: boolean) => {
			if (archived) await apiUnarchiveNote(id);
			else await apiArchiveNote(id);
			await fetchNotes();
		}
	};
};