import Particle from './Particle'
import Navbar from './Navbar'

function Homepage(){
    return(
    
    <div className="home" id="home">
        <Particle color="#ffffff"/>
        <div className="profile"></div>
        <div className="head-container">
            
            <div className="head">
                <div className="text">
                    <span className="hello">Hello, I'm </span>
                    <span className="highlight">Ankur Yadav</span><br/>
                    <span className="hello">I'm a </span>
                    <span className="hello"> Web Developer.</span>
                </div>
                <div className="direct">
                    <a href="#about"><div className="box" >
                        <span className="mywork">View my work</span>
                        <i className="fas fa-arrow-right"></i>
                    </div></a>
                </div>
            </div>
        </div>  
    </div>

    
    )
}

export default Homepage