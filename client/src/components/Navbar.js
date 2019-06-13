import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, Dropdown } from "semantic-ui-react";

const Navbar = () => (
  <Menu attached='top' size='huge'inverted color='teal' >
    <Menu.Item header >Zoomies Department Store</Menu.Item>
    {/* <Dropdown item text='Menu' simple> */}
      {/* <Menu.Menu pointing vertical inverted text='Menu'> */}
        <Link to="/" >
          <Menu.Item>
            Home
          </Menu.Item>
        </Link>
        <Link to="/about">
          <Menu.Item>
            About
          </Menu.Item>
        </Link>
        <Link to="/departments">
          <Menu.Item>
            Departments
          </Menu.Item>
        </Link>
      {/* </Menu.Menu> */}
    {/* </Dropdown> */}
    
  </Menu>
)

export default Navbar;