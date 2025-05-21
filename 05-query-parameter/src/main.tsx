import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import QueryParameterPage from './pages/QueryParameterPage/QueryParameterPage.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryParameterPage />
		</BrowserRouter>
	</StrictMode>
);

// create file via terminal using bash
// touch src/App.tsx
