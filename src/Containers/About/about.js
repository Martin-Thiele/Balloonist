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
                        <h1>On a mission to manage regulatory risk</h1>
                        <p>Identifying and documenting regulatory risk Working out best practices</p>
                    </div>
                    <div className='aslide1__content--cardcontainer'>
                        <div className='aslide1__content--cardcontainer-card'>
                            <img src={visibility} className='aslide1__content--cardcontainer-card__icon' />
                            <p className='aslide1__content--cardcontainer-card__title'>EXTERNAL MONITORING</p>
                            <p className='aslide1__content--cardcontainer-card__text'>Monitoring regulators actions and applicable law</p>
                        </div>
                        <div className='aslide1__content--cardcontainer-card'>
                            <img src={visibility} className='aslide1__content--cardcontainer-card__icon' />
                            <p className='aslide1__content--cardcontainer-card__title'>INTERNAL MONITORING</p>
                            <p className='aslide1__content--cardcontainer-card__text'>Monitoring activities of DAOs and the activities of thair product(s) and service(s)</p>
                        </div>
                        <div className='aslide1__content--cardcontainer-card'>
                            <img src={track} className='aslide1__content--cardcontainer-card__icon' />
                            <p className='aslide1__content--cardcontainer-card__title'>RISK RADAR</p>
                            <p className='aslide1__content--cardcontainer-card__text'>Identifying upcoming risks, so you can adobt in time<br /><br />Dont miss anything - you can apply bells and whistles</p>
                        </div>
                        <div className='aslide1__content--cardcontainer-card'>
                            <img src={support} className='aslide1__content--cardcontainer-card__icon' />
                            <p className='aslide1__content--cardcontainer-card__title'>SUPPORT</p>
                            <p className='aslide1__content--cardcontainer-card__text'>We will get you safely from A to B with</p>
                            <ul>
                                <li>Tailor made risk analysis</li>
                                <li>Help to define the risk tolerance</li>
                                <li>Drafting of actionplans</li>
                            </ul>
                        </div>
                    </div>
                    <div className='aslide1__content--social'>
                        <div className='aslide1__content--social-left'>
                            <h2>Join the conversation</h2>
                            <p>Balloonist is part of MakerDAOs Legal Research team - supporting the global and vibrant community drives the success. Join the conversation on Discord, Twitter, and Linkedin to stay up to date on the latest community news.<br /><br />You can see what some of the other contributors are doing here:<br /><a href="">Layer Zero</a> expert in xyz<br /><a href="">Astrogator</a> expert in xyz</p>
                        </div>
                        <div className='aslide1__content--social-right'>
                            <div className='aslide1__content--social-right__container'>
                                <div className='aslide1__content--social-right__container--top'>
                                    <div className='aslide1__content--social-right__container--top-left'>
                                        <Discord className='aslide1__content--social-right__container--top-left__image' />
                                        <p className='aslide1__content--social-right__container--top-left__platform'>DISCORD</p>
                                    </div>
                                    <a href=""><Arrow className='aslide1__content--social-right__container--top-arrow' /></a>
                                </div>
                                <div className='aslide1__content--social-right__container--bottom'>
                                    <p className='aslide1__content--social-right__container--bottom-text'>
                                        Nam pellentesque morbi ultricies viverra lobortis quisque.
                                    </p>
                                </div>
                            </div>
                            <div className='aslide1__content--social-right__container'>
                                <div className='aslide1__content--social-right__container--top'>
                                    <div className='aslide1__content--social-right__container--top-left'>
                                        <Twitter className='aslide1__content--social-right__container--top-left__image' />
                                        <p className='aslide1__content--social-right__container--top-left__platform'>TWITTER</p>
                                    </div>
                                    <a href=""><Arrow className='aslide1__content--social-right__container--top-arrow' /></a>
                                </div>
                                <div className='aslide1__content--social-right__container--bottom'>
                                    <p className='aslide1__content--social-right__container--bottom-text'>
                                        Nam pellentesque morbi ultricies viverra lobortis quisque.
                                    </p>
                                </div>
                            </div>
                            <div className='aslide1__content--social-right__container'>
                                <div className='aslide1__content--social-right__container--top'>
                                    <div className='aslide1__content--social-right__container--top-left'>
                                        <LinkedIn className='aslide1__content--social-right__container--top-left__image' />
                                        <p className='aslide1__content--social-right__container--top-left__platform'>LINKEDIN</p>
                                    </div>
                                    <a href=""><Arrow className='aslide1__content--social-right__container--top-arrow' /></a>
                                </div>
                                <div className='aslide1__content--social-right__container--bottom'>
                                    <p className='aslide1__content--social-right__container--bottom-text'>
                                        Nam pellentesque morbi ultricies viverra lobortis quisque.
                                    </p>
                                </div>
                            </div>
                            <div className='aslide1__content--social-right__container'>
                                <div className='aslide1__content--social-right__container--top'>
                                    <div className='aslide1__content--social-right__container--top-left'>
                                        <Telegram className='aslide1__content--social-right__container--top-left__image' />
                                        <p className='aslide1__content--social-right__container--top-left__platform'>MAIL</p>
                                    </div>
                                    <a href=""><Arrow className='aslide1__content--social-right__container--top-arrow' /></a>
                                </div>
                                <div className='aslide1__content--social-right__container--bottom'>
                                    <p className='aslide1__content--social-right__container--bottom-text'>
                                        Nam pellentesque morbi ultricies viverra lobortis quisque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='aslide2'>
                <Banner title="Need help with anything?" description="Report a problem - we will let you know as soon the product is ready!" link="https://makerdao.typeform.com/to/bulqMj5V" buttontext="REQUEST PRODUCT" />
            </div>
        </Fragment>
    )
}
export default About;