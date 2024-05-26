
import './App.css';
import Accounts from './components/Account/Accounts';
import SectionList from './components/Account/Sections';
import SectionData from './components/Account/SectionData';
import Card from './components/Cards';

function App() {

  return (
    <>
      <body className='bg-light dark:bg-dark bg-center bg-cover h-screen' >
      <div className="App">
      <Accounts/>
      <div className="flex ">
      <SectionList />
      <SectionData/>
      </div>
    </div>
        {/* <div className='mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center'>
          <Card />
        </div> */}
      </body>
    </>
  );
}

export default App;
