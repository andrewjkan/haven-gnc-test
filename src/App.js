import React, { Component } from 'react';
import logoGNC from './img/logo-gnc.svg';
import logoSweeps from './img/logo-sweeps.png';
import logoLiveNation from './img/logo-live-nation.png';
import iconFb from './img/icon-fb.png';
import iconTw from './img/icon-tw.png';
import iconTicket from './img/icon-ticket.png';
import iconAirplane from './img/icon-airplane.png';
import iconMoney from './img/icon-money.png';
import captcha from './img/captcha.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="header row">
            <div className="logos col-md-9">
              <img src={logoGNC} className="logo-gnc" alt="GNC - Live Well" />
              <img src={logoLiveNation} className="logo-live-nation" alt="Live Nation - Concerts" />
            </div>
            <div className="share-icons col-md-3">
              <h4>Share</h4>
              <img src={iconFb} className="icon-fb" alt="Facebook" />
              <img src={iconTw} className="icon-tw" alt="Twitter" />
            </div>
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
                  <div className="ribbon">
                    <h2>Enter for a chance to win a Rock Flight<sup>®</sup><br/> to a Live Nation<sup>®</sup> concert of your choice!<sup>+</sup></h2>
                    <div className="ribbon-top-arrow"></div>
                    <div className="ribbon-bottom-arrow"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h3>1 Grand Prize winner will receive:</h3>
                  <ul>
                    <li><img src={iconTicket} className="icon-ticket" alt="Tickets" /> 2 tickets to a Live Nation concert in the U.S.+</li>
                    <li><img src={iconAirplane} className="icon-airplane" alt="Airfare" /> Airfare & hotel accommodations for 2</li>
                    <li><img src={iconMoney} className="icon-money" alt="Gift Card" /> $200 cash gift card</li>
                  </ul>
                </div>
              </div>
            </div> {/*END of instructions*/}
            <div className="contact-form col-lg-6">
              <form>
                <fieldset>
                  <div className="row">
                    <div className="col-md-6 form-spacing"><p className="form-label">First Name</p> <input type="text"></input></div>
                    <div className="col-md-6 form-spacing"><p className="form-label">Last Name</p> <input type="text"></input></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-spacing"><p className="form-label">Email</p> <input type="text"></input></div>
                    <div className="col-md-6 form-spacing"><p className="form-label">Confirm Email</p> <input type="text"></input></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-spacing"><p className="form-label">Select Your Metro Area</p> <input type="text"></input></div>
                    <div className="col-md-6 form-spacing"><p className="form-label">Zip Code</p> <input type="text"></input></div>
                  </div>
                  <div className="row form-phone">
                    <div className="col-md-6">
                      <p className="form-label">Phone Number <span className="emp-small">(used only to contact winners)</span></p>
                      <div className="row">
                        <div className="col">
                          <input type="tel" maxLength="3"></input>
                          <input type="tel" maxLength="3"></input>
                          <input type="tel" maxLength="4"></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col"><input type="checkbox"></input> <p className="checkbox-copy">I agree to the <a href="#" target="_self">Official Rules</a></p></div>
                  </div>
                  <div className="row">
                    <div className="col"><input type="checkbox"></input> <p className="checkbox-copy">Yes, I would like to receive special offers from GNC.<span className="optional">*</span></p></div>
                  </div>
                  <div className="row">
                    <div className="col"><input type="checkbox"></input> <p className="checkbox-copy">Yes, I would like concert information from Live Nation.<span className="optional">*</span></p></div>
                  </div>
                  <div className="row">
                    <div className="col"><p className="emp-small"><span className="optional">*</span>Optional</p></div>
                  </div>
                </fieldset>
              </form> {/*END of form*/}

              <div className="row">
                <div className="col-md-7">
                  <img src={captcha} className="captcha" alt="Captcha" />
                </div>
                <div className="btn-submit-container col-md-5">
                  <button className="btn-submit">Enter Now</button>
                </div>
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
