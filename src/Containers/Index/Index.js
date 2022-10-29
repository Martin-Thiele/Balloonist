import './index.scss'
import bubble from './img/Bubble.png'
import { Fragment } from 'react';
import balloonist from './img/balloonist.png'

import balance from './img/balance.png'
import radar from './img/radar.png'
import shield from './img/shield.png'
import globe from './img/globe.png'
import Banner from '../../Components/Banner/banner'

function Carousel(props) {

  var cards = [{
    title: "Risk assessment of MakerDAOs depeg from the dollar",
    label: "SUPPORT",
    link: "https://docs.google.com/document/d/1AblNWpubhPLA5u-hnPLR92Xz5o4LSUlug2TKSb4SNRg/",
    linktype: "GOOGLE DOC",
    date: "AUG 15, 2022",
    labelcolor: "blue",
    linkcolor: "pink",
    image: "balance"
  },
  {
    title: "MakerDAOs response to the TornadoCash/USDC-event",
    label: "EXTERNAL MONITORING",
    link: "https://docs.google.com/document/d/1AblNWpubhPLA5u-hnPLR92Xz5o4LSUlug2TKSb4SNRg/",
    linktype: "GOOGLE DOC",
    date: "AUG 15, 2022",
    labelcolor: "yellow",
    linkcolor: "pink",
    image: "radar"
  },
  {
    title: "Decentralization Matrix",
    label: "INTERNAL MONITORING",
    link: "https://docs.google.com/document/d/1AblNWpubhPLA5u-hnPLR92Xz5o4LSUlug2TKSb4SNRg/",
    linktype: "GOOGLE DOC",
    date: "AUG 15, 2022",
    labelcolor: "blue",
    linkcolor: "pink",
    image: "shield"
  },
  {
    title: "Initial impact assessment of Markets in Crypto Assets (MICA) applying to MakerDAO",
    label: "SUPPORT",
    labelcolor: "yellow",
    link: "https://docs.google.com/document/d/1AblNWpubhPLA5u-hnPLR92Xz5o4LSUlug2TKSb4SNRg/",
    date: "AUG 15, 2022",
    linktype: "GOOGLE DOC",
    linkcolor: "pink",
    image: "globe"
  },
  {
    title: "Initial impact assessment of Markets in Crypto Assets (MICA) applying to MakerDAO",
    label: "SUPPORT",
    labelcolor: "yellow",
    link: "https://docs.google.com/document/d/1AblNWpubhPLA5u-hnPLR92Xz5o4LSUlug2TKSb4SNRg/",
    date: "AUG 15, 2022",
    linktype: "GOOGLE DOC",
    linkcolor: "pink",
    image: "globe"
  },

]

  var values = [];
  for (var i = 0; i < cards.length; i++){
    var card = cards[i];
    var img = ""
    switch(card.image){
      case "balance":
        img = balance;
        break;
      case "radar":
        img = radar;
        break;
      case "shield": 
        img = shield;
        break;
      case "globe":
        img = globe;
        break;
      default: 
        img = globe;
        break;
    }

    values.push(
      <div key={i} className='card'>
        <img src={img} className='card__image'/>
        <div className='card__authorcontainer'>
          <img src={balloonist} className='card__authorcontainer--image'/>
          <p className='card__authorcontainer--author'>BALLONIST.XYZ</p>
          <p className='card__authorcontainer--dot'>•</p>
          <p className='card__authorcontainer--date'>{card.date}</p>
        </div>
        <div className='card__labelcontainer'>
          <a href={card.label}><button className={`card__labelcontainer--button ${`button-${card.labelcolor}`}`}>{card.label}</button></a>
        </div>
        <div className='card__contentcontainer'>
          <p className='card__contentcontainer--title'>{card.title}</p>
        </div>
        <div className='card__linkcontainer'>
          <a href={card.link} target="_blank" rel="noreferrer"><button className={`card__linkcontainer--button ${`button-${card.linkcolor}`}`}>{card.linktype}</button></a>
        </div>
      </div>
    )
  }
  return values;
}

function Home() {
    return (
      <Fragment>
        <div className='slide1'>
            <div className='slide1__overlay'>
                <div className='slide1__overlay--test'></div>
                <div className='slide1__overlay--test2'></div>
                <div className='slide1__overlay--test3'></div>
                <div className='slide1__overlay--clouds'></div>
            </div>
            <div className='slide1__container'>
                <div className='slide1__container--left'>
                    <h1>What laws apply to your DAO or DEFI-product? How to comply?</h1>
                    <h3>Identifying and documenting regulatory risk<br/>Working out best practices</h3>
                    <div className='slide1__container--left-buttoncontainer'>
                      <a href='/products' className='gradient-button'>SEE THE PRODUCTS</a>
                      <a href='//eksternside.dk/tasks' className='transparent-button'>TASKS</a>
                    </div>
                </div>
                <div className='slide1__container--right'>
                  <img src={bubble}/>
                </div>
            </div>
        </div>
        <div className='slide2'>
          <div className='slide2__overlay'>
            <div className='slide2__overlay--clouds'></div>
            <div className='slide2__overlay--clouds2'></div>
          </div>
          <div className='slide2__container'>
            <div className='slide2__container--textcontainer'>
              <h2 className='slide2__container--textcontainer-header'>Need to discuss regulatory questions? Reach out, this is why we are here!</h2>
              <p className='slide2__container--textcontainer-description'>Monitoring  activities to detect risk Suggesting best practice for risk mitigation</p>
              <a href='//eksternside.dk/tasks' className='transparent-button'>BOOK A MEETING</a>
            </div>
          </div>
          <div className='slide2__radar'>
            <div className='slide2__radar--headercontainer'>
              <p className='slide2__radar--headercontainer-left'>Risk Radar</p>
              <div className='slide2__radar--headercontainer-right'>
                <p className='slide2__radar--headercontainer-right__header'>Present observations are listed here</p>
                <a href="" className='slide2__radar--headercontainer-right__link'>See all</a>
              </div>
            </div>
            <div className='slide2__radar--carousel'>
              <Carousel/>
            </div>
          </div>
        </div>
        <div className='slide3'>
          <Banner title="Apply Bells and Whistles" description="Be the first to know if a threshold is exceeded" link="subscribe" buttontext="SUBSCRIBE"/>
        </div>

      </Fragment>

    );
  }
  
  export default Home;
  