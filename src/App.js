import React from 'react'
import logo from './assets/Remind.svg'
import homeImage from './assets/home_image.svg'
import environmentListImage from './assets/environment_list-image.svg'
import environmentsImage from './assets/environments_image.svg'
import bigNote from './assets/big-note_image.svg'
import devImage from './assets/dev_image.svg'
import groceryList from './assets/grocery-list_image.png'
import inProgress from './assets/in-progress_image.svg'
import momsBirthday from './assets/moms-birthday_image.svg'
import noteTask from './assets/note-task_image.svg'
import shareImg from './assets/share_image.png'
import todoImage from './assets/todo_image.png'


import './App.css'

export default function App() {
  return (
    <div className="home-page">
      <header>
        <nav>
          <img src={logo} style={{ width: 100, height: 64 }} alt="Remind"/>
          <div>
            <div className="about-container">
              <a href="#">About</a>
            </div>
            <div>
              <a href="http://localhost:3333/users/sign_in">Login</a>
              <a href="http://localhost:3333/users/sign_up">Sign up</a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="main-section">
          <div className="main-description">
            <h1>The complete productivity environment</h1>
            <div className="main-subdescription">
              <p>Everything you need, in one place</p>
              <button>Get Started</button>
            </div>
          </div>
          <img src={homeImage} style={{ width: 500, height: 400 }} alt="Home image"/>
        </section>
        <section className="simple-section">
          <div className="simple-section-first">
            <div className="title">
              <h1>It's very simple</h1>
            </div>
            <div className="content">
              <div>
                <h2>Create environments</h2>
                <p>As many as you want, for everything that you need. A environment is where your information is organized.</p>
              </div>             
              <img src={environmentListImage} alt=""/>
            </div>
            <div className="content">
              <img src={environmentsImage}></img>
              <div>
                <h2>Take notes and create tasks</h2>
                <p>Organize your tasks in a list or create a custom annotation to remember a important thing.</p>
              </div>
            </div>
          </div>
          <div className="simple-section-second"> 
            <div className="content notes-menu">
              <img src={groceryList} alt=""/>
              <img src={noteTask} alt=""/>
              <img src={momsBirthday} alt=""/>
            </div>
            <div className="content">
              <img src={todoImage} alt=""/>
              <div>
                <h2>Move them around</h2>
                <p>
                  Everything is draggable! 
                  Arrange notes and tasks the way you think they should be organized.
                </p>
              </div>
            </div>
          </div>
          <div className="simple-section-third">
            <div>
              <h2>Big ideas?</h2>
              <p>No problem! Size them as big as you want.</p>
              <img src={devImage} alt=""/>
            </div>
            <div>
              <img src={bigNote} alt=""/>
            </div>

          </div>
        </section>
        <section className="important-section">
          <div className="section-title">
            <h1>But most important...</h1>
          </div>
          <div>
            <img src={shareImg} alt=""/>
            <h2>Share with anyone</h2>
            <p>
              You can keep it for yourself or you can share it 
              with friends or co-workers. It is up to you.
            </p>
          </div>
        </section>
        <section className="last-section">
          <div>
            <div>
              <h2>And much more in the future</h2>
              <p>Remind is being developed and great ideas are yet to come. Read more</p>
            </div>
            <div>
              <img src={inProgress} alt=""/>
            </div>
          </div>
          <div>
            <h1>Remind is simple, customizable and all you need</h1>
            <button>Get Started</button>
          </div>
        </section>
      </main>
      <footer>
          <img src={logo} alt=""/>
      </footer>
    </div>
  );
}
