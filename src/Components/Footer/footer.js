import './footer.scss'

import { NavLink } from "react-router-dom";
import logo from './img/logo.svg'
import text from './img/text.svg'

import { ReactComponent as Telegram } from '../Header/img/telegram.svg'
import { ReactComponent as Twitter } from '../Header/img/twitter.svg'
import { ReactComponent as Discord } from '../Header/img/discord.svg'
import { ReactComponent as LinkedIn } from '../Header/img/linkedin.svg';


function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <NavLink to="/" end className="logo">
          <div className="footer__logocontainer">
            <img alt="filler" className="footer__container--logocontainer-logo" src={logo} />
            <img alt="filler" className="footer__container--logocontainer-text" src={text} />
          </div>
        </NavLink>
        <div className="footer__container--disclaimer">
          <h5 className="footer__container--disclaimer-header">©2022 Ballonist ApS - All rights reserved</h5>
          <p className="footer__container--disclaimer-text">Legal disclamer - nothing on this site is legal, business, investment, or tax advice. This site simply contains a curation of problems and solutions provided by and for WEB3 communities.</p>
        </div>
      </div>

      <div className="footer__rightcontainer">
        <div className="footer__rightcontainer--subcontainer">
          <h4>JOIN THE CONVERSATION</h4>
          <div className="footer__rightcontainer--subcontainer-links">
            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              <Discord className="footer__rightcontainer--subcontainer-links__linkcontainer--logo" />
              <a href="http://discordapp.com/users/Balloonist#6963" target="_blank" rel="noreferrer" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">Discord</a>
            </div>
            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              <Twitter className="footer__rightcontainer--subcontainer-links__linkcontainer--logo" />
              <a href="http://twitter.com/yourballoonist" target="_blank" rel="noreferrer" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">Twitter</a>
            </div>

            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              <Telegram className="footer__rightcontainer--subcontainer-links__linkcontainer--logo" />
              <a href="mailto:yourfriends@balloonist.xyz" target="_blank" rel="noreferrer" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">Mail</a>
            </div>

            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              <LinkedIn className="footer__rightcontainer--subcontainer-links__linkcontainer--logo" />
              <a href="http://linkedin.com/in/sorenterpjessen/" target="_blank" rel="noreferrer" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">Linkedin</a>
            </div>
          </div>

        </div>
        <div className="footer__rightcontainer--subcontainer">
          <h4>QUICK NAVIGATION</h4>
          <div className="footer__rightcontainer--subcontainer-links">
            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              <NavLink to="/products" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">Products</NavLink>
            </div>
            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              <a href="https://docs.google.com/spreadsheets/d/1eZa4Vl6o5gSPp5wDF9kDwH2ztCjjwyLxnnQMvUj8uYo/edit#gid=0" target="_blank" rel="noreferrer" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">Tasks</a>
            </div>
            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              <NavLink to="/about" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">About</NavLink>
            </div>
            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              {/* <a href="/compass" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">The compass</a> */}
            </div>
          </div>
        </div>
        <div className="footer__rightcontainer--subcontainer">
          <h4>LEGAL</h4>
          <div className="footer__rightcontainer--subcontainer-links">
            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              <a href="/" target="_blank" rel="noreferrer" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">Privacy policy</a>
            </div>
            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              <a href="/" target="_blank" rel="noreferrer" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">Cookie policy</a>
            </div>
            <div className="footer__rightcontainer--subcontainer-links__linkcontainer">
              <a href="/" target="_blank" rel="noreferrer" className="footer__rightcontainer--subcontainer-links__linkcontainer--link">Legal disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;