import LoginSignup from './pages/LoginSignup';
import SignUp from './pages/SignUp';
import HomeBody from "./pages/HomeBody";
import { createBrowserRouter } from "react-router-dom";
import Result from './pages/Result'
import CardPage from './pages/CardPage';
import AccountPage from './pages/AccountPage';
import FourOFour from './pages/FourOFour';
import About from './pages/About';
import App from './App';
import { Children } from 'react';

const router = createBrowserRouter([
               {
                    path: "",
                    element: <HomeBody />,
                    errorElement: <FourOFour />
               },
               {
                    path: "cards",
                    element: <CardPage />,
                    errorElement: <FourOFour />
               },
               {
                    path: "login",
                    element: <LoginSignup />,
                    errorElement: <FourOFour />
               },
               {
                    path: "signup",
                    element: <SignUp />,
                    errorElement: <FourOFour />
               },
               // {
               //      path: "/accounts",
               //      element: <AccountPage />
               // },
               // {
               //      path: "/signin",
               //      element: <SignUp />
               // },
               {
                    path: "accounts",
                    element: <AccountPage />,
                    errorElement: <FourOFour />
               },
               {
                    path: "about",
                    element: <About />,
                    errorElement: <FourOFour />
               },
               {
                    path: "result",
                    element: <Result />,
                    errorElement: <FourOFour />
               },
]);

export default router;