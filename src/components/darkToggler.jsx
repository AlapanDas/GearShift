import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
     const [isDarkMode, setIsDarkMode] = useState(() => {
          return localStorage.getItem('theme') === 'dark';
     });

     useEffect(() => {
          if (isDarkMode) {
               document.documentElement.classList.add('dark');
               localStorage.setItem('theme', 'dark');
          } else {
               document.documentElement.classList.remove('dark');
               localStorage.setItem('theme', 'light');
          }
     }, [isDarkMode]);

     const toggleDarkMode = () => {
          setIsDarkMode(!isDarkMode);
     };

     return (
          <button
               onClick={toggleDarkMode}
               className="p-2 w-10 transition ease-in-out duration-150 rounded-full bg-black dark:bg-onprimary text-white dark:text-black ml-7"
          >
               {isDarkMode ? <i className="transition ease-in-out duration-150 fa-regular fa-sun"></i> : <i className="transition ease-in-out duration-150 fa-solid fa-moon"></i>}
          </button>
     );
};

export default DarkModeToggle;