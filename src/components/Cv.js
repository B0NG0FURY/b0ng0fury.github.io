export default function Cv() {
    return (
        <article className="cv-container" style={{marginTop: 15, marginBottom: 15}}>
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
                <h3 className="section-title">Software Engineer</h3>
                <p id="intro-body">
                    Experienced in Ruby on Rails and Javascript based programming. Possess strong skills in problem solving and project management, with over ten years of experience working with teams under pressure to quickly ameliorate process functions. I enjoy working on projects that have a positive impact on people's lives and the creativity, collaboration, and troubleshooting involved with creating those applications are what attracted me to start coding.
                </p>
            </section>
            <section className="cv-section">
                <h3 className="section-title">Technical Skills</h3>
                <ul id="skills-list">
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
            <section className="cv-section">
                <h3 className="section-title">Experience</h3>
                <div className="float-left"><strong>US Steel</strong></div>
                <div className="float-right">Gary, IN</div>
                <br></br>
                <div className="float-left">Electrical Maintenance Technician</div>
                <div className="float-right">06/2010 - present</div>
                <br></br>
                <ul>
                    <li>
                        Maximized production by quickly diagnosing faulty equipment and making repairs to keep operations running smoothly, coinciding with production records at the South Blast Furnaces and record profits in the 2nd and 3rd quarters of 2021
                    </li>
                    <li>
                        Utilized programmable logic controller (PLC) programs in order to monitor performance, troubleshoot issues, and modify program logic when necessary for automated processes.
                    </li>
                    <li>
                        Navigated blueprints and schematics to troubleshoot circuitry and accurately install new equipment.
                    </li>
                    <li>
                        Mentored new employees through their apprenticeships with a focus in electrical theory, troubleshooting, and safety.
                    </li>
                    <li>
                        Requested and gained further education outside of the company’s training program with classes devoted to GE and Allen Bradley PLCs/Drives to stay current on the latest technologies in the industry.
                    </li>
                </ul>
            </section>
            <section className="cv-section">
                <h3 className="section-title">Education</h3>
                <div className="float-left"><strong>Flatiron School</strong></div>
                <div className="float-right">Chicago, IL</div>
                <br></br>
                <div className="float-left">
                    Full Stack Web Development, Rails, and Javascript program
                </div>
                <div className="float-right">08/2020 - 11/2021</div>
                <br></br><br></br>
                <div className="float-left"><strong>Indiana University</strong></div>
                <div className="float-right">Bloomington, IN</div>
                <br></br>
                <div className="float-left">
                    Bachelor of Arts, Communications
                </div>
            </section>
        </article>
    )
}