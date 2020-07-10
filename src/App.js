import React from 'react'
import logo from './assets/Remind.svg'
import homeImage from './assets/home_image.svg'
import environmentListImage from './assets/environment_list-image.svg'
import environmentsImage from './assets/environments_image.svg'

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
            <div>
              <h1>It's very simple</h1>
            </div>
            <div>
              <h2>Create environments</h2>
              <p>As many as you want, for everything that you need. A environment is where your information is organized.</p>
              <img src={environmentListImage} alt=""/>
            </div>
            <div>
              <img src={environmentsImage}></img>
              <h2>Take notes and create tasks</h2>
              <p>Organize your tasks in a list or create a custom annotation to remember a important thing.</p>
            </div>
          </div>
          <div>
            <div>

            </div>
            <div>

            </div>

          </div>
          <div>
            <div>

            </div>
            <div>

            </div>

          </div>
        </section>
        <section className="important-section">
          <div className="section-title"></div>
          <div>

          </div>
        </section>
        <section className="last-section">
          <div>

          </div>
          <div>

          </div>
        </section>
        
      </main>
      <footer>

      </footer>
    </div>
  );
}
