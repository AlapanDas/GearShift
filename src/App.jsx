import './App.css';
import Accounts from './components/Account/Accounts';
import SectionList from './components/Account/Sections';
import SectionData from './components/Account/SectionData';
import Card from './components/Cards';
<<<<<<< HEAD
import LoginSignup from './components/LoginSignup';
import HomeBody from './components/Account/HomeBody';
=======
import data from './assets/data.json';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBody from './components/HomeBody';
>>>>>>> 290be34a77d53fa5eaf47cad210e8d55c3478cca

function App() {

  return (
    <>
<<<<<<< HEAD
    {/* <HomeBody/> */}
    <LoginSignup/>
      {/* <body className='bg-light dark:bg-dark bg-center bg-cover h-screen' > */}
        {/* <div className='mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center'>
          <Card />
        </div> */}
      {/* </body> */}
=======
      <Header/>
      <HomeBody/> 
      <Footer/>
>>>>>>> 290be34a77d53fa5eaf47cad210e8d55c3478cca
    </>
  );
}

export default App;
