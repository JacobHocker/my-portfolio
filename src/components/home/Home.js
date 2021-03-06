import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Home.scss';

function Home({ isDark }) {
    return(
        <div className={isDark === true ? "dk-home-container" : "lt-home-container"}>
            <Container>
                <Row className="home-row-one">
                    <Col className={isDark === true ? "dk-row-one-col-one" : "lt-row-one-col-one"}>
                        <div className={isDark === true ? "dk-home-header" : "lt-home-header"}>
                            <h1>Jacob</h1>
                            <h1>Hocker</h1>
                        </div>
                    </Col>
                </Row>  
                <Row>  
                    <Col className={isDark === true ? "dk-row-one-col-two" : "lt-row-one-col-two"}>
                        <div className={isDark === true ? "dk-home-info" : "lt-home-info"}>
                            <h1>Full Stack Software Engineer</h1>
                        </div>
                    </Col>
                </Row> 
                <Row className="home-row-two">
                    <Col className="row-two-col-one">
                        <div className="home-header-image-container">
                            <img src='https://www.incimages.com/uploaded_files/image/1024x576/software-computer-code-1940x900_35196.jpg' className="code-picture" alt='code' />
                        </div>
                    </Col>
                </Row> 
                <Row className="home-row-four">
                    <Col className={isDark === true ? "dk-row-four-col-one" : "lt-row-four-col-one"}>
                        <div className={isDark === true ? "dk-intro-container" : "lt-intro-container"}>
                            <div className={isDark === true ? "dk-intro-header" : "lt-intro-header"}>
                                <h1>Nice To</h1>
                                <h1>Meet You!</h1>
                            </div>
                            <div className={isDark === true ? "dk-intro-body" : "lt-intro-body"}>
                                <p>I hope you enjoy getting to know about me, and what I can bring to your team!</p>
                                <p>I look forward to getting to know you! So go ahead reach out lets talk code, jobs, music, games, or anything I love meeting new people and getting to know their story!</p>
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>
        </div>
    );
};

export default Home;