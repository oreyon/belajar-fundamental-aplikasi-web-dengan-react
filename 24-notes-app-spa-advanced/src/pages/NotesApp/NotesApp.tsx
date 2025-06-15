import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import NotesNotFound from '../../components/views/NotesNotFound';
import NotesCreatePage from '../NotesCreatePage/NotesCreatePage';
import NotesAppHomePage from '../NotesAppHomePage/NotesAppHomePage';
import NotesArchivePage from '../NotesArchivePage/NotesArchivePage';
import NotesDetailPage from '../NotesDetailPage/NotesDetailPage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import AuthLayout from '../../components/layouts/AuthLayout';
import { AuthRedirect, ProtectedRoute } from '../../components/layouts/ProtectedRoute';
import LogoutPage from '../LogoutPage';
import { useNoteApp } from './useNoteApp';

const NotesApp = () => {
const {
	activeNotes,
	archivedNotes,
	addNote,
	deleteNote,
	toggleArchiveNote
} = useNoteApp();

	return (
		<Routes>
				<Route path="/" element={<Navigate to="/notes" replace={true}/>} />
 
				<Route element={
					<AuthRedirect>
						<AuthLayout />
					</AuthRedirect>
					}>
					 <Route path={"register"} element={<RegisterPage />}/>
					 <Route path={"login"} element={<LoginPage />}/>
				</Route>
				
				
					<Route element={
						<ProtectedRoute>
							<DashboardLayout />
						</ProtectedRoute>
						}>
						<Route
							path="/notes"
							index
							element={
							<NotesAppHomePage
										notes={activeNotes}
										addNote={addNote}
										deleteNote={deleteNote}
										toggleArchiveNote={(id:string) => {
											const note = activeNotes.find(note => note.id === id);
											if (!note) return;
											toggleArchiveNote(id, note.archived);
										}}
									/>
								}/>
						<Route
							path="/notes/create"
							element={
								<NotesCreatePage addNote={addNote} />
							}/>
						<Route
							path="/notes/archive"
							element={
									<NotesArchivePage
										notes={archivedNotes}
										deleteNote={deleteNote}
										toggleArchiveNote={(id:string) => {
											const note = archivedNotes.find(note => note.id === id);
											if (!note) return;
											toggleArchiveNote(id, note.archived);
										}}
									/>
							}
						/>
						<Route
							path="/notes/:noteId"	
							element={
								<NotesDetailPage />
							}/>
						<Route
							path="/logout"
							element={<LogoutPage/>}/>
					</Route>
				
				<Route path="*" element={<NotesNotFound />} />
    </Routes>
	);
};

export default NotesApp;
