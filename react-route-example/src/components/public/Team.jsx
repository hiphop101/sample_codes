import React, { Component } from 'react';
import {Jumbotron, Container , Row, Col, Image} from 'react-bootstrap';
import './Team.css'

export default class Team extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Team</h2>
                    <p>Our team mixed with professional background of top notch fintech, consultancy, and banking firms</p>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="pwerson-wrapper">
                        <Image src="../assets/hzw.png" roundedCircle className="profile-pic"/>
                        <h3>Farmer - CEO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga aut velit in dolores dicta saepe illum mollitia enim laboriosam non, provident ipsum voluptatibus quasi doloribus perspiciatis tempore eaque fugit.</p>
                    </Col>
                    <Col xs={12} sm={4} className="pwerson-wrapper">
                        <Image src="../assets/mario.png" roundedCircle className="profile-pic"/>
                        <h3>Shooter - COO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga aut velit in dolores dicta saepe illum mollitia enim laboriosam non, provident ipsum voluptatibus quasi doloribus perspiciatis tempore eaque fugit.</p>
                    </Col>
                    <Col xs={12} sm={4} className="pwerson-wrapper">
                        <Image src="../assets/gui.png" roundedCircle className="profile-pic"/>
                        <h3>Defender - CLO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga aut velit in dolores dicta saepe illum mollitia enim laboriosam non, provident ipsum voluptatibus quasi doloribus perspiciatis tempore eaque fugit.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
