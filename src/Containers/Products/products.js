import './product.scss'
import Banner from '../../Components/Banner/banner'

import { Component } from "react";
import { Fragment } from 'react';
import axios from 'axios';

import balance from '../Index/img/balance.png'
import radar from '../Index/img/radar.png'
import shield from '../Index/img/shield.png'
import globe from '../Index/img/globe.png'
import balloonist from '../Index/img/balloonist.png'


function CreateTags(props){
    var values = [];
    for (var i = 0; i < props.tags.length; i++){
        values.push(
            <button key={i} className='product__bottomcontainer--tags-button'>{props.tags[i]}</button>
        )
    }
    return values
}

function CreateProducts(props) {
    var values = [];
    for (var i = 0; i < Math.min(8, props.products.length); i++) {
        var item = props.products[i];
        var img = ""
        switch (item.image) {
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
            <div key={i} className='product'>
                <div className='product__topcontainer'>
                    <img src={img} className='product__topcontainer--image' />
                    <div className='product__topcontainer--content'>
                        <div className='product__topcontainer--content-top'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={balloonist} className='product__topcontainer--content-top__avatar' />
                                <p className='product__topcontainer--content-top__author'>BALLONIST.XYZ</p>
                                <p className='product__topcontainer--content-top__dot'>•</p>
                                <p className='product__topcontainer--content-top__date'>{item.date}</p>
                                <button className='product__topcontainer--content-top__new'>NEW PRODUCT!</button>
                            </div>
                            <a href={item.link} target="_blank" rel="noreferrer"><button className={`card__linkcontainer--button ${`button-${item.linkcolor}`}`}>{item.linktype}</button></a>
                        </div>
                        <div className='product__topcontainer--content-titlecontainer'>
                            <p className='product__topcontainer--content-titlecontainer__title'>{item.title}</p>
                        </div>
                        <div className='product__topcontainer--content-labelcontainer'>
                            <button className='product__topcontainer--content-labelcontainer__button'>OPERATIONAL</button>
                        </div>
                        <div className='product__topcontainer--content-descriptioncontainer'>
                            <p className='product__topcontainer--content-descriptioncontainer__text'>{item.description}</p>
                        </div>
                    </div>
                </div>
                <div className='product__bottomcontainer'>
                    <div className='product__bottomcontainer--tags'>
                        <CreateTags tags={item.tags} />
                    </div>
                    <div className='product__bottomcontainer--more'>
                    </div>
                </div>
            </div>
        )
    }
    return values;
}

class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            filters: {

            }
        }
    }

    setFilter = (key) => {
        var current = this.state.filters
        current[key] = !!current[key] ? !current[key] : true
        this.state.filters = current
    }

    async componentDidMount() {
        if (this.state.products.length == 0) {
            var response = await axios.get("https://backend.balloonist.workers.dev/products")
            this.setState({
                products: response.data
            })
        }
    }


    render() {
        return (
            <Fragment>
                <div className='pslide1'>
                    <div className='pslide1__overlay'>
                        <div className='pslide1__overlay--ellipse3'></div>
                        <div className='pslide1__overlay--ellipse2'></div>
                        <div className='pslide1__overlay--ellipse1'></div>
                    </div>
                    <div className='pslide1__content'>
                        <div className='pslide1__content--top'>
                            <h1 className='pslide1__content--top-header'>Products</h1>
                            <a href="https://makerdao.typeform.com/to/bulqMj5V" target="_blank" rel="noreferrer" className='transparent-button'>REQUEST PRODUCT</a>
                        </div>
                        <div className='pslide1__content--products'>
                            <div className='pslide1__content--products-filters'>
                                <div className='pslide1__content--products-filters__external'>
                                    <p className='pslide1__content--products-filters__external--title'>EXTERNAL MONITORING</p>
                                    <div className='pslide1__content--products-filters__external--filters'></div>
                                </div>
                                <div className='pslide1__content--products-filters__internal'>
                                    <p className='pslide1__content--products-filters__internal--title'>INTERNAL MONITORING</p>
                                    <div className='pslide1__content--products-filters__internal--filters'></div>
                                </div>
                                <div className='pslide1__content--products-filters__support'>
                                    <p className='pslide1__content--products-filters__support--title'>SUPPORT</p>
                                    <div className='pslide1__content--products-filters__support--filters'></div>
                                </div>
                                <div className='pslide1__content--products-filters__activity'>
                                    <p className='pslide1__content--products-filters__activity--title'>ACTIVITY</p>
                                    <div className='pslide1__content--products-filters__activity--filters'></div>
                                </div>
                                <div className='pslide1__content--products-filters__jurisdiction'>
                                    <p className='pslide1__content--products-filters__jurisdiction--title'>JURISDICTION</p>
                                    <div className='pslide1__content--products-filters__jurisdiction--filters'></div>
                                </div>
                            </div>
                            <div className='pslide1__content--products-content'>
                                <div className='pslide1__content--products-content__searchcontainer'>
                                    <input type="text" className='pslide1__content--products-content__searchcontainer--search' placeholder={"Search..."} />
                                </div>
                                <div className='pslide1__content--products-content__productcontainer'>
                                    <CreateProducts products={this.state.products} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='pslide2'>
                    <Banner title="Need  help with anything?" description="Report a problem - we will let you know as soon the product is ready!" link="https://makerdao.typeform.com/to/bulqMj5V" target="_blank" rel="noreferrer" buttontext="REQUEST PRODUCT" />
                </div>
            </Fragment>
        )
    }
}
export default Products;