import React, { Component } from 'react';
import SelectSearch from 'react-select-search';
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

/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */
const options = [
    { name: 'Los Angeles', value: 'la' },
    { name: 'Santa Monica', value: 'sm' },
    { name: 'Ontario', value: 'on' }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                  <div className="header row">
                    <div className="logos col-md-9 col-lg-10">
                      <img src={logoGNC} className="logo-gnc" alt="GNC - Live Well" />
                      <img src={logoLiveNation} className="logo-live-nation" alt="Live Nation - Concerts" />
                    </div>
                    <div className="share-icons col-md-3 col-lg-2">
                      <h4>Share</h4>
                      <img src={iconFb} className="icon-fb" alt="Facebook" />
                      <img src={iconTw} className="icon-tw" alt="Twitter" />
                    </div>
                  </div> {/*END of header*/}
                  <div className="main-content row">
                    <div className="instructions col-lg-6">
                      <div className="row">
                        <div className="logo-sweeps-container col">
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
                        <div className="prize-container col">
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
                            <div className="col-md-6 form-spacing"><p className="form-label">Select Your Metro Area</p> 
                              <SelectSearch options={options} value="" name="Select Your Metro Area" placeholder="Select" />
                            </div>
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
                            <div className="col">
                              <input type="checkbox" id="checkbox-1" name="checkbox-1" value="agree"></input>
                              <label htmlFor="checkbox-1">I agree to the <a href="#" className="rules" target="_self">Official Rules</a></label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <input type="checkbox" id="checkbox-2" name="checkbox-2" value="offers"></input>
                              <label htmlFor="checkbox-2">Yes, I would like to receive special offers from GNC.<span className="optional">*</span></label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <input type="checkbox" id="checkbox-3" name="checkbox-3" value="information"></input>
                              <label htmlFor="checkbox-3">Yes, I would like concert information from Live Nation.<span className="optional">*</span></label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col"><p className="emp-small"><span className="optional">*</span>Optional</p></div>
                          </div>
                        </fieldset>
                      </form> {/*END of form*/}

                      <div className="row">
                        <div className="captcha-container col-md-7">
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
                        NO PURCHASE NECESSARY. Legal U.S. residents 18+, who reside within a 100 mile radius of New York City, NY, Chicago, IL,  Houston, TX, Cleveland, OH or Atlanta, GA. Void where prohibited by law.  Begins at 12:00 PM PT on 2/9/15 and ends at 11:59 PM PT on 3/31/15. See details and <a href="#" className="rules" target="_self">Official Rules</a>. To enter without a GNC Game Code, <a href="#" target="_self">Click here</a> for alternative method of entry.
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

                <div id="overlay">
                  <p className="btn-close">
                    Close X
                  </p>
                  <div className="overlay-container">
                    <p className="title">Official Rules</p>
                    <p>
                      Ut malesuada efficitur massa, eget condimentum elit pharetra at. Phasellus laoreet tortor nec justo laoreet dapibus. Maecenas sit amet aliquam erat. Donec nec nibh sit amet nisi lobortis dictum. Vivamus non elit eleifend, tempus dolor vel, aliquam ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc dolor justo, malesuada vulputate blandit sed, eleifend vel ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <p>
                      Maecenas tellus nibh, gravida at blandit ac, finibus sed nunc. Mauris eu nisl dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sodales blandit erat. Ut consequat in felis sed sollicitudin. Nunc fermentum in sem sit amet pulvinar. Duis ultricies malesuada enim, a hendrerit sapien aliquam ac. Fusce vel vestibulum urna.
                    </p>
                    <p>
                      Praesent a risus tellus. Fusce mollis volutpat odio, et gravida massa consequat id. Pellentesque mollis lacinia lectus id viverra. Etiam eget leo quis lectus elementum malesuada. Maecenas vitae augue in mauris porta viverra. Etiam sit amet nisi posuere, malesuada dolor ut, mollis magna. Etiam ac placerat tellus. In sodales eleifend ante ut rhoncus. Suspendisse varius quis lacus at pulvinar. Aenean eget augue in felis auctor tincidunt. Sed vel orci justo. Mauris eleifend, lorem et venenatis gravida, odio augue ultrices dui, a sodales ex tortor eget nibh. Sed vulputate lectus nunc, quis varius dui volutpat id. Aliquam ac ex justo. Donec posuere imperdiet quam at feugiat. Proin pulvinar maximus dui, nec maximus enim.
                    </p>
                  </div>
                </div>

            </div>
        );
    }
}

export default App;