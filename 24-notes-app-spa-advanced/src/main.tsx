import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProvider from './contexts/ThemeProvider';
import LanguageProvider from './contexts/LanguageProvider';
import AuthProvider from './contexts/AuthProvider';
import NotesApp from './pages/NotesApp/NotesApp';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<AuthProvider>
					<NotesApp/>
				</AuthProvider>
			</LanguageProvider>
		</ThemeProvider>
	</StrictMode>
);
