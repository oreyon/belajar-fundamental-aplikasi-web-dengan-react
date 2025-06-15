import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NotesApp from './pages/NotesApp/NotesApp';
import ThemeProvider from './contexts/ThemeProvider';
import LanguageProvider from './contexts/LanguageProvider';
import AuthProvider from './contexts/AuthProvider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<AuthProvider>
					<BrowserRouter>
						<NotesApp />
					</BrowserRouter>
				</AuthProvider>
			</LanguageProvider>
		</ThemeProvider>
	</StrictMode>
);
