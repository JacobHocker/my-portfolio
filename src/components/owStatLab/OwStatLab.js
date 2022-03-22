import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './OwStatLab.scss';

function OwStatLab({ isDark }) {
    return(
        <div className={isDark === true ? 'dk-stat-lab-container' : 'lt-stat-lab-container'}>
            <Container>
                <Row>
                    <Col>
                        <div className={isDark === true ? 'dk-stat-header' : 'lt-stat-header'}>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OwStatLab;