import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(
            <nav className="sidebar">
                <button
                    className="nav-btn nav-home font-effect-anaglyph font-effect-3d"
                    onClick={() => this.props.setActive("Welcome")}
                >
                    JT
                </button>
                <ul className="sidebar-items">
                    <li>
                        <button
                            style={this.props.active === "About" ? {textDecoration: 'underline'} : null}
                            className="nav-btn" 
                            onClick={() => this.props.setActive("About")}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            style={this.props.active === "Portfolio" ? {textDecoration: 'underline'} : null} 
                            className="nav-btn" 
                            onClick={() => this.props.setActive("Portfolio")}
                        >
                            Portfolio
                        </button>
                    </li>
                    <li>
                        <button
                            style={this.props.active === "CV" ? {textDecoration: 'underline'} : null}
                            className="nav-btn" 
                            onClick={() => this.props.setActive("CV")}
                        >
                            C.V.
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;

