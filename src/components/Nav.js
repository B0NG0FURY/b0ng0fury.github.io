import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(
            <nav class="sidebar">
                <ul class="sidebar-items">
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>C.V.</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;

