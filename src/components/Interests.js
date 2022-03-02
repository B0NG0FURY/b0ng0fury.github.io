import Carousel from 'react-bootstrap/Carousel';
import interests from '../interests';

export default function Interests() {
    return (
        <Carousel interval="10000" className="interest-slides">
            {interests.map(interest => {
                    return (
                        <Carousel.Item>
                            <div className="slide-img-container">
                                <img className="d-block w-100" alt={interest.title} src={interest.img}/>
                            </div>
                            <Carousel.Caption>
                                <h5>{interest.title}</h5>
                                <p>{interest.text}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}