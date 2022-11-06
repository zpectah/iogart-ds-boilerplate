import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './modules/App';
import './styles/root.sass';

// getComputedStyle(document.documentElement).getPropertyValue('--spacer');

// document.documentElement.style.setProperty('--color-iogart-success', 'pink');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
