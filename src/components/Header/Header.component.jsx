import React from 'react';
import LeftSideHeader from './LeftSideHeader';
import RightSideHeader from './RightSideHeader';
import StoreName from './LeftSideHeader/StoreName';
import SearchBar from './LeftSideHeader/SearchBar';
import ShoppingCartButton from './RightSideHeader/ShoppingCartButton';
import { Navbar } from './Header.styles';

const Header = () => {
  return (
    <Navbar>
      <LeftSideHeader>
        <StoreName />
        <SearchBar />
      </LeftSideHeader>
      <RightSideHeader>
        <ShoppingCartButton />
      </RightSideHeader>
    </Navbar>
  );
};

export default Header;
