import React from 'react';
import { Col, Row } from "react-bootstrap";
import './Skills.scss';
import cssImage from '../../assets/images/lang-logo/css-transparent.png';
import htmlImage from '../../assets/images/lang-logo/html-transparent.png';
import jsImage from '../../assets/images/lang-logo/js-transparent.png';
import reactImage from '../../assets/images/lang-logo/react-transparent.png';
import rubyImage from '../../assets/images/lang-logo/ruby-transparent.png';
import railsImage from '../../assets/images/lang-logo/rails-transparent.png';
import sassImage from '../../assets/images/lang-logo/sass-transparent.png';
import bootstrapImage from '../../assets/images/lang-logo/react-bootstrap-transparent.png';
import nodeImage from '../../assets/images/lang-logo/node-transparent.png';
import sqliteImage from '../../assets/images/lang-logo/sqlite-transparent.png';
import postgresImgae from '../../assets/images/lang-logo/postgresql-transparent.png';
function Skills({ isDark }) {
    return(
        <div className={isDark === true ? 'dk-skills-container' : 'lt-skills-container'}>
            <Row className='skills-row-one'>
                <Col className={isDark === true ? 'dk-skills-col-one' : 'lt-skills-col-one'}>
                    <div className={isDark === true ? 'dk-skills-header' : 'lt-skills-header'}>
                        <h1>Skills</h1>
                    </div>
                </Col>
            </Row>
            <Row className='skills-row-two'>
                <Col className={isDark === true ? 'dk-skills-col-two' : 'lt-skills-col-two'}>
                    <div className={isDark === true ? 'dk-skills-intro' : 'lt-skills-intro'}>
                        <ul className={isDark === true ? 'dk-skills-list' : 'lt-skills-list'}>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>Professional Googler</li>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>Restful API's</li>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>GitHub</li>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>Mobile First Responsive Design</li>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>Stack Overflow</li>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>VS Code</li>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>GitHub</li>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>JSON</li>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>jQuery</li>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>Big O Notation</li>
                            <li className={isDark === true ? 'dk-skills-item' : 'lt-skills-item'}>Object Oriented Programming</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <div className='skills-img-row-one'>
                <Row className='skills-row-three'>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='HTML' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={htmlImage}  className={isDark ? 'dk-image' : 'lt-image'} alt='html' />
                        </div>
                    </Col>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='CSS' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={cssImage}  className={isDark ? 'dk-image' : 'lt-image'} alt='css' />
                        </div>
                    </Col>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='JavaScript' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={jsImage}  className={isDark ? 'dk-image' : 'lt-image'} alt='javascript' />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='skills-img-row-two'>
                <Row className='skills-row-four'>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='React.js' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={reactImage}  className={isDark ? 'dk-image' : 'lt-image'} alt='react' />
                        </div>
                    </Col>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='Ruby' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={rubyImage}  className={isDark ? 'dk-image' : 'lt-image'} alt='ruby' />
                        </div>
                    </Col>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='Ruby On Rails' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={railsImage}  className={isDark ? 'dk-image' : 'lt-image'} alt='ruby-on-rails' />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='skills-img-row-three'>
                <Row className='skills-row-five'>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='Sass(SCSS)' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={sassImage}  className={isDark ? 'dk-image' : 'lt-image'} alt='sass' />
                        </div>
                    </Col>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='React Bootstrap' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={bootstrapImage}  className={isDark ? 'dk-image' : 'lt-image'} alt='react-bootstrap' />
                        </div>
                    </Col>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='Node.js' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={nodeImage}  className={isDark ? 'dk-image' : 'lt-image'} alt='node' />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='skills-img-row-four'>
                <Row className='skills-row-six'>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='PostgreSQL' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={postgresImgae}  className={isDark ? 'dk-image' : 'lt-image'} alt='postgresql' />
                        </div>
                    </Col>
                    <Col className={isDark === true ? 'dk-skills-col-three' : 'lt-skills-col-three'}>
                        <div title='SQLite' className={isDark === true ? 'dk-skills-img' : 'lt-skills-img'}>
                            <img src={sqliteImage} className={isDark ? 'dk-image' : 'lt-image'} alt='sqlite' />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Skills;