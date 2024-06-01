import './App.css';
import Accounts from './components/Account/Accounts';
import SectionList from './components/Account/Sections';
import SectionData from './components/Account/SectionData';
import Card from './components/Cards';
import LoginSignup from './components/LoginSignup';
import HomeBody from "./components/HomeBody";
import Header from './components/Header';
import Footer from "./components/Footer"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeBody />,
  },
  {
    path: "/cards",
    element: <App />,
  },
]);
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
      </div>*/}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
