import './App.css';
import Card from './components/Cards';
import data from './assets/data.json';

function App() {

  return (
    <>
      <body className='bg-light dark:bg-dark bg-center bg-cover' >
        <div className='mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center'>
          {data.results.map((carData) => (
            <Card Data={carData} />
          ))}
        </div>
      </body>
    </>
  );
}

export default App;
