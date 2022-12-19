import React, { useState, useEffect } from 'react'
import image1 from '../images/bag.png'
import image2 from '../images/choko.jpg'
import image3 from '../images/colorfull.png'
import image4 from '../images/leaf.png'


export default function MySlider() {
  // 0000000000000000000000000000000000000000000000
  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3, image4])
  // 00000000000000000000000000000000000000000
  const [id, setId] = useState(null)

  useEffect(() => {
    start()
  }, [])

  const start = () => {
    console.log('start')
    const _start = setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
    }, 4000)
    setId(_start)
  }

  const stop = () => {
    console.log('stop')
    clearInterval(id)
  }
  let box = document.querySelector('.product-container');
  // 1.making fun that prform  at onClick
  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
  }
  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width)
  }

  return (
    <div className='product-slider' style={{ position: "relative", overflow: "hidden", padding: "26px" }}>

      <button className='pre-btn' style={{ border: "none", width: "60px", height: "100%", position: "absolute", top: "0", backgroundColor: "rgba(0, 0, 0, 0)" }}
        onClick={btnpressprev}
      // onClick={() => {
      //   if (selectedImage > 0)
      //     setSelectedImage(selectedImage - 1)
      // }}
      >
        <p style={{ display: "flex", justifyContent: "center", alignItem: "center", fontSize: "50px", backgroundColor: "rgba(255, 255, 255, 0.436)", boxShadow: "0px 0px 10px 1px black", borderRadius: "10px", color: "rgb(0, 0, 0)", curser: "pointer", width: "50px", height: "50px" }}>&lt;</p>
      </button>

      <button className='next-btn' style={{ right: "0", border: "none", width: "60px", height: "100%", position: "absolute", top: "0", alignItem: "center", backgroundColor: "rgba(0, 0, 0, 0)" }}
        onClick={btnpressnext}
      // onClick={() => {
      //   if (selectedImage < allImages.length - 1)
      //     setSelectedImage(selectedImage + 1)
      // }}
      >
        <p style={{ fontSize: "50px", backgroundColor: "rgba(255, 255, 255, 0.436)", boxShadow: "0px 0px 10px 1px black", borderRadius: "10px", color: "rgb(0, 0, 0)", curser: "pointer", width: "50px", height: "50px" }}>&gt;</p>
      </button>

      <div className='product-container'
        style={{
          padding: "0 10px", display: "", overflowX: "hidden", scrollBehavior: "smooth",
          // autoPlay: "boolean",autoPlayTime: "number", width:"%' | 'px"
        }}>
        {/* 00000000000000000000000000000000 */}
        <div className='mycard m-5'
          style={{
            minWidth: "1500px", maxWidth: "1500px", backgroundColor: "whitesmoke", height: "600px", overflow: "hidden"
          }}>
          {/* <div style={{resizeMode:"stretch"}}> */}
          <img alt='' style={{ width: "100%", height: "100%", resizeMode: "" }}
            onMouseOut={() => start()}
            onMouseOver={() => stop()}
            width={810} height={400} src={allImages[selectedImage]} /> <br />
          {/* </div> */}
        </div>

      </div>

    </div>
  )
}
