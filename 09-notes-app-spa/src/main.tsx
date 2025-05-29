import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NotesApp from './pages/NotesApp/NotesApp';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<NotesApp />
		</BrowserRouter>
	</StrictMode>
);
