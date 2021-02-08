import Particles from 'react-particles-js'

function Particle(props){
    return(
        <Particles style={{position:"absolute"}}
        params={{
            "particles": {
                "number": {
                    "value": 300,
                    "density": {
                        "enable": false
                    }
                },
                color: {
                value: props.color
                  },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 0.25,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 250,
                        "duration": 4
                    }
                }
            }
        }} />
    )
}

export default Particle;