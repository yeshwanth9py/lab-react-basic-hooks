import React, { useState } from 'react';
import ToggleTheme from './ToggleTheme';
import ThemeContext from './ThemeContext';

const UseContext = () => {
  const [isBlack, setIsBlack] = useState(false);

  const handleToggle = () => {
    setIsBlack((prevIsBlack) => !prevIsBlack);
  };

  return (
    <ThemeContext.Provider value={isBlack}>
      <ToggleTheme />
      <button onClick={handleToggle}>Change Theme</button>
    </ThemeContext.Provider>
  );
};

export default UseContext;
