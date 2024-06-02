import Accounts from './components/Account/Accounts';
import SectionList from './components/Account/Sections';
import SectionData from './components/Account/SectionData';
import LoginSignup from './components/LoginSignup';
import HomeBody from "./components/HomeBody";


import {
     createBrowserRouter,
     RouterProvider,
} from "react-router-dom";
import About from './components/About';
import CardPage from './components/CardPage';

const router = createBrowserRouter([
     {
          path: "/",
          element: <HomeBody />,
     },
     {
          path: "/cards",
          element: <CardPage />,
     },
     {
          path: "/about",
          element: <About />
     },
     {
          path: "/login",
          element: <LoginSignup />
     }
]);

export default router;