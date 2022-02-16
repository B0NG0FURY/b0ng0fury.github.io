export default function Cv() {
    return (
        <article className="cv-container">
            <section className="cv-section">
                <p id="cv-links">
                    <a
                        href="https://github.com/B0NG0FURY"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                     | 
                    <a
                        href="http://medium.com/@jtroutmanman"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Blog
                    </a>
                </p>
            </section>
            <section className="cv-section">
                <h3 class="section-title">Software Engineer</h3>
                <p id="intro-body">
                    Experienced in Ruby on Rails and Javascript based programming. Possess strong skills in problem solving and project management, with over ten years of experience working with teams under pressure to quickly ameliorate process functions. I enjoy working on projects that have a positive impact on people's lives and the creativity, collaboration, and troubleshooting involved with creating those applications are what attracted me to start coding.
                </p>
            </section>
            <section className="cv-section">
                <h3 class="section-title">Technical Skills</h3>
                <ul>
                    <li>Javascript(ES6)</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Ruby</li>
                    <li>Rails</li>
                    <li>ActiveRecord</li>
                    <li>SQLite3</li>
                    <li>postgreSQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </section>
        </article>
    )
}