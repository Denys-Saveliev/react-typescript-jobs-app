import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { JobDetailsPage } from './pages/JobDetailsPage';
import { IJob } from './models/models';

export const App: React.FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<JobDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
