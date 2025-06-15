import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NotesApp from './pages/NotesApp/NotesApp';
import ThemeProvider from './contexts/ThemeProvider';
import LanguageProvider from './contexts/LanguageProvider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<BrowserRouter>
					<NotesApp />
				</BrowserRouter>
			</LanguageProvider>
		</ThemeProvider>
	</StrictMode>
);
