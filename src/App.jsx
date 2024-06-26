import './App.css';
import React from 'react';
import router from './router';
import { RouterProvider } from "react-router-dom";
import Index from './index';
import Header from './components/Header';
import Footer from './components/Footer';
import store from './redux/store';

function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
