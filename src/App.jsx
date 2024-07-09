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
import Services from './pages/Services';
import Cart from './pages/Cart';
import Payment from './pages/payment'



function App() {

  // const [currentPath, setCurrentPath] = useState('');

  // const handlePathChange = (path) => {
  //   setCurrentPath(path);
  // };

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
              path="services"
              element={<Services />} />
            <Route
              path="cart"
              element={<Cart />} />
              <Route
              path="payment"
              element={<Payment />} />
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
