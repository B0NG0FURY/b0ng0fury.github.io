import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import History from '../components/History';

class AboutComponent extends Component {
    render() {
        return(
            <section>
                <Tabs defaultActiveKey="history" className="mb-3 jt-section">
                    <Tab eventKey="history" title="History">
                        <History />
                    </Tab>
                    <Tab eventKey="likes" title="Likes">

                    </Tab>
                </Tabs>
            </section>
        )
    }
}

export default AboutComponent;