import '../css/about.css';

const About = () => {
    return(
        <div className="about-page">
            <div className="about-container">
                
                <div className="about-words">
                    <span>Passionate</span>
                    <span>Honest</span>
                    <span>Determined</span>
                    <span>Software Engineer</span>
                </div>
                <div>
                <img src=""></img>
                <h1> Allegra Hilburger</h1>
                <p> I believe in taking responsibility for our future. I want to encourage creation, beauty, efficiency, and balance in the things I create. I am a developer, a stargazer, an activist, a mother. I strive to create applications that impact the world positively, that remind people of the rareity of our human experience and that unify us.</p>
                <ul>
                    <label>Skills</label>
                    <li>REACT</li>
                    <li>Javascript, HTML, CSS</li>
                    <li>Ruby on Rails</li>
                    <li>Express, MongoDB, Mongoose, Nodejs</li>
                    <li>Bootstrap</li>
                </ul>
                <ul>
                    <label>Interests</label>
                    <li>Decentralized Web Applications</li>
                    <li>Blockchain/Ethereum</li>
                    <li>UX Design</li>
                    <li>Algorithms and Machine Learning</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default About;