import React from 'react'
import './Image-Slider.css';
import slide1 from '../images/slide-1.jpg'
import slide2 from '../images/slide-2.jpg'
import slide3 from '../images/slide-3.jpg'
import 'react-slideshow-image/dist/styles.css'
// import AnimatedText from 'react-animated-text-content';
// import TextTransition, { presets } from "react-text-transition";
import MovingComponent from 'react-moving-text'


//  ===================== 1.ONLY TO SLIDE IMAGE===================================== 
import { Slide } from 'react-slideshow-image';
// ------------------- 2. TO FAD IMAGE----------------------------------
import { Fade } from 'react-slideshow-image';
// ~~~~~~~~~~~~~~~~~~~~~ 3. TO ZOOM EFFECT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { Zoom } from 'react-slideshow-image';


// const TEXTS = [
//     "Forest",
//     "Building",
//     "Tree",
//     "Color"
// ];

// ===================== 1.ONLY TO SLIDE IMAGE=====================================
// const slideImages = [
// ------------------- 2. TO FAD IMAGE----------------------------------
// const fadeImages = [
// ~~~~~~~~~~~~~~~~~~~~~ 3. TO ZOOM EFFECT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const zoomImages1 = [
//     '../images/bag.png',
//     '../images/colorfull.png',
//     '../images/choko.jpg',
//     'images/slide_5.jpg',
//     'images/slide_6.jpg',
//     'images/slide_7.jpg'
// ];
const zoomImages = [
    {
        // url: 'https://www.hdwallpaperspulse.com/wp-content/uploads/2014/05/27/523.jpeg',
        // require:'../../public/images/',
        url: slide1,
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

export default function Image_Slider() {
    // const [index, setIndex] = React.useState(0);

    // React.useEffect(() => {
    //     const intervalId = setInterval(() =>
    //         setIndex(index => index + 1), 3000
    //         // every 3 seconds
    //     );
    //     return () => clearTimeout(intervalId);
    // }, []);
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
                                <MovingComponent
                                    type="blur"
                                    duration="1000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="ease"
                                    iteration="5"
                                    fillMode="none">
                                    React-Moving-Text
                                    <h1 className='caption1'>{zoomImage.caption1}</h1>
                                    <h1 className='caption2'>{zoomImage.caption2}</h1>
                                    <h1 className='caption3'>{zoomImage.caption3}</h1>
                                </MovingComponent>               
                                

                                {/* <MovingText
                                    type="animation_type"
                                    duration="1000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="ease"
                                    iteration="infinite"
                                    fillMode="none">
                                    <p>Content...</p>
                                </MovingText> */}

                                {/* <TextTransition springConfig={presets.wobbly}>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition> */}

                                {/* <AnimatedText
                                    type="words" // animate words or chars
                                    animation={{
                                        x: '200px',
                                        y: '-20px',
                                        scale: 1.1,
                                        ease: 'ease-in-out',
                                    }}
                                    animationType="float"
                                    interval={0.06}
                                    duration={0.8}
                                    tag="p"
                                    className="animated-paragraph"
                                    includeWhiteSpaces
                                    threshold={0.1}
                                    rootMargin="20%"
                                >
                                    Content to animate
                                </AnimatedText>;  */}
                            </div>
                        </div>
                    ))
                }
            </Zoom>
        </div>
    )
}
