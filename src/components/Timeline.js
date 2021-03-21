import "../css/timeline.css";

const Timeline = () => {
    return(
        <>
        <div class="timeline">
            <div class="container left">
                <div class="date">15 Dec</div>
                <i class="icon fa fa-home"></i>
                <div class="content">
                    <h2>Urspace</h2>
                    <h4>E-commerce Store - Mongo/Mongoose</h4>
                    <a><img src="#" alt="Furniture Store landing page"></img></a>
                </div>
            </div>
            <div class="container right">
                <div class="date">22 Oct</div>
                <i class="icon fa fa-gift"></i>
                <div class="content">
                    <h2>Divine Confections</h2>
                    <h4>Cake Business Website - Mongo, Express, React, Nodejs, Bootstrap</h4>
                    <a><img src="#"></img></a>
                </div>
            </div>
        <div class="container left">
            <div class="date">10 Jul</div>
            <i class="icon fa fa-user"></i>
            <div class="content">
                <h2>Tweeter</h2>
                <h4>Group project creating Twitter knock off - Ruby, Rails, React</h4>
                <a><img src="#"></img></a>
            </div>
        </div>
</div>
        </>
    )
}

export default Timeline;