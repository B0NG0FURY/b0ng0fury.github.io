import Card from 'react-bootstrap/Card';

export default function History() {
    return (
        <Card style={{color: 'whitesmoke', width: '50rem'}} className="about-card">
        <Card.Body>
            <Card.Text>
                <article>
                    <p>
                        I'm 36 years old and grew up in the greater Chicago region of northwest Indiana (where we are known as "region rats") and is where I still reside today. I'm married to a wonderful lady and incredibly creative artist. Together we have 2 children.
                    </p>
                    <img class="history-pic" src="/family-pic.jpg" width="200" height="300"/>
                    <p>
                        I've been interested in technology from an early age. The advancements in functionality of computers, televisions, phones, and gaming consoles have fascinated and amazed me in their utility and now necessity in everyday life. This probably explains my compulsion to always want the newest gadgets. At least that's how I try to justify the expenses to my wife.
                    </p>
                    <p>
                        Since 2010 I have worked at US Steel as an electrician. The use of electricity in the industry for automation were what originally drew me to the work. It was also difficult and required a lot of critical thinking and problem solving. This ended up being my favorite part of the job as I enjoyed troubleshooting and figuring out solutions to problems. I find it incredibly satisfying to resolve issues. Overall the job provided stability for me and my family but it was not what I had originally planned for myself. It wasn't the dream job.
                    </p>
                    <p>
                        One day while in the middle of doing some online banking I started thinking about how much web applications have become an increasingly important part of everyday life. Banking, education, ordering food, buying concert tickets... these were all things that relied on coded applications to make people's lives easier and with smartphones could be accomplished just about anywhere. My inherent interest in technology along with an insatiable curiosity guided me to learn how these programs worked. I started watching videos online and picked up the Head First Javascript book. I went through the book cover to cover and was immediately captivated. I wanted to learn as much as I could as it was a perfect marriage of my interest in technology and problem solving skills I had honed in my time as an industrial electrician.
                    </p>
                    <p>
                        While I tried learning as much as I could on my own, I admitted to myself that I would benefit from a more structured approach since I was simultaneously working full time and raising a family. This led me to Flatiron School where I completed the full stack software engineering program. I've found what I want to do for a career and am currently pursuing making that dream a reality.
                    </p>
                </article>
            </Card.Text>
        </Card.Body>
        </Card>
    )
}