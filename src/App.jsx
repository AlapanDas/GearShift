import './App.css';
import router from './router';

import { RouterProvider } from "react-router-dom";

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
