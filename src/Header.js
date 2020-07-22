import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import logo from './assets/Remind.svg'

import './Header.css'


export default function Header() {

  const displayMenu = () => document.getElementById("menu-hidden").id = 'menu-shown';
  const hideMenu = () => document.getElementById("menu-shown").id = 'menu-hidden';

  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={logo} style={{ width: 100, height: 64 }} alt="Remind"/>
          </Link>
          <div className="nav-itens">
            <div className="about-container">
              <Link to="/about">About</Link>
            </div>
            <div>
              <a href="https://app-remind.herokuapp.com/users/sign_in">Login</a>
              <a href="https://app-remind.herokuapp.com/users/sign_up">Sign up</a>
            </div>
          </div>
          <div className="menu">
            <GiHamburgerMenu size={25} style={{ color: "#303030", cursor: 'pointer' }} onClick={displayMenu}/>
          </div>
        </nav>
      </header>
      <div id="menu-hidden">
        <MdClose size={35} onClick={hideMenu} />
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="https://app-remind.herokuapp.com/users/sign_in">Login</a>
            </li>
            <li>
              <a href="https://app-remind.herokuapp.com/users/sign_up">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
