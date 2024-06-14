import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Header />
        <App/>
        <Footer />
    </Provider>
);
