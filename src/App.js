import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="header row">
            <div className="col-md-10">Logo Area</div>
            <div className="col-md-2">Share Icons</div>
          </div> {/*END of header*/}
          <div className="main-content row">
            <div className="instructions col-lg-6">
              <div className="row">
                <div className="col">GNC logo</div>
              </div>
              <div className="row">
                <div className="col">Ribbon</div>
              </div>
              <div className="row">
                <div className="col">Instructions Copy</div>
              </div>
            </div> {/*END of instructions*/}
            <div className="contact-form col-lg-6">
              <form>
                <fieldset>
                  <div className="row">
                    <div className="col-md-6">First Name <input type="text"></input></div>
                    <div className="col-md-6">Last Name <input type="text"></input></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">Email <input type="text"></input></div>
                    <div className="col-md-6">Confirm Email <input type="text"></input></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">Select Your Metro Area <input type="text"></input></div>
                    <div className="col-md-6">Zip Code <input type="text"></input></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      Phone Number (used only to contact winners)
                      <div className="row">
                        <div className="col-md-3"><input type="tel" maxLength="3"></input></div>
                        <div className="col-md-3"><input type="tel" maxLength="3"></input></div>
                        <div className="col-md-3"><input type="tel" maxLength="3"></input></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6"><input type="checkbox"></input> I agree to the <a href="#" target="_self">Official Rules</a></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6"><input type="checkbox"></input> Yes, I would like to receive special offers from GNC.<span>*</span></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6"><input type="checkbox"></input> Yes, I would like concert information from Live Nation.<span>*</span></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6"><span>*</span>Optional</div>
                  </div>
                </fieldset>
              </form> {/*END of form*/}

              <div className="row">
                <div className="col-md-8">Captcha</div>
                <div className="col-md-4">Enter Now Button</div>
              </div>

            </div> {/*END of contact-form*/}
          </div> {/*END of main-content*/}

          <div className="footer row">
            <div className="col">Footer Copy</div>
          </div> {/*END of footer*/}

        </div> {/*END of container*/}

        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
        
      </div>
    );
  }
}

export default App;
