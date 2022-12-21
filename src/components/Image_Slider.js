import React, { useState, useEffect } from 'react'
import './Image_Slider.css';
// import slide1 from '../images/slide-1.jpg'
import slide2 from '../images/slide-2.jpg'
import slide3 from '../images/slide-3.jpg'
import 'react-slideshow-image/dist/styles.css'
// import MovingComponent from 'react-moving-text'
// import MovingText from 'react-moving-text'

import Caption1 from './Caption1';
import Caption2 from './Caption2';
import Caption3 from './Caption3';

//  ===================== 1.ONLY TO SLIDE IMAGE===================================== 
// import { Slide } from 'react-slideshow-image';
// ------------------- 2. TO FAD IMAGE----------------------------------
// import { Fade } from 'react-slideshow-image';
// ~~~~~~~~~~~~~~~~~~~~~ 3. TO ZOOM EFFECT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { Zoom } from 'react-slideshow-image';

// ===================== 1.ONLY TO SLIDE IMAGE=====================================
// const slideImages = [
// ------------------- 2. TO FAD IMAGE----------------------------------
// const fadeImages = [
// ~~~~~~~~~~~~~~~~~~~~~ 3. TO ZOOM EFFECT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const zoomImages1 = [
//     '../images/bag.png',
//     '../images/colorfull.png',
//     '../images/chocko.jpg',
//     'images/slide_5.jpg',
//     'images/slide_6.jpg',
//     'images/slide_7.jpg'
// ];
const zoomImages = [
    {
        // url: 'https://www.hdwallpaperspulse.com/wp-content/uploads/2014/05/27/523.jpeg',
        url: './images/slide-1.jpg',
        caption1: 'Slide 1',
        caption2: 'Next-gen technology',
        caption3: 'Data re-imagined'
    },
    {
        // url: 'https://www.themasterslawncare.com/sites/default/files/blog/good-day.jpg',
        url: slide2,
        caption1: 'Slide 2',
        caption2: 'Delivering kindness in science',
        caption3: 'Explore our animal platform'
    },
    {
        // url: 'https://thumbs.dreamstime.com/b/mother-daughter-sitting-table-colored-plasticine-modeling-looking-each-other-smiling-concept-s-day-233123829.jpg',
        url: slide3,
        caption1: 'Slide 3',
        caption2: 'Precision in drug discovery'
    },
];

// ............ 1.chain animation...............................
// const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly"]

export default function Image_Slider() {
    // ```````````````````````````````````````````````````````
    const [timer, setTimer] = useState(0)
    setTimeout(() => {
        if (timer === 0) {
            setTimer(timer + 1)
        }
        console.log('Hello, World!')
    }, 3000);
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // ................. 2.chain animation.............................
    // const [animationIndex, setAnimationIndex] = useState(0)
    // const [animationType, setAnimationType] = useState(AnimationsForChaining[0])
    // const handleChainAnimation = () => {
    //     setAnimationIndex(animationIndex + 1)
    //     setAnimationType(animationType[animationIndex + 1])
    // }

    //    useEffect(() => {
    // handleChainAnimation()  
    //  }, [animationIndex])



    return (
        <div className="slide-container">
            <h1><b>Image_Slider</b></h1>
            {/* ===================== 1. ONLY TO SLIDE IMAGE===================================== */}
            {/* <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className="slide-image">
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide> */}

            {/* --------------------- 2. TO FAD IMAGE----------------------------------*/}
            {/* <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div className="each-fade each-slide" key={index}>
                        <div className="image-container">
                            <img src={fadeImage.url} alt='' className='slide-image' />
                        </div>
                        <h2>{fadeImage.caption}</h2>
                    </div>
                ))}
            </Fade> */}

            {/* ~~~~~~~~~~~~~~~~~~~~~ 3. TO ZOOM EFFECT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <Zoom scale={0.4}>
                {
                    zoomImages.map((zoomImage, index) => (
                        <div className="each-slide" key={index}>
                            <img style={{ width: "100%" }} src={zoomImage.url} alt='' className='slide-image' />
                           
                            <div className='caption'>
                                {/* <MovingComponent
                                    type="pulse"
                                    duration="1000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="ease"
                                    iteration="3"
                                    fillMode="none">
                                    <h1 className='caption1'>{zoomImage.caption1}</h1>
                                    <h1 className='caption2'>{zoomImage.caption2}</h1>
                                    <h1 className='caption3'>{zoomImage.caption3}</h1>
                                </MovingComponent> */} {/* .............................. 3.chain animation.................................. */}
                                {/* <MovingText
                                    onAnimationEnd={handleChainAnimation}
                                    type={animationType}
                                    duration="1000ms"
                                    timing="linear"
                                    iteration={1}>

                                    <h1 className='caption1'>{zoomImage.caption1}</h1>
                                    <h1 className='caption2'>{zoomImage.caption2}</h1>
                                    <h1 className='caption3'>{zoomImage.caption3}</h1>
                                </MovingText> */}
                                <Caption1 />

                            </div>

                        </div>
                    ))
                }
            </Zoom>
        </div>
    )
}
