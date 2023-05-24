import React from 'react'
import Header from '../Components/Header/header'
import Slider from '../Components/Slider/slider'
import Gallery from '../Components/Gallery/gallery'
import Footer from '../Components/Footer/footer'


const Home = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Gallery  title="gallery"
          dark={true}
          id="gallery"/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
