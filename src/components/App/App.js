import React from 'react';
import HomePage from '../../pages/Home';
import Header from '../Header';
import Footer from '../Footer';
import { GlobalStyle } from '../../global.styles.js';

export const GlobalContext = React.createContext();

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
