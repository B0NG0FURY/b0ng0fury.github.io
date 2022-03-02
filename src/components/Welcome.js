import icons from '../icons';
import self from '../self.jpg';

export default function Welcome() {
    return (
        <section className="welcome">
            <img src={self} id="self-img" />
            <h1>Hi, I'm John Troutman</h1>
            <p>I like to code things</p>

            <section className="code-icons">
                {Object.values(icons).map(src => <img src={src} />)}
            </section>
        </section>
    )
}