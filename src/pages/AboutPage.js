import Modal from 'react-modal'

export default function AboutPage() {
    return <div className="contain">
        <header class="hero-section">
            <div class="hero-section-name">
                <span className="aph">H</span>
                <span className="aph">i&nbsp;</span>
                <span className="aph">I</span>
                <span className="aph">'</span>
                <span className="aph">m&nbsp;</span>
            
                <span className="aph">B</span>
                <span className="aph">r</span>
                <span className="aph">e</span>
                <span className="aph">n</span>
                <span className="aph">d</span>
                <span className="aph">a</span>
                <span className="aph">n</span>
            </div>
        <h2>Innovating at the intersection of technology and fitness</h2>
    </header>

    <div class="aboutContainer">
        <section class="aboutCard bio">
            <h2>Work and School</h2>
            <p>I'm a software developer graduated from Eau Claire with a passion for building engaging applications. Specializing in AI and machine learning.</p>
            <p>I'm a software developer graduated from Eau Claire with a passion for building engaging applications. Specializing in AI and machine learning.</p>
            <p>I'm a software developer graduated from Eau Claire with a passion for building engaging applications. Specializing in AI and machine learning.</p>

            <div class="skills-icons">
                {/* <!-- Icons would be placed here --> */}
            </div>
        </section>

        <section class="aboutCard sports-journey">
            <h2>Sports and Fitness</h2>
            <ul>
                <li>Swimming - Competed in college swimming championships.</li>
                <li>Kickboxing - Recently started kickboxing.</li>
                <li>MMA - Training in mixed martial arts.</li>
                <li>Frolfing - Enjoy playing disc golf on weekends.</li>
            </ul>
        </section>

        <section class="aboutCard tech-interests">
            <h2>Technical Interests</h2>
            <p>Deeply fascinated by the potential of artificial intelligence and hardware aspects of physics.</p>
        </section>
        <section class="aboutCard tech-interests">
            <h2>Technical Interests</h2>
            <p>Deeply fascinated by the potential of artificial intelligence and hardware aspects of physics.</p>
        </section>
        <section class="aboutCard tech-interests">
            <h2>Technical Interests</h2>
            <p>Deeply fascinated by the potential of artificial intelligence and hardware aspects of physics.</p>
        </section>
    </div>
    <footer class="contact-links">
        <h2>Contact Me</h2>
        <p>Connect with me on LinkedIn or via email.</p>
        {/* <!-- Social media icons --> */}
    </footer>
        
    </div>
}