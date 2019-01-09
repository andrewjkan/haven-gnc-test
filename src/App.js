import React, { Component } from 'react';
import logoGNC from './logo-gnc.svg';
import logoSweeps from './logo-sweeps.png';
import logoLiveNation from './logo-live-nation.png';
// import background from './bg.jpg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="header row">
            <div className="col-md-10">
              <img src={logoGNC} className="logo-gnc" alt="GNC - Live Well" />
              <img src={logoLiveNation} className="logo-live-nation" alt="Live Nation - Concerts" />
            </div>
            <div className="col-md-2">Share Icons</div>
          </div> {/*END of header*/}
          <div className="main-content row">
            <div className="instructions col-lg-6">
              <div className="row">
                <div className="col">
                  <img src={logoSweeps} className="logo-sweeps" alt="GNC - Ticket to Rock" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h2>Enter for a chance to win a Rock Flight® to a Live Nation® concert of your choice!+</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h3>1 Grand Prize winner will receive:</h3>
                  <ul>
                    <li>2 tickets to a Live Nation concert in the U.S.+</li>
                    <li>Airfare & hotel accommodations for 2</li>
                    <li>$200 cash gift card</li>
                  </ul>
                </div>
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
            <div className="col">
              <p>
                +Live Nation produced  promoted concert at an owned and operated venue in the U.S. Tickets are subject to program availability, venue capacity and age restrictions.
              </p>
              <p>
                NO PURCHASE NECESSARY. Legal U.S. residents 18+, who reside within a 100 mile radius of New York City, NY, Chicago, IL,  Houston, TX, Cleveland, OH or Atlanta, GA. Void where prohibited by law.  Begins at 12:00 PM PT on 2/9/15 and ends at 11:59 PM PT on 3/31/15. See details and <a href="#" target="_self">Official Rules</a>. To enter without a GNC Game Code, <a href="#" target="_self">Click here</a> for alternative method of entry.
              </p>
              <p>
                The Sponsor of the Sweepstakes is GNC® Holdings Inc. The Administrator of the Sweepstakes is Live Nation Marketing, Inc., 7060 Hollywood Blvd., Los Angeles, CA 90028. The Sweepstakes and all accompanying materials are ©2015 Live Nation Worldwide, Inc. Live Nation and Rock Flight are registered trademarks of Live Nation Worldwide, Inc.
              </p>
              <ul>
                <li><a href="#" target="_self">Click Here</a> for your nearest GNC location.</li>
                <li><a href="#" target="_self">Live Nation Privacy Policy</a></li>
                <li><a href="#" target="_self">GNC Privacy Policy</a></li>
              </ul>
            </div>
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
