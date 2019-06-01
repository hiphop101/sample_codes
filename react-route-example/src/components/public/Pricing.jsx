import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <div>
                    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 class="display-4">Pricing</h1>
                        <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                    </div>
                </div>
                <div class="container">
                    <div class="card-deck mb-3 text-center">
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Free</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>100 Free API calls per month</li>
                                    <li>1 call per second</li>
                                    <li>Normal email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                            </div>
                        </div>
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Pro</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">$199 <small class="text-muted">/ mo</small></h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>1000 API calls</li>
                                    <li>1 call per second</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
                            </div>
                        </div>
                        <div class="card mb-4 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">Enterprise</h4>
                            </div>
                            <div class="card-body">
                                <h1 class="card-title pricing-card-title">Contact us</h1>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Unlimited API calls</li>
                                    <li>5 call per second</li>
                                    <li>Priority email & Phone support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
