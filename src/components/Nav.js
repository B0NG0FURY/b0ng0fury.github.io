import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(
            <nav class="sidebar">
                <ul class="sidebar-items">
                    <li><button className="nav-btn">About</button></li>
                    <li><button className="nav-btn">Portfolio</button></li>
                    <li><button className="nav-btn">C.V.</button></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;

