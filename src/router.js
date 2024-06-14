import LoginSignup from './pages/LoginSignup';
import HomeBody from "./pages/HomeBody";
import { createBrowserRouter } from "react-router-dom";

import CardPage from './pages/CardPage';
import AccountPage from './pages/AccountPage';
import FourOFour from './pages/FourOFour';
import About from './pages/About';
import SectionData from './pages/Account/SectionData';

const router = createBrowserRouter([
     {
          path: "/",
          element: <HomeBody />,
          errorElement: <FourOFour />
     },
     {
          path: "/cards",
          element: <CardPage />,
          errorElement: <FourOFour />
     },
     {
          path: "/login",
          element: <LoginSignup />,
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
          path: "/accounts",
          element:<SectionData/>,
          errorElement: <FourOFour />
     },
     {
          path: "/about",
          element: <About />,
          errorElement: <FourOFour />
     }
]);

export default router;