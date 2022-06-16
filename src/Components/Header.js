import React from 'react';

const Header = ({ toUpperCase })=> {
  let title = 'Acme Reservation Planner With React';
  return (
    <h1>{  toUpperCase ? title.toUpperCase(): title }</h1>
  );
}

export default Header;
