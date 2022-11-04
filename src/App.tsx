import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { JobDetailsPage } from './pages/JobDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<JobDetailsPage />} />
    </Routes>
  );
}

export default App;
