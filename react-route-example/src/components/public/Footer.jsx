import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <footer class="pt-4 my-md-5 pt-md-5 border-top">
                    <div class="row">
                        <div class="col-12 col-md">
                            <img class="mb-2" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"></img>
                            <small class="d-block mb-3 text-muted">&copy; 2017-2019</small>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Features</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Cool stuff</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Resources</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Resource</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md">
                            <h5>About</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="./team">Team</a></li>
                                <li><a class="text-muted" href="./term">Terms</a></li>
                                <li><a class="text-muted" href="#">Privacy</a></li>
                                <li><a class="text-muted" href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
