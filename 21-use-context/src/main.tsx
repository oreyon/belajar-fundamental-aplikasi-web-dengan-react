import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import UseContextAppPage from './pages/UseContextAppPage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<UseContextAppPage/>
		</BrowserRouter>
	</StrictMode>
);
