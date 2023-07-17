// ToggleTheme.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ToggleTheme = () => {
  const isBlack = useContext(ThemeContext);

  const tempStyle = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'black',
  };

  return (
    <div style={tempStyle}>
      Hello
    </div>
  );
};

export default ToggleTheme;
