import React from "react";
import { Carousel } from "react-bootstrap";
import entActors from '../../assets/images/ent-hub/ent-actors.png';
import entDirectors from '../../assets/images/ent-hub/ent-directors.png';
import entHome from '../../assets/images/ent-hub/ent-home.png';
import entMovies from '../../assets/images/ent-hub/ent-movies.png';
import entMovieInfo from '../../assets/images/ent-hub/ent-movie-info.png';
import './EntCarousel.scss';

function EntCarousel({ isDark }) {
    return(
        <div className={ isDark === true ? 'dk-carousel-container' : 'lt-carousel-container'}>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={entActors}
                    alt="stat-owl"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={entMovies}
                    alt="stat-heroes"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={entDirectors}
                    alt="stat-lfg"
                    />  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={entMovieInfo}
                    alt="stat-hero"
                    />  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={entHome}
                    alt="stat-maps"
                    />  
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default EntCarousel;