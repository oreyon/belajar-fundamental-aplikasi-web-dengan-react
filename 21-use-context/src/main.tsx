import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import UseEffectAppPage from './pages/UseEffectAppPage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<UseEffectAppPage/>
		</BrowserRouter>
	</StrictMode>
);
