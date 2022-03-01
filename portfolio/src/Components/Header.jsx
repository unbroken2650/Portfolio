import React from 'react';
import Title from './Header/Title';
import Links from './Header/Links';
import './Header/Header.module.scss';

function Header() {
  return (
    <header>
      <Title />
      <Links />
    </header>
  );
}

export default Header;
