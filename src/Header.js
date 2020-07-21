import React from 'react';
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
          <a href="/">
            <img src={logo} style={{ width: 100, height: 64 }} alt="Remind"/>
          </a>
          <div className="nav-itens">
            <div className="about-container">
              <a href="/about">About</a>
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
              <a href="/about">About</a>
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
