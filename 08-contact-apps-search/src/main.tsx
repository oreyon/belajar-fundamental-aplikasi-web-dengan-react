import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ContactAppPage from './pages/ContactApp/ContactAppPage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ContactAppPage />
		</BrowserRouter>
	</StrictMode>
);

// create file via terminal using bash
// touch src/App.tsx
