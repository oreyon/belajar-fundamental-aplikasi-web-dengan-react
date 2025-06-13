import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ContactAppPage from './pages/ContactAppsPage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ContactAppPage/>
		</BrowserRouter>
	</StrictMode>
);
