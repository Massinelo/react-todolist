import React from 'react';

//Icons (using react-icons)
import { FaRegListAlt } from 'react-icons/fa';

const Header = () => (
  <div className="headerContainer">
    <FaRegListAlt className="listIcon" />
    <h1>Todo List </h1>
  </div>
);

export default Header;
