function Projects(){
    return (
        <div className="project-wrapper" id="projects">
            <div className="skill-title">PROJECTS</div>
            <div className="projects">
                <div className="project">
                    <div className="project-title">COVID-19 INDIA</div>
                    <div className="project-link"><a href="https://bit.ly/ankcovid">bit.ly/ankcovid</a></div>
                    <div className="project-description">
                    Coronavirus stats of india with visualisation. 
                    Implemented solely in javascript and Django is used as web framework.
                    </div>
                </div>
                <div className="project">
                    <div className="project-title">BLOGGER</div>
                    <div className="project-link"><a href="https://bit.ly/3mVzpmj">bit.ly/3mVzpmj</a></div>
                    <div className="project-description">
                    It is a blogging web application. Python is used in the backend, 
                    The credentials of users are stored in a MongoDB, and Django is used as web framework.
                    </div>
                </div>
                <div className="project">
                    <div className="project-title">SENTIMENT-ANALYSIS</div>
                    <div className="project-link"><a href="https://bit.ly/34QAVQh">bit.ly/34QAVQh</a></div>
                    <div className="project-description">
                    Web application based on sentiment analysis. The machine learning model is 
                    implemented in Tensorflow. The credentials of users are stored in a MongoDB. 
                    Flask is used as web framework.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;