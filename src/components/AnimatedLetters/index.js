import './index.scss'

const AnimatedLetters = function({letterClass,strArray,index}){
    return (
        <span>
            {
                strArray.map(function(char,i){
                    return(
                        <span key={i} className={`${letterClass} _${i + index}`}>
                            {char}
                        </span>
                    )
                })
            }
        </span>
    )
}

export default AnimatedLetters