import icons from '../icons';

export default function Welcome() {
    return (
        <section className="welcome">
            <h1>Hi, I'm John Troutman</h1>
            <p>I like to code things</p>

            <section class="code-icons">
                {Object.values(icons).map(src => <img src={src} />)}
            </section>
        </section>
    )
}