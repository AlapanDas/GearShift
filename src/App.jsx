import './App.css';
import router from './router';

import { RouterProvider } from "react-router-dom";
import Accounts from './pages/Account/Accounts';
import SectionList from './pages/Account/Sections';
import SectionData from './pages/Account/SectionData';

function App() {

  return (
    <>
      {/*
     <div>
        <Accounts/>
        <div className="flex flex-col sm:flex sm:flex-row sm:flex-auto dark:bg-darkbg">
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
