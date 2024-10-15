import React, { useEffect, useState } from 'react';
import lightmode from '../assets/website/lightmode.png';
import darkmode from '../assets/website/darkmode1.png';

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  
  const element = document.documentElement;
  //access to html element
// adding theme to localStorage and html element


  useEffect(() => {
    localStorage.setItem("theme", theme);
    
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]); 

  return (
    <div className='relative'>
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={lightmode}
        alt="light mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
      />

      <img 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={darkmode}
        alt="dark mode"
        className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"} transition-all duration-300`} 
      />
    </div>
  );
};

export default DarkMode;
