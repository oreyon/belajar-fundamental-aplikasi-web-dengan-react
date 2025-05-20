import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routers from './routes/Routers.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={Routers} />
	</StrictMode>
);

// create file via terminal using bash
// touch src/App.tsx
