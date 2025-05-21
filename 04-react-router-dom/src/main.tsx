import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactRouterDom from './pages/ReactRouterDom/ReactRouterDom.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ReactRouterDom />
		</BrowserRouter>
	</StrictMode>
);

// create file via terminal using bash
// touch src/App.tsx
