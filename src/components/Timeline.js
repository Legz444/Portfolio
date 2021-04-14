import '../css/styles.css';
import {Container} from 'react-bootstrap';
const Timeline = () => {
    return(
        <>
        <Container className="mx-auto">
        <div className="timeline">
            <div className="container right">
                <div className="date">Feb. 2021</div>
                <i className="icon fa fa-gift"></i>
                <div className="content">
                    <h2>Divine Confections</h2>
                    <h4>Cake Business Website - Mongo, Express, React, Nodejs, Bootstrap</h4>
                    <a href="#"><img src="https://res.cloudinary.com/legz444/image/upload/v1613009387/conscious_confections_eom6qk.png" width="100px" height="100px"></img></a>
                </div>
            </div>
        <div className="container left">
            <div className="date">March 2021</div>
            <i className="icon fa fa-user"></i>
            <div className="content">
                <h2>Tweeter</h2>
                <h4>Group project creating Twitter knock off - Ruby on Rails and React</h4>
                <a href="https://tweeter-ui-goat.herokuapp.com/"><img src="https://res.cloudinary.com/legz444/image/upload/v1618413819/Screen_Shot_2021-04-14_at_9.23.06_AM_p39gij.png" width="100px" height="100px"></img></a>
            </div>
        </div>
        <div className="timeline">
            <div className="container right">
                <div className="date">April. 2021</div>
                <i className="icon fa fa-gift"></i>
                <div className="content">
                    <h2>Common Vote</h2>
                    <h4>React Voting Website - React, MongoDb, Mongoose, Express, Bootstrap</h4>
                    <a href="#"><img src="https://res.cloudinary.com/legz444/image/upload/v1618246795/Common_3_ixl2ld.png" width="100px" height="100px"></img></a>
                </div>
            </div>
        </div>
        </div>
        </Container>
        </>
    )
}

export default Timeline;