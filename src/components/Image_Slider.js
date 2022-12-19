import React from 'react'
import './Image-Slider.css';
import 'react-slideshow-image/dist/styles.css'
//  ===================== 1.ONLY TO SLIDE IMAGE===================================== 
import { Slide } from 'react-slideshow-image';
// ------------------- 2. TO FAD IMAGE----------------------------------
import { Fade } from 'react-slideshow-image';
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
//     '../images/choko.jpg',
//     'images/slide_5.jpg',
//     'images/slide_6.jpg',
//     'images/slide_7.jpg'
// ];
const zoomImages = [
    {
        url: 'https://www.hdwallpaperspulse.com/wp-content/uploads/2014/05/27/523.jpeg',
        caption: 'Slide 1'
    },
    {
        url: 'https://www.themasterslawncare.com/sites/default/files/blog/good-day.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'https://thumbs.dreamstime.com/b/mother-daughter-sitting-table-colored-plasticine-modeling-looking-each-other-smiling-concept-s-day-233123829.jpg',
        caption: 'Slide 3'
    },
];

export default function Image_Slider() {
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
                            <img style={{ width: "100%" }} src={zoomImage.url} alt='' className='slide-image'/>
                            <h2>{zoomImage.caption}</h2>
                        </div>
                    ))
                }
            </Zoom>
        </div>
    )
}
