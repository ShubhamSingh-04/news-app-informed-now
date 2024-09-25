import React, { Component } from 'react'

export default class navabar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/"><strong>Informed Now</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <a className="nav-link" href="/">General</a>
                            </li> 

                            <li className="nav-item">
                                <a className="nav-link" href="/">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Entertainment</a>
                            </li>
                           <li className="nav-item">
                                <a className="nav-link" href="/">Health
                                </a>
                            </li>                           <li className="nav-item">
                                <a className="nav-link" href="/">Science
                                </a>
                            </li>                            <li className="nav-item">
                                <a className="nav-link" href="/">Sports
                                </a>
                            </li>                           <li className="nav-item">
                                <a className="nav-link" href="/">Technology</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
