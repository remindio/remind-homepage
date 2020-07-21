import React from 'react'

import Header from './Header'

import './About.css'
import './About_media.css'

export default function About() {
  return (
    <div className="about-page">
      <Header />
      <main>
        <section className="main-section">
          <div className="main-section-content">
            <div className="content">
              <h1 className="mission">Our mission</h1>
              <p>We're bulding Remindio to help individuals improve their daily productivity by giving them the tool to organize their life and responsibilities.</p>
            </div>
            <div className="content">
              <h1 className="about">About us</h1>
              <p>We are two Computer Science undergraduates, Erick and Daniel, and we want Remindio to aid you in your mission to become better at what you do.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}