import { NavLink } from "react-router-dom";

import './header.scss'
import logo from './img/logo.svg'
import text from './img/text.svg'
import { ReactComponent as Telegram } from './img/telegram.svg'
import { ReactComponent as Twitter } from './img/twitter.svg'
import { ReactComponent as Discord } from './img/discord.svg'
import { ReactComponent as LinkedIn } from './img/linkedin.svg';
import { ReactComponent as Arrow } from './img/arrow_outward.svg';
import { Component } from "react";

import axios from 'axios';

class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }

  async componentDidMount(){
    if(this.state.products.length == 0){
      var response = await axios.get("https://backend.balloonist.workers.dev/products")
      this.setState({
        products: response.data
      })
    }
  }


  render() {
    return(
      <div className="header">
        <NavLink to="/" end className="logo"><div className="header__logocontainer">
          <img alt="filler" className="header__logocontainer--logo" src={logo} />
          <img alt="filler" className="header__logocontainer--text" src={text} />
        </div></NavLink>
        <div className="header__menu">
          <ul className="header__menu--row">
            <li className="header__menu--row-col">
              <NavLink to="/products">
                <p className='header__menu--row-col__text'>PRODUCTS</p>
                <span className='header__menu--row-col__circle'>{this.state.products.length}</span>
              </NavLink>
            </li>
            <li className="header__menu--row-col">
              <a href="http://docs.google.com/spreadsheets/d/1eZa4Vl6o5gSPp5wDF9kDwH2ztCjjwyLxnnQMvUj8uYo/edit#gid=0" target="_blank" rel="noreferrer"> 
                <p className='header__menu--row-col__text'>TASKS</p>
                <Arrow className='header__menu--row-col__icon' />
              </a>
            </li>
            <li className="header__menu--row-col"><NavLink to="/about">ABOUT</NavLink></li>
            <li className="header__menu--row-col"><NavLink to="/compass">THE COMPASS</NavLink></li>
          </ul>
        </div>
        <div className="header__socials">
          <a href="mailto:yourfriends@balloonist.xyz" target="_blank" rel="noreferrer"><Telegram className="header__socials--item" /></a>
          <a href="//twitter.com/yourballoonist" target="_blank" rel="noreferrer"><Twitter className="header__socials--item" /></a>
          <a href="//discordapp.com/users/Balloonist#6963" target="_blank" rel="noreferrer"><Discord className="header__socials--item" /></a>
          <a href="//linkedin.com/in/sorenterpjessen/" target="_blank" rel="noreferrer"><LinkedIn className="header__socials--item" /></a>
        </div>
      </div>
    )
  }
}

export default Header;
