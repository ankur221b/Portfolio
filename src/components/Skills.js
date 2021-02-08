import {useSpring, animated} from 'react-spring'
import LazyLoad from 'react-lazyload'
import * as easings from 'd3-ease'

function Skill(props){
    const progress = props.progress*5;
    const styleprops = useSpring({config: { duration: 3000,easing:easings.easeElasticOut },
        delay:1000,width: `${progress}px`, from: {width: `0px`}})

    return(
    <div className="skill">
        <div className="skill-icon">
            {props.name}
        </div>
        <div className="total-bar">
            <animated.div className="skill-bar" style={styleprops}>    
            </animated.div>
        </div>
    </div>
    )
}

const Loading =() => (
    <div className="post-loading">
        <h5>Loading...</h5>
    </div>
)

function Skills(){
    
    return(
        <div className="skill-wrapper" id="skills">
            <div className="skill-title">SKILLS</div>
            <LazyLoad placeholder={<Loading />}>

            <div className="skills">
                <Skill name="HTML" progress="70" />
                <Skill name="CSS" progress="65" />
                <Skill name="Javascript" progress="60" />
                <Skill name="Python" progress="70" />
                <Skill name="CPP" progress="65" />
                <Skill name="Django" progress="50" />
                <Skill name="MongoDB" progress="50" />
                <Skill name="MySQL" progress="50" />
                <Skill name="React" progress="50" />
            </div>

            </LazyLoad>

        </div>
    )
}
export default Skills;