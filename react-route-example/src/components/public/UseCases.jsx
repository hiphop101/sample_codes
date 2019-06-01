import React, { Component } from 'react';

import './UseCases.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div class="bg1 position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
                    <div class="transbox">
                        <h1 class="display-5 font-weight-normal">Personal finances</h1>
                        <p class="lead font-weight-normal">Helping client to easily connect all the bank account to a single application for convenient personal finance management</p>
                        <a class="btn btn-outline-secondary" href="#">Connect today</a>
                    </div>
                    <div class="product-device shadow-sm d-none d-md-block"></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
                <div class="bg2 position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
                    <div>
                        <h1 class="display-5 font-weight-normal">Consumer payments</h1>
                        <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                        <a class="btn btn-outline-secondary" href="#">Coming soon</a>
                    </div>
                    <div class="product-device shadow-sm d-none d-md-block"></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
                <div class="bg3 position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
                    <div>
                        <h1 class="display-5 font-weight-normal">Lending</h1>
                        <p class="lead font-weight-normal">We provide a list of comprehensive API to reduce the cost and increase the accuracy of eKYC</p>
                        <a class="btn btn-outline-secondary" href="#">Connect Today</a>
                    </div>
                    <div class="product-device shadow-sm d-none d-md-block"></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </div>

        )
    }
}
