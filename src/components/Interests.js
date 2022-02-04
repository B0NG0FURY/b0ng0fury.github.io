import Carousel from 'react-bootstrap/Carousel';

export default function Interests() {
    return (
        <Carousel interval="10000" className="interest-slides">
            <Carousel.Item>
                <img className="d-block w-100" alt="Music"/>
                <Carousel.Caption>
                    <h5>Music</h5>
                    <p>Text goes here...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" alt="Movies"/>
                <Carousel.Caption>
                    <h5>Movies</h5>
                    <p>Text goes here...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" alt="Onewheel"/>
                <Carousel.Caption>
                    <h5>Onewheel</h5>
                    <p>Text goes here...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" alt="Travel"/>
                <Carousel.Caption>
                    <h5>Travel</h5>
                    <p>Text goes here...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" alt="Video Games"/>
                <Carousel.Caption>
                    <h5>Video Games</h5>
                    <p>Text goes here...</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}