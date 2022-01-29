import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(
            <nav className="sidebar">
                <ul className="sidebar-items">
                    <li>
                        <button 
                            className="nav-btn" 
                            onClick={() => this.props.setActive("About")}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button 
                            className="nav-btn" 
                            onClick={() => this.props.setActive("Portfolio")}
                        >
                            Portfolio
                        </button>
                    </li>
                    <li>
                        <button 
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

