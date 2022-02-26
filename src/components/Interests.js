import Carousel from 'react-bootstrap/Carousel';

export default function Interests() {
    return (
        <Carousel interval="10000" className="interest-slides">
            <Carousel.Item>
                <div className="slide-img-container">
                    <img className="d-block w-100" alt="Music" src="http://placehold.it/600x400"/>
                </div>
                <Carousel.Caption>
                    <h5>Music</h5>
                    <p>
                        I love listening to music and have spent 14 years collecting vinyl. Yes, I have a problem.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide-img-container">
                    <img className="d-block w-100" alt="Movies" src="http://placehold.it/600x400"/>
                </div>
                <Carousel.Caption>
                    <h5>Movies</h5>
                    <p>
                        I enjoy watching movies new and old. I have amassed quite the collection over the years. Again, yes I have a problem.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide-img-container">
                    <img className="d-block w-100" alt="Onewheel" src="/onewheel-self1.jpg"/>
                </div>
                <Carousel.Caption>
                    <h5>Onewheel</h5>
                    <p>
                        I started riding a Onewheel as a way to get outside and move around town without a car. It's fun and a great way to clear my head and enjoy the outdoors.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div class="slide-img-container">
                    <img className="d-block w-100" alt="Travel" src="/travel-disney.jpg" width="200" height="450"/>
                </div>
                <Carousel.Caption>
                    <h5>Travel</h5>
                    <p>
                        Flying or driving, I love getting away to new places.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide-img-container">
                    <img className="d-block w-100" alt="Video Games" src="http://placehold.it/600x400"/>
                </div>
                <Carousel.Caption>
                    <h5>Video Games</h5>
                    <p>
                        I've been an avid gamer since grade school. Some things never change!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}