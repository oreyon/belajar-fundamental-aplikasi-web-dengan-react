import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CustomHookAppPage from './pages/CustomHookAppPage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<CustomHookAppPage/>
		</BrowserRouter>
	</StrictMode>
);
