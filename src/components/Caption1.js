import React,{useState,useEffect} from 'react'
import './Image_Slider.css'
import MovingText from 'react-moving-text'

// ............ 1.chain animation...............................
// const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly"]
const AnimationsForChaining = ["pulse"]

export default function () {

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

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       console.log('This will run after 1 second!')
    //     }, 1000);
    //     return () => clearTimeout(timer);
    //   }, []);

    return (
        <MovingText
            onAnimationEnd={handleChainAnimation}
            type={animationType}
            duration="1000ms"
            timing="linear"
            iteration={5}>

            <h1 className='caption1'>slide 1</h1>
            <h1 className='caption2'>Next-gen technology</h1>
            <h1 className='caption3'>Data re-imagined</h1>
        </MovingText>
    )
}
