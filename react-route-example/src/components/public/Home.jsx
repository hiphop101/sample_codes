import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container} from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to CodeLife.io</h2>
                    <p>This is how to build a site</p>
                </Jumbotron>
            </Container>
        )
    }
}
