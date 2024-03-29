import './product.scss'
import Banner from '../../Components/Banner/banner'

import { Component, Fragment } from "react";
import axios from 'axios';

import tune from './img/tune.png'
import close from './img/close.png'
import balance from './img/balance.png'
import radar from './img/radar.png'
import shield from './img/shield.png'
import globe from './img/globe.png'
import sun from './img/sun.png'
import balloonist from '../Index/img/balloonist.png'


function CreateTags(props) {
    var values = [];
    for (var i = 0; i < props.tags.length; i++) {
        values.push(
            <button key={i} className='product__bottomcontainer--tags-button'>{props.tags[i]}</button>
        )
    }
    return values
}


class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phoneFilterOpen: false,
            products: [],
            availableFilters: [],
            filters: {
            }
        }
        this.CreateFilters = this.CreateFilters.bind(this);
        this.CreateFilter = this.CreateFilter.bind(this);
    }

    handlePhoneFilter(b){
        this.setState({phoneFilterOpen: b})
    }

    setBoolFilter(e){
        const key = e.target.getAttribute("data-key")
        var current = this.state.filters
        current[key] = !!current[key] ? !current[key] : true
        this.setState({
            filters: current
        })
    }
    CreateFilter(props){
        var values = [];
        if (!props.names) {
            return values;
        }
        if(!this || !this.setBoolFilter){
            return values;
        }
        for (var name of props.names) {
            values.push(
                <div key={name} className='pslide1__content--products-filters__container--filters-filter'>
                    <input data-key={name} defaultChecked={this.state.filters[name]} type="checkbox" className='pslide1__content--products-filters__container--filters-filter__check' onClick={(e) => this.setBoolFilter(e)} />
                    <p className='pslide1__content--products-filters__container--filters-filter__label'>{name}</p>
                </div>
            )
        }
        return values
    }
    setSearchFilter = (str) => {
        var current = this.state.filters
        current["search"] = str
        this.setState({
            filters: current
        })
    }

    async componentDidMount() {
        var products = []
        if (this.state.products.length === 0) {
            var response = await axios.get("https://backend.balloonist.workers.dev/products")
            products = response.data
        }
        var filters = []
        if (this.state.availableFilters.length === 0) {
            var responseFilters = await axios.get("https://backend.balloonist.workers.dev/filters")
            filters = responseFilters.data
        }
        this.setState({
            availableFilters: filters,
            products: products
        })
    }
    CreateProducts = (props) => {
        var values = [];
        try {

            if (!props.products) {
                return values;
            }
            var keys = Object.keys(this.state.filters);
            var fs = this.state.filters
            var filtered = keys.filter(function (key) {
                return fs[key]
            });

            var lowercaseFs = !!this.state.filters ? filtered.map(f => f.toLowerCase()).filter(f => f !== 'search') : []
            var lower = this.state.filters.search ? this.state.filters.search.toLowerCase() : undefined

            for (var i = 0; i < Math.min(8, props.products.length); i++) {
                var item = props.products[i];
                var itemFilters = !!item.filters ? item.filters.map(f => f.toLowerCase()) : []

                // search filter
                if (this.state.filters && !!this.state.filters.search && Object.keys(this.state.filters).includes("search")) {
                    if (!item.description.toLowerCase().includes(lower) && !item.title.toLowerCase().includes(lower)) {
                        continue;
                    }
                }

                // bool filters
                var flag = true;
                if (lowercaseFs.length > 0) {
                    for (var f of itemFilters) {
                        if (lowercaseFs.includes(f)) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        continue
                    }
                }




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
                        case "sun":
                            img = sun;
                            break;
                    default:
                        img = globe;
                        break;
                }

                values.push(
                    <div key={i} className='product'>
                        <div className='product__topcontainer'>
                            <img src={img} alt={item.image} className='product__topcontainer--image' />
                            <div className='product__topcontainer--content'>
                                <div className='product__topcontainer--content-top'>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={balloonist} alt={"Author"} className='product__topcontainer--content-top__avatar' />
                                        <p className='product__topcontainer--content-top__author'>BALLONIST.XYZ</p>
                                        <p className='product__topcontainer--content-top__dot'>•</p>
                                        <p className='product__topcontainer--content-top__date'>{item.date}</p>
                                        <button className='product__topcontainer--content-top__new'>NEW PRODUCT!</button>
                                    </div>
                                    <a href={item.link} target="_blank" rel="noreferrer"><button className={`card__linkcontainer--button button-no-border ${`button-${item.linkcolor}`}`}>{item.linktype}</button></a>
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
        } catch (err) {
            console.error(err)
        }
        return values;
    }



    CreateFilters(){
        var values = [];
        try {
            for (var filters of this.state.availableFilters) {
                values.push(
                    <div key={filters.title} className='pslide1__content--products-filters__container'>
                        <p className='pslide1__content--products-filters__container--title'>{filters.title}</p>
                        <div className='pslide1__content--products-filters__container--filters'>
                            <this.CreateFilter names={filters.filters} />
                        </div>
                    </div>
                )
            }
            return values
        } catch (error) {
            console.error(error)
            return values
        }
    }


    render() {
        return (
            <Fragment>
                {this.state.phoneFilterOpen && 
                    <div className='phoneFilter'>
                        <div className='phoneFilter__title'>
                            <p className='phoneFilter__title--text'>FILTERS</p>
                            <img alt='close' onClick={() => this.handlePhoneFilter(false)} src={close} className='phoneFilter__title--close'/>
                        </div>
                        <div className='phoneFilter__container'>
                            <this.CreateFilters />
                        </div>
                    </div>
                }
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
                                <this.CreateFilters />
                            </div>
                            <div className='pslide1__content--products-content'>
                                <div className='pslide1__content--products-content__searchcontainer'>
                                    <input type="text" onChange={(e) => this.setSearchFilter(e.target.value)} className='pslide1__content--products-content__searchcontainer--search' placeholder={"Search..."} />
                                </div>
                                <div onClick={() => this.handlePhoneFilter(true)} className='pslide1__content--products-content__phonefilter'>
                                    <img className='pslide1__content--products-content__phonefilter--img' src={tune} alt="Filters"/>
                                    <p className='pslide1__content--products-content__phonefilter--text'>FILTER</p>
                                </div>
                                <div className='pslide1__content--products-content__productcontainer'>
                                    <this.CreateProducts products={this.state.products} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='pslide2'>
                    <Banner title="Need help with anything?" description="Report a problem - we will let you know as soon the product is ready!" link="https://makerdao.typeform.com/to/bulqMj5V" target="_blank" rel="noreferrer" buttontext="REQUEST PRODUCT" />
                </div>
            </Fragment>
        )
    }
}
export default Products;