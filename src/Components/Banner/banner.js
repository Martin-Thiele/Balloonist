import './banner.scss'

function Banner(props) {
    return (
        <div className='banner'>
            <h2 className='banner__title'>{props.title}</h2>
            <h3 className='banner__description'>{props.description}</h3>
            <a className='transparent-button banner__button' target="_blank" rel="noreferrer" href={props.link}>{props.buttontext}</a>
        </div>
    )
}

export default Banner;