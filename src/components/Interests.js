import Carousel from 'react-bootstrap/Carousel';

export default function Interests() {
    return (
        <Carousel interval="10000" className="interest-slides">
            <Carousel.Item>
                <img className="d-block w-100" alt="Music" src="http://placehold.it/600x400"/>
                <Carousel.Caption>
                    <h5>Music</h5>
                    <p>Text goes here...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" alt="Movies" src="http://placehold.it/600x400"/>
                <Carousel.Caption>
                    <h5>Movies</h5>
                    <p>Text goes here...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" alt="Onewheel" src="http://placehold.it/600x400"/>
                <Carousel.Caption>
                    <h5>Onewheel</h5>
                    <p>Text goes here...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" alt="Travel" src="http://placehold.it/600x400"/>
                <Carousel.Caption>
                    <h5>Travel</h5>
                    <p>Text goes here...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" alt="Video Games" src="http://placehold.it/600x400"/>
                <Carousel.Caption>
                    <h5>Video Games</h5>
                    <p>Text goes here...</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}