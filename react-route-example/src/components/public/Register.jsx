import React, { Component } from 'react'
import { InputGroup, FormControl, Container, Row } from 'react-bootstrap'

export default class Register extends Component {
    render() {
        return (
            <div>
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                
                
                <InputGroup className="mb-3">
                <Container>
                <Row>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    </Row>
                    <Row>
                    <FormControl
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                    />
                    </Row>
                    </Container>
                </InputGroup>
                
            </div>
        )
    }
}
