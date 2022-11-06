import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './modules/App';
import './styles/root.styl';

// getComputedStyle(document.documentElement).getPropertyValue('--spacer');

// document.documentElement.style.setProperty('--spacer', '50px');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
