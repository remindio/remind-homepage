import React from 'react';
import logo from './assets/Remind.svg'
import { GiHamburgerMenu } from 'react-icons/gi'

import './About.css'

export default function About() {
  return (
    <div className="about-page">
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
            <GiHamburgerMenu size={25} style={{ color: "#303030" }}/>
          </div>
        </nav>
      </header>
      <main>
        <div className="main-section">
          <div className="content">
            <h1 className="mission">Our mission</h1>
            <p>We're bulding Remindio to help individuals improve their daily productivity by giving them the tool to organize their life and responsibilities.</p>
          </div>
          <div className="content">
            <h1 className="about">About us</h1>
            <p>We are two Computer Science undergraduates, Erick and Daniel, and we want Remindio to aid you in your mission to become better at what you do.</p>
          </div>
        </div>
      </main>
    </div>
  )
}