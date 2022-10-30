import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from '../ErrorBoundary';
import { Dashboard } from '../Dashboard';
import { Error404 } from '../Error404';
import { Preview } from '../Preview';

const App = () => (
  <>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="preview/:id" element={<Preview />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </>
);

export default App;
