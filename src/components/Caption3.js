import React,{useState} from 'react'
import './Image_Slider.css'
import MovingText from 'react-moving-text'

// ............ 1.chain animation...............................
const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly"]

export default function Caption3() {
    // ................. 2.chain animation.............................
    const [animationIndex, setAnimationIndex] = useState(0)
    const [animationType, setAnimationType] = useState(AnimationsForChaining[0])
    const handleChainAnimation = () => {
        setAnimationIndex(animationIndex + 1)
        setAnimationType(animationType[animationIndex + 1])
    }

    //    useEffect(() => {
    // handleChainAnimation()  
    //  }, [animationIndex])

    return (
        <MovingText
            onAnimationEnd={handleChainAnimation}
            type={animationType}
            duration="1000ms"
            timing="linear"
            iteration={1}>

            <h1 className='caption1'>slide 3</h1>
            <h1 className='caption2'>Precision in drug discovery</h1>
            {/* <h1 className='caption3'></h1> */}
        </MovingText>
    )
}
