import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './modules/App';
import './styles/root.styl';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
