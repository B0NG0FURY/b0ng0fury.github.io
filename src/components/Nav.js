import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(
            <nav className="sidebar">
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

