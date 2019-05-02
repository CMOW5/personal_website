import React, { Component } from 'react';
import './loader.css';

class Loader extends Component {
    render() {
        return (
          <div className="loader-container">
            <div className="container">
              <div className="graf-bg-container">
                  <div className="graf-layout">
                      <div className="graf-circle"></div>
                      <div className="graf-circle"></div>
                      <div className="graf-circle"></div>
                      <div className="graf-circle"></div>
                      <div className="graf-circle"></div>
                      <div className="graf-circle"></div>
                      <div className="graf-circle"></div>
                      <div className="graf-circle"></div>
                      <div className="graf-circle"></div>
                      <div className="graf-circle"></div>
                      <div className="graf-circle"></div>
                  </div>
              </div>
              <h1 className="loader-title">Loading</h1>
            </div>
          </div>
        )
    }
}

export default Loader;