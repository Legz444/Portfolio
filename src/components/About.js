import '../css/about.css';
import { Card, Container } from 'react-bootstrap';


const About = () => {
    return(
        <>
        <Container className="about-page">
            <Card style={{width: '40rem'}} className="about_card mx-auto" bg="dark" variant="dark">
                <Card.Img variant="left"  src="https://res.cloudinary.com/legz444/image/upload/v1618404867/memountain_pjixkd.jpg" width="350px" height="300px" className="p-3 mx-auto"/>
                <Card.Body>
                    <Card.Title className="about-title">Allegra Hilburger</Card.Title>
                    <Card.Subtitle><a href="#">allegraSE@protonmail.com</a></Card.Subtitle>
                    <Card.Text>I am a developer, a poet, an activist, a mother. I love to contemplate the problems in our world and I believe together, we find the greatest solutions. I want to encourage creation, beauty, efficiency, and balance in the things I create. I strive to design in a way that impacts the world positively, that reminds people of the rareity of our human experience and that unify us.</Card.Text>
                </Card.Body>
            </Card>
            <Container className="bottomCards mx-auto">
            <Card style={{width: '20rem'}} className="skills mx-auto" bg="dark" variant="dark">
                        <Card.Header className="about-title">Skills</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>REACT</li>
                                <li>Javascript, HTML, CSS</li>
                                <li>Ruby on Rails</li>
                                <li>Express, MongoDB, Mongoose, Nodejs</li>
                                <li>Bootstrap</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '20rem'}}className="interests mx-auto" bg="dark" variant="dark">
                        <Card.Header className="about-title">Interests</Card.Header>
                        <Card.Body>
                            <ul>
                                <li>Decentralized Web Applications</li>
                                <li>Blockchain/Ethereum</li>
                                <li>UX Design</li>
                                <li>Algorithms and Machine Learning</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Container>
            {/* <div className="img_header">
            <img src="https://res.cloudinary.com/legz444/image/upload/v1618404867/memountain_pjixkd.jpg" width="250px" height="200px"></img>
            <h4 className="name">I am a developer, a poet, an activist, a mother. I love to contemplate the problems in our world and I believe together, we find the greatest solutions. I want to encourage creation, beauty, efficiency, and balance in the things I create. I strive to design in a way that impacts the world positively, that reminds people of the rareity of our human experience and that unify us.</h4>
            </div>
            <div className="offerings">
            <div className="skills">
                <h3>Skills</h3>
                <div className="skills_list">
                <ul>
                                <li>REACT</li>
                                <li>Javascript, HTML, CSS</li>
                                <li>Ruby on Rails</li>
                                <li>Express, MongoDB, Mongoose, Nodejs</li>
                                <li>Bootstrap</li>
                            </ul>
                </div>
            <div className="interests">
                <div className="interests_list">
                    <h3>Interests</h3>
                <ul>
                                <li>Decentralized Web Applications</li>
                                <li>Blockchain/Ethereum</li>
                                <li>UX Design</li>
                                <li>Algorithms and Machine Learning</li>
                            </ul>
                </div>
                </div>
                </div>
            </div> */}
            
        </Container>
        </>
    )
}

export default About;