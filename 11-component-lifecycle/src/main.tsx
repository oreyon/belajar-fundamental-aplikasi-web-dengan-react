import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ComponentLifecyclePage from './pages/ComponentLifecyclePage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ComponentLifecyclePage/>
		</BrowserRouter>
	</StrictMode>
);
