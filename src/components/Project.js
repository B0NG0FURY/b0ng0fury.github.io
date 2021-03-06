import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function Project(props) {
    return (
        <Accordion>
                <Card className="project-card">
                    <Card.Header>{props.project.name}</Card.Header>
                    <Card.Img  
                        className="project-img" 
                        variant="top" 
                        src={props.project.img} 
                        alt={`${props.project.name} Project Image`}
                    />
                    <Accordion.Header>Info</Accordion.Header>
                    <Accordion.Body>
                        <Card.Body>
                            <Card.Text>
                                <section>
                                    <p>{props.project.about}</p>
                                    <a 
                                        className="float-left"
                                        href={props.project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="project-link">Demo Video</button>
                                    </a>
                                    <a 
                                        className="float-right"
                                        href={props.project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="project-link">Github</button>
                                    </a>
                                </section>
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Body>
                </Card>
            </Accordion>
    )
}