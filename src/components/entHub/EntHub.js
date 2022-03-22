import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EntCarousel from "../entCarousel/EntCarousel";
import './EntHub.scss';

function EntHub({ isDark }) {
    return(
        <div className={isDark === true ? 'dk-project-container' : 'lt-project-container'}>
            <Container>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-project-header' : 'lt-project-header'}>
                            <h2>Entertainment</h2> 
                            <h2>Hub</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-demo-header' : 'lt-demo-header'}>
                            <h2>Application</h2> 
                            <h2>Demo</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-demo' : 'lt-demo'}>
                            <iframe
                            className={isDark === true ? 'dk-app-demo' : 'lt-app-demo'}
                            src='https://www.youtube.com/embed/iUnSHIJH6-I'
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title='Application Demo'
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-description-header' : 'lt-description-header'}>
                            <h2>Application</h2>
                            <h2>Description</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-app-description' : 'lt-app-description'}>
                            <p>Entertainment Hub is a simple database for the movie buffs! Filled with movies, actors, directors, and genres!</p>
                            <p>With admin access the abilities to post, delete, update, and associate all of the data!</p>
                            
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-stack-header' : 'lt-stack-header'}>
                            <h2>Tech</h2>
                            <h2>Stack</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-stack-list' : 'lt-stack-list'}>
                            <ul className="project-list">
                                <li>React</li>
                                <l1>Ruby on Rails</l1>
                                <li>PostgreSQL</li>
                                <li>Sass (SCSS)</li>
                                <li>Relational Database</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-carousel-container' : 'lt-carousel-container'}>
                            <EntCarousel isDark={isDark} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-link-header' : 'lt-link-header'}>
                            <h2>Explore the</h2>
                            <h2>application!</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-link-image' : 'lt-link-image'}>
                            <a className={isDark === true ? 'dk-project-link' : 'lt-project-link'} href="https://entertainment-hub-3123.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://s7d2.scene7.com/is/image/TWCNews/getty_movie_theaterjpg" className="link-image" alt='link' />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EntHub;