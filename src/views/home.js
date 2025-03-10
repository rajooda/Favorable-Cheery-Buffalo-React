import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>AyaExpanse</title>
        <meta property="og:title" content="AyaExpanse" />
      </Helmet>
      <div className="home-pagecontainer">
        <div id="bannerContainer" className="home-banner bannerStyle">
          <span className="home-text1 bannerStyle">Aya-Expanse</span>
        </div>
        <div id="controlsContainer" className="home-controlscontainer">
          <div className="home-container2">
            <label className="label1">From Language</label>
            <select className="select1">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <label className="label1">To Language</label>
            <select className="select1">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="home-container3">
            <label className="label1">Speak the Output</label>
            <input type="checkbox" checked="true" className="select1" />
            <button type="button" className="home-button button">
              Go
            </button>
          </div>
        </div>
        <div className="home-textcontainer">
          <div className="home-optextcontainer"></div>
          <div className="home-inputtextcontainer">
            <textarea
              placeholder="placeholder"
              className="home-textarea textarea"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
