import './App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import CategoryPage from './pages/CategoryPage';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="quote" element={<CategoryPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
