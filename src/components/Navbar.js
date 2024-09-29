import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class navabar extends Component {
    render() {
        return (
            <div style={{position:'sticky'}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/"><strong>Informed Now</strong></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/General">General</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/Business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
