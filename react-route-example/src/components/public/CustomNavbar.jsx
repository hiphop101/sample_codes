import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Brand href="#home">Brick SEA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav pullRight className="mr-auto">
                    <Nav.Link componentClass={Link} href="/">Home</Nav.Link>
                    <Nav.Link componentClass={Link} href="/usecases">Use Cases</Nav.Link>
                    <Nav.Link componentClass={Link} href="/about">About</Nav.Link>
                    <Nav.Link componentClass={Link} href="/pricing">Pricing</Nav.Link>
                    <Nav.Link componentClass={Link} href="/register">Register</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
