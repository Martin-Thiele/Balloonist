import { NavLink } from "react-router-dom";

import './header.scss'
import logo from './img/logo.svg'
import text from './img/text.svg'
import {ReactComponent as Telegram}  from './img/telegram.svg'
import {ReactComponent as Twitter}  from './img/twitter.svg'
import {ReactComponent as Discord}  from './img/discord.svg'
import {ReactComponent as LinkedIn} from './img/linkedin.svg';
import {ReactComponent as Arrow} from './img/arrow_outward.svg';


function Header() {
    return (
      <div className="header">
          <NavLink to="/" end className="logo"><div className="header__logocontainer">
            <img alt="filler" className="header__logocontainer--logo" src={logo}/>
            <img alt="filler" className="header__logocontainer--text" src={text}/>
          </div></NavLink>
          <div className="header__menu">
            <ul className="header__menu--row">
              <li className="header__menu--row-col">
                <NavLink to="/products">
                  <p className='header__menu--row-col__text'>PRODUCTS</p>
                  <span className='header__menu--row-col__circle'>10</span>
                </NavLink>
                </li>
              <li className="header__menu--row-col">
              <a href="//eksternside.dk/tasks">
                  <p className='header__menu--row-col__text'>TASKS</p>
                  <Arrow className='header__menu--row-col__icon'/>
                </a>
                </li>
              <li className="header__menu--row-col"><NavLink to="/about">ABOUT</NavLink></li>
              <li className="header__menu--row-col"><NavLink to="/compass">THE COMPASS</NavLink></li>
            </ul>
          </div>
          <div className="header__socials">
            <a href="//t.me/telegram" target="_blank" rel="noreferrer"><Telegram className="header__socials--item"/></a>
            <a href="//twitter.com/twitter" target="_blank" rel="noreferrer"><Twitter className="header__socials--item"/></a>
            <a href="//discord.com/discord" target="_blank" rel="noreferrer"><Discord className="header__socials--item"/></a>
            <a href="//linkedin.com/linkedin" target="_blank" rel="noreferrer"><LinkedIn className="header__socials--item"/></a>
          </div>
      </div>
    );
  }
  
  export default Header;
  