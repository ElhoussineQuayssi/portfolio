import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const array = ['A','b','o','u','t',' ','m','e']
    const [letters,setLetters] = useState('text-animate')
    function time(text){
        setTimeout(() => {
            setLetters(text)
        }
        ,3000)
    }
    useEffect((letters) => {
      time('text-animate-hover')
      console.log(letters)
    },[])
  return (
    <>
        <div className='container about-page'>
        <div className='text-zone'>
            <h1 >
                <AnimatedLetters strArray={array} index={15} letterClass={letters}/>
            </h1>
            <p>I'm an extremely ambitious front-end developer looking for a career in an established IT company where I can work with modern technology on tough and diversified projects.</p>
            <p>I'm quietly confident, naturally curious, and always looking to improve my skills one design issue at a time.</p>
            <p>I could briefly sum up who I am in one sentence by saying that I'm a tech nerd, a sports fan, and a really friendly guy.</p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'><FontAwesomeIcon icon={faReact} color='blue'/></div>
                <div className='face2'><FontAwesomeIcon icon={faHtml5} color='red'/></div>
                <div className='face3'><FontAwesomeIcon icon={faCss3} color='blue'/></div>
                <div className='face4'><FontAwesomeIcon icon={faJsSquare} color='yellow'/></div>
                <div className='face5'><FontAwesomeIcon icon={faGitAlt} color='red'/></div>
                <div className='face6'><FontAwesomeIcon icon={faLaravel} color='red'/></div>
            </div>
            
        </div>
        </div>
        <Loader type='square-spin'/>
    </>
   
  )
}
export default About