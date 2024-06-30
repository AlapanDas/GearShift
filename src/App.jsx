import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomeBody />}
          ></Route>
          <Route
            path="/cards"
            element={<CardPage />}
          ></Route>
          <Route
            path="/login"
            element={<LoginSignup />}
          ></Route>
          <Route
            path="/signup"
            element={<SignUp />}
          ></Route>
          <Route
            path="/accounts"
            element={<AccountPage />}
          ></Route>
          <Route
            path='/about'
            element={<About />}
          ></Route>
          <Route
            path="/result"
            element={<Result />}
          ></Route>
          <Route
            path='*'
            element={<FourOFour />}
          >
          </Route>

        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
