import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import router from './router';
import { RouterProvider } from "react-router-dom";
import HomeBody from './pages/HomeBody';
import CardPage from './pages/CardPage';
import LoginSignup from './pages/LoginSignup';
import SignUp from './components/SignUp';
import AccountPage from './pages/AccountPage';
import FourOFour from './pages/FourOFour';
import About from './pages/About';
import Result from './pages/Result';



function App() {

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<HomeBody/>}/>
            <Route
              path="cards"
              element={<CardPage />} />
            <Route
              path="login"
              element={<LoginSignup />} />
            <Route
              path="signup"
              element={<SignUp />} />
            <Route
              path="accounts"
              element={<AccountPage />} />
            <Route
              path='about'
              element={<About />} />
            <Route
              path="result"
              element={<Result />} />
            <Route
              path='*'
              element={<FourOFour />} />

          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
