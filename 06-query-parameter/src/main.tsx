import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ParameterPathPage from './pages/ParameterPathPage/ParameterPathPage';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ParameterPathPage />
		</BrowserRouter>
	</StrictMode>
);

// create file via terminal using bash
// touch src/App.tsx
