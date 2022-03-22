import React from "react";
import { Carousel } from "react-bootstrap";
import './StatCarousel.scss';
import statHero from '../../assets/images/owstat-lab/stat-hero.png';
import statHeroes from '../../assets/images/owstat-lab/stat-heroes.png';
import statLfg from '../../assets/images/owstat-lab/stat-lfg.png';
import statMaps from '../../assets/images/owstat-lab/stat-maps.png';
import statOwl from '../../assets/images/owstat-lab/stat-owl.png';
import statSearch from '../../assets/images/owstat-lab/stat-search.png';
import statSearchResult from '../../assets/images/owstat-lab/stat-search-result.png';

function StatCarousel({ isDark }) {
    return(
        <div className={ isDark === true ? 'dk-carousel-container' : 'lt-carousel-container'}>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={statOwl}
                    alt="stat-owl"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={statHeroes}
                    alt="stat-heroes"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={statLfg}
                    alt="stat-lfg"
                    />  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={statHero}
                    alt="stat-hero"
                    />  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={statMaps}
                    alt="stat-maps"
                    />  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={statSearch}
                    alt="stat-search"
                    />  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={statSearchResult}
                    alt="stat-search-result"
                    />  
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default StatCarousel;