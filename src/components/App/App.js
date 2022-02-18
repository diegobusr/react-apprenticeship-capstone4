import React from 'react';
import { GlobalStyle } from '../../global.styles.js';

export const GlobalContext = React.createContext();

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Hola</h1>
    </>
  );
};

export default App;
