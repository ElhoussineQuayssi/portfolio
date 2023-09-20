import './index.scss'
import Logo1 from '../../../assets/images/logo.png'
import { useState } from 'react'

const Logo = () => {
    const array = ["Inspire. Create. Transform.","Designing Dreams, Crafting Solutions","Designing Tomorrow, Showcasing Today","Your Vision, My Creations",'Turning Ideas into Digital Masterpieces','Websites with a WOW Factor']
    const [slogan,setslogan] = useState(array[0])
    const [pile,setpile] = useState({
        array : []
    })
    const generateslogan = () => {
        setTimeout(() => {
          let i = Math.floor(Math.random() * 6)
          while(pile.array.indexOf(i) !== -1){
            i = Math.floor(Math.random() * 6)
          }
          console.log(array[i])
          setslogan(array[i])
          setpile((current) => {
            if(current.array.length === 5){
                current.array.shift()
            }
            if(current.array.indexOf(i) === -1){
                current.array.push(i)
            }
            
            return current
          }
          )
          console.log(pile)
        },500)
     
    }
    
    return (
        <div className='logo-container' onMouseLeave={() => generateslogan()}>
            <img className='solid-logo' src={Logo1} alt="" />
            <p className='text-pre'>
                {slogan}
            </p>
        </div>
    )
}

export default Logo