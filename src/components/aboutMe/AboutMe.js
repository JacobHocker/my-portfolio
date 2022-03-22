import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './AboutMe.scss';

function AboutMe({ isDark }) {
    return(
        <div className={isDark === true ? 'dk-about-me-container' : 'lt-about-me-container'}>
            <Container>
                <Row>
                    <Col>
                        <div className={ isDark === true ? 'dk-about-header' : 'lt-about-header'}>
                            <h1>About</h1>
                            <h1>Me</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={ isDark === true ? 'dk-about-section-zero' : 'lt-about-section-zero'}>
                            <h2>Background</h2>
                        </div>  
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={ isDark === true ? 'dk-about-section-one' : 'lt-about-section-one'}>
                            <p><strong>Team Player -</strong> I have spent most of my life playing team sports.</p> 
                            <p>It has taught me the mentality of working together with a group of people to achieve a greater goal.</p>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <div className="team-img-container">
                            <img src="https://apexindoorsports.com/wp-content/uploads/2018/03/iStock-486835327.jpg" className="sports-image" alt='team-sports' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="music-img-container">
                            <img src="https://drumfaster.com/wp-content/uploads/2021/02/luke-holland-drummer.jpg" className="drummer" alt='drumming' />
                        </div>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <div className={isDark === true ? 'dk-about-section-two' : 'lt-about-section-two'}>
                            <p><strong>Music/Creativity -</strong> I have been playing musical instruments for most of my adult life.</p>
                            <p>It has given me the insight to come at problems from a creative and outside of the box fixing and creating things!</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-about-section-three' : 'lt-about-section-three'}>
                            <h2>Interests</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-about-section-four' : 'lt-about-section-four'}>
                            <p>When it comes to my interests its pretty simple I'm all about music, gaming, family, friends, and all things nerdy!</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='nerdy-img-container'>
                            <img src="https://www.gamingdebugged.com/wp-content/uploads/2021/09/purple-gaming-set-up-1-1000x600.jpg" className="gaming-setup" alt="game-setup" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;