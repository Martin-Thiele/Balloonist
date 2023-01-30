import Banner from '../../Components/Banner/banner'
import './about.scss'

import support from './img/support.png';
import visibility from './img/visibility.png';
import track from './img/track.png';

import { ReactComponent as Telegram } from '../../img/telegram.svg'
import { ReactComponent as Twitter } from '../../img/twitter.svg'
import { ReactComponent as Discord } from '../../img/discord.svg'
import { ReactComponent as LinkedIn } from '../../img/linkedin.svg';

import { ReactComponent as Arrow } from '../../img/arrow_outward.svg';



import { Fragment } from 'react';


function About() {
    return (
        <Fragment>
            <div className='aslide1'>
                <div className='aslide1__overlay'>
                    <div className='aslide1__overlay--ellipse3'></div>
                    <div className='aslide1__overlay--ellipse2'></div>
                    <div className='aslide1__overlay--ellipse1'></div>
                </div>
                <div className='aslide1__content'>
                    <div className='aslide1__content--top'>
                        <h1>On a mission to help manage regulatory risk in crypto and web3</h1>
                        <p>Identifying and documenting regulatory risk Working out best practices</p>
                    </div>
                    <div className='aslide1__content--cardcontainer'>
                        <div className='aslide1__content--cardcontainer-card'>
                            <img src={visibility} className='aslide1__content--cardcontainer-card__icon' />
                            <p className='aslide1__content--cardcontainer-card__title'>EXTERNAL MONITORING</p>
                            <p className='aslide1__content--cardcontainer-card__text'>Monitoring regulatory, compliance, and law enforcement developments in crypto and web3</p>
                        </div>
                        <div className='aslide1__content--cardcontainer-card'>
                            <img src={visibility} className='aslide1__content--cardcontainer-card__icon' />
                            <p className='aslide1__content--cardcontainer-card__title'>INTERNAL MONITORING</p>
                            <p className='aslide1__content--cardcontainer-card__text'>Monitoring activities of DAOs and DeFi-products</p>
                        </div>
                        <div className='aslide1__content--cardcontainer-card'>
                            <img src={track} className='aslide1__content--cardcontainer-card__icon' />
                            <p className='aslide1__content--cardcontainer-card__title'>RISK RADAR</p>
                            <p className='aslide1__content--cardcontainer-card__text'>Providing you with a weekly tailor-made update<br /><br />Making you able to adobt in time</p>
                        </div>
                        <div className='aslide1__content--cardcontainer-card'>
                            <img src={support} className='aslide1__content--cardcontainer-card__icon' />
                            <p className='aslide1__content--cardcontainer-card__title'>SUPPORT</p>
                            <p className='aslide1__content--cardcontainer-card__text'>Helping you</p>
                            <ul>
                                <li>Identify and understand your risk</li>
                                <li>Adjust and comply</li>
                                <li>Enhance resilience</li>
                            </ul>
                        </div>
                    </div>
                    <div className='aslide1__content--social'>
                        <div className='aslide1__content--social-left'>
                            <h2>Join the conversation</h2>
                            <p>Balloonist is currently contibuting to MakerDAO.<br /><br /> Join the conversation on Discord and MakerDAOs forum to stay up to date on the latest community news.<br /><br /><a href="https://forum.makerdao.com/" target="_blank" rel="noreferrer" >MakerDAOs Forum</a><br /><a href="https://discord.gg/pM27peHASJ"target="_blank" rel="noreferrer">MakerDAOs Discord</a></p>
                        </div>
                        <div className='aslide1__content--social-right'>
                            <div className='aslide1__content--social-right__container'>
                                <div className='aslide1__content--social-right__container--top'>
                                    <div className='aslide1__content--social-right__container--top-left'>
                                        <Discord className='aslide1__content--social-right__container--top-left__image' />
                                        <p className='aslide1__content--social-right__container--top-left__platform'>DISCORD</p>
                                    </div>
                                    <a href="http://discordapp.com/users/Balloonist#6963"target="_blank" rel="noreferrer"><Arrow className='aslide1__content--social-right__container--top-arrow' /></a>
                                </div>
                                <div className='aslide1__content--social-right__container--bottom'>
                                    <p className='aslide1__content--social-right__container--bottom-text'>
                                        The easiest way to start a quick conversation with Balloonist.
                                    </p>
                                </div>
                            </div>
                            <div className='aslide1__content--social-right__container'>
                                <div className='aslide1__content--social-right__container--top'>
                                    <div className='aslide1__content--social-right__container--top-left'>
                                        <Twitter className='aslide1__content--social-right__container--top-left__image' />
                                        <p className='aslide1__content--social-right__container--top-left__platform'>TWITTER</p>
                                    </div>
                                    <a href="http://twitter.com/yourballoonist" target="_blank" rel="noreferrer"><Arrow className='aslide1__content--social-right__container--top-arrow' /></a>
                                </div>
                                <div className='aslide1__content--social-right__container--bottom'>
                                    <p className='aslide1__content--social-right__container--bottom-text'>
                                        Live commentaries from time to time.
                                    </p>
                                </div>
                            </div>
                            <div className='aslide1__content--social-right__container'>
                                <div className='aslide1__content--social-right__container--top'>
                                    <div className='aslide1__content--social-right__container--top-left'>
                                        <LinkedIn className='aslide1__content--social-right__container--top-left__image' />
                                        <p className='aslide1__content--social-right__container--top-left__platform'>LINKEDIN</p>
                                    </div>
                                    <a href="http://linkedin.com/in/sorenterpjessen/" target="_blank" rel="noreferrer"><Arrow className='aslide1__content--social-right__container--top-arrow' /></a>
                                </div>
                                <div className='aslide1__content--social-right__container--bottom'>
                                    <p className='aslide1__content--social-right__container--bottom-text'>
                                        Looking forward to connecting with you.
                                    </p>
                                </div>
                            </div>
                            <div className='aslide1__content--social-right__container'>
                                <div className='aslide1__content--social-right__container--top'>
                                    <div className='aslide1__content--social-right__container--top-left'>
                                        <Telegram className='aslide1__content--social-right__container--top-left__image' />
                                        <p className='aslide1__content--social-right__container--top-left__platform'>MAIL</p>
                                    </div>
                                    <a href="mailto:yourfriends@balloonist.xyz" target="_blank" rel="noreferrer"><Arrow className='aslide1__content--social-right__container--top-arrow' /></a>
                                </div>
                                <div className='aslide1__content--social-right__container--bottom'>
                                    <p className='aslide1__content--social-right__container--bottom-text'>
                                        Drop a line to Balloonist.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='aslide2'>
                <Banner title="Lets talk face-to-face" description="" link="https://calendly.com/balloonist/30min" buttontext="BOOK A MEETING" />
            </div>
        </Fragment>
    )
}
export default About;