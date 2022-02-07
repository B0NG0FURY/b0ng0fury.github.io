import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function Project(props) {
    return (
        <Accordion>
                <Card>
                    <Card.Header>{props.project.name}</Card.Header>
                    <Card.Img variant="top" src={props.project.img}/>
                    <Accordion.Collapse>
                        <Card.Body>
                            <Card.Text>
                                <section>
                                    <p>{props.project.about}</p>
                                    <a href={props.project.demo}>Demo Video</a>
                                    <a href={props.project.github}>Github</a>
                                </section>
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Button>Info</Accordion.Button>
                </Card>
            </Accordion>
    )
}