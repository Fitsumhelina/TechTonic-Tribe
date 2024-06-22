// main.jsx or index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './blog/store/index.js'; // Ensure this import path is correct
import App from './App.jsx';

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
