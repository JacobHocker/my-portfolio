import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './Footer.scss';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMediumSquare } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

function Footer({ isDark }) {

    let linkUrl = 'https://linkedin.com/in/jacob-hocker-23a064220';
    let gitUrl = 'https://github.com/JacobHocker';
    let mediumUrl = 'https://jacobhocker.medium.com';
    let mailUrl = 'mailto: jacobdouglas06@gmail.com';

    return(
        <div className={isDark === true ? 'dk-footer-container' : 'lt-footer-container'}>
            <Container>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-footer-header' : 'lt-footer-header'}>
                            <h1>Contact</h1>
                            <h1>Me</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-footer-icons' : 'lt-footer-icons'}>
                            <a href={mailUrl}>
                                <AiOutlineMail className={isDark === true ? 'dk-icon' : 'lt-icon'} />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className={isDark === true ? 'dk-footer-icons' : 'lt-footer-icons'}>
                            <a href={gitUrl} target="_blank" rel="noopener noreferrer">
                                <AiFillGithub className={isDark === true ? 'dk-icon' : 'lt-icon'} />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className={isDark === true ? 'dk-footer-icons' : 'lt-footer-icons'}>
                            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin className={isDark === true ? 'dk-icon' : 'lt-icon'} />
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div className={isDark === true ? 'dk-footer-icons' : 'lt-footer-icons'}>
                            <a href={mediumUrl} target="_blank" rel="noopener noreferrer">
                                <AiFillMediumSquare className={isDark === true ? 'dk-icon' : 'lt-icon'} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;