import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StatCarousel from "../statCarousel/StatCarousel";
import './OwStatLab.scss';

function OwStatLab({ isDark }) {
    return(
        <div className={isDark === true ? 'dk-project-container' : 'lt-project-container'}>
            <Container>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-project-header' : 'lt-project-header'}>
                            <h1>OverStat</h1> 
                            <h1>Lab</h1>
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
                            src='https://www.youtube.com/embed/Z3AFrsbJnLc'
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
                            <p>OverStat Lab is a one stop application for Overwatch players. It contains a deep database of heroes, maps, and lore!</p>
                            <p>For the players who want to check their stats the player data section allows the player to look up their account.  Once they have found their account they can look at statistics, as soon as, an hour after playing the game</p>
                            <p>If players want to make new friends or just people to play with.  The Looking For Group (LFG) allows players to make posts and comment to find teammates!</p>
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
                                <li>bcrypt gem</li>
                                <li>dotenv gem</li>
                                <li>HTTParty gem</li>
                                <li>Restful API</li>
                                <li>Relational Database With Aliasing</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-carousel-container' : 'lt-carousel-container'}>
                            <StatCarousel isDark={isDark} />
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
                            <a className={isDark === true ? 'dk-project-link' : 'lt-project-link'} href="https://overstat-lab.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://compass-ssl.xbox.com/assets/1b/d7/1bd7bdbd-2dd2-4861-8f2a-6161acca107f.jpg?n=Overwatch_GLP-Page-Hero-1084_1920x1080.jpg" className="link-image" alt='link' />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OwStatLab;