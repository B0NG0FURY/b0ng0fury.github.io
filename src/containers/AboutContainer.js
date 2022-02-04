import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import History from '../components/History';
import Interests from '../components/Interests';

class AboutComponent extends Component {
    render() {
        return(
            <section className="jt-section">
                <h2 className="info-header">Some Stuff About Me</h2>
                <Tabs defaultActiveKey="history" className="mb-3">
                    <Tab eventKey="history" title="History">
                        <History />
                    </Tab>
                    <Tab eventKey="interests" title="Interests">
                        <Interests />
                    </Tab>
                </Tabs>
            </section>
        )
    }
}

export default AboutComponent;