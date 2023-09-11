import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import HomePage from './pages/HomePage.jsx';
import MoviePage from './pages/MoviePage';

let router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/movie/:id",
    element: <MoviePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
