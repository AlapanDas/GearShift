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
      {/*
      <div>
        <Accounts/>
        <div className="flex flex-col sm:flex sm:flex-row sm:flex-auto dark:bg-primary">
          <SectionList/>
          <SectionData/>

        </div>
      </div>
      <RouterProvider router={router} />*/}
      <RouterProvider router={router} />

    </>
  );
}

export default App;
