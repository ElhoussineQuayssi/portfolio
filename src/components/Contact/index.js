import Loader from 'react-loaders'
import './index.scss'
import 'leaflet/dist/leaflet.css'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import  emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const array = 'C.o.n.t.a.c.t. .m.e'.split('.')
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
    const refForm = useRef()
    const sendEmail = (e) => {
      e.preventDefault()
      emailjs
        .sendForm(
            'service_tmz1uwe ',
            'template_lu6guvn',
            refForm.current,
            'kqHtjYA7blA1A6YQh'
        )
        .then(
            () => {
             alert('Message successfully sent!')
             window.location.reload(false) 
            },
            () => {
              alert('Failed to send the message, please try again ')
            }
            
        )
    }
    

  return (
    <>
        <div className="contact-page container">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={array} index={15} letterClass={letters}/>
                </h1>
                <p>
                    I'm interested in freelance opportunities - especially ambitious on large projects. However, if you have other request or question,don't hestitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder='Email' required/>
                            </li>
                            <li >
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Elhoussine Quayssi,
                <br/>
                Morocco,
                <br/>
                Lot VICTORIA bloc13 N289 ouled saleh
                <br/>
                Nouaceur Casablanca
                <br/>
                <span>quayssielhoussine@gmail.com</span>   
                <br/>
                <span>+212 777 32 79 21</span>   
            </div>
            <div className='map-wrap'>
                <MapContainer center={[33.4234157,-7.681615]} zoom={10}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
                    <Marker position={[33.4234157,-7.681615]}>
                        <Popup>Quayssi lives here, come over come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='ball-rotate'/>
    </>
    
  )
  }

  export default Contact
