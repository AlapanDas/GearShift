import React from 'react';
import Accounts from './components/Account/Accounts';
import SectionList from './components/Account/Sections';
import SectionData from './components/Account/SectionData';


function App() {
  return (
    <div className="App">
      <Accounts/>
      <div className="flex ">
      <SectionList />
      <SectionData/>
      </div>
    </div>
  );
}

export default App;
