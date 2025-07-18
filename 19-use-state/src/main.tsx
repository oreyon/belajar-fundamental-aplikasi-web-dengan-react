import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import UseStatePage from './pages/UseStatePage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<UseStatePage/>
		</BrowserRouter>
	</StrictMode>
);
