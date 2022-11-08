import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import CategoryPage from './pages/CategoryPage';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <div className="App">
    <section className="book-app">
      <NavBar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="caterogyPage" element={<CategoryPage />} />
      </Routes>
    </section>
  </div>
);

export default App;
