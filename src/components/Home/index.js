import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = function(){
    const [letters,setLetters] = useState('text-animate')
    const newArray = ['u','a','y','s','s','i']
    const jobArray = ['w','e','b',' ','d','e','v','l','o','p','e','r','.']
    function time(text){
        setTimeout(() => {
            setLetters(text)
        }
        ,4000)
    }
    useEffect((letters) => {
      time('text-animate-hover')
      console.log(letters)
    },[])
   
    return ( 
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letters}>H</span>
                    <span className={`${letters} _12`}>i,</span>
                    <br/>
                    <span className={`${letters} _13`}>I</span>
                    <span className={`${letters} _14`}>'m</span>

                    <img src={logo} alt="developer" />
                    <AnimatedLetters letterClass={letters} strArray={newArray} index={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letters} strArray={jobArray} index={22}/>
                    </h1>
                    <h2>Fullstack Developer / Javascript Expert</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Logo/>
            </div>
            <Loader type='pacman'/>
        </>
        
    )
}

export default Home