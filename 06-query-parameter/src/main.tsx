import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import QueryParameterApp from './pages/QueryParameterApp/QueryParameterApp';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryParameterApp />
		</BrowserRouter>
	</StrictMode>
);

// create file via terminal using bash
// touch src/App.tsx
