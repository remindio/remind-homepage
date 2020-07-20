import React from 'react'
import logo from './assets/Remind.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import homeImage from './assets/home_image.svg'
import environmentListImage from './assets/environment_list-image.svg'
import environmentsImage from './assets/environments_image.svg'
import bigNote from './assets/big-note_image.svg'
import devImage from './assets/dev_image.svg'
import groceryList from './assets/grocery-list_image.svg'
import inProgress from './assets/in-progress_image.svg'
import momsBirthday from './assets/moms-birthday_image.svg'
import noteTask from './assets/note-task_image.svg'
import shareImg from './assets/share_image.png'
import todoImage from './assets/todo_image.png'


import './App.css'

export default function App() {

  const displayMenu = () => document.getElementById("menu-hidden").id = 'menu-shown';
  const hideMenu = () => document.getElementById("menu-shown").id = 'menu-hidden';

  return (
    <div className="home-page">
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
      <main>
        <section className="main-section">
          <div className="main-section-content">
            <div className="content">
              <div className="main-description">
                <h1>The complete productivity environment</h1>
                <div className="main-subdescription">
                  <p>Everything you need, in one place</p>
                  <a href="#get-started">Get Started</a>
                </div>
              </div>
              <div className="main-image">
                <img src={homeImage} style={{ width: 500, height: 400 }} alt="Home" />
              </div>
            </div>
          </div>
        </section>
        <section id="get-started" className="first-section">
          <div className="first-section-content">
            <div className="title">
              <h1>It's very simple</h1>
            </div>
            <div className="content">
              <div className="content-text">
                <h2>Create environments</h2>
                <p>As many as you want, for everything that you need. A environment is where your information is organized.</p>
              </div>
              <div>       
                <img src={environmentListImage} alt=""/>
              </div>
            </div>
            <div className="content">
              <div>
                <img src={environmentsImage} alt="Environment list" />
              </div>
              <div className="content-text right">
                <div>
                  <h2>Take notes and create tasks</h2>
                  <p>Organize your tasks in a list or create a custom annotation to remember a important thing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="second-section-content"> 
            <div className="content">
              <div className="notes-menu">
                <img className="list" src={groceryList} alt="Grocery list"/>
                <img className="menu" src={noteTask} alt="Note"/>
                <img className="note" src={momsBirthday} alt="Mom's birthday"/>
              </div>
            </div>
            <div className="content">
              <div>
                <img src={todoImage} alt="Todo" />
              </div>
              <div className="content-text right">
                <div>
                  <h2>Move them around</h2>
                  <p>
                    Everything is draggable! 
                    Arrange notes and tasks the way you think they should be organized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="third-section">
          <div className="third-section-content">
            <div className="content">
              <div className="content-text">
                <h2>Big ideas?</h2>
                <p>No problem! Size them as big as you want.</p>
                <img src={devImage} alt="Development"/>
              </div>
              <div className="content-image">
                <img src={bigNote} alt="Big note"/>
              </div>
            </div>
          </div>
        </section>
        <section className="important-section">
          <div className="important-section-content">
            <div className="title">
              <h1>But most important...</h1>
            </div>
            <div className="content">
              <img src={shareImg} alt="Share your ideas"/>
              <div className="content-text">
                <h2>Share with anyone</h2>
                <p>
                  You can keep it for yourself or you can share it 
                  with friends or co-workers. It is up to you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="last-section">
          <div className="last-section-content"> 
            <div className="content">
              <div className="content-text">
                <h2>And much more in the future</h2>
                <p>Remind is being developed and great ideas are yet to come. <a href="/about">Read more</a></p>
              </div>
              <div>
                <img src={inProgress} alt="In progress"/>
              </div>
            </div>
          </div>
          <div className="last-section-content">
            <div className="remind-description">
              <h3>Remind is simple, customizable and all you need</h3>
              <a href="https://app-remind.herokuapp.com/users/sign_up">Register now</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
          <img src={logo} style={{ width: 200, height: 64 }} alt="Remind"/>
          <p>© 2020 Remind. All rights reserved.</p>
      </footer>
    </div>
  );
}
