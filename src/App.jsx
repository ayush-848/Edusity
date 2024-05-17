import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App=()=> {

  const [Play, setPlay]=useState(false);


  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <div className="container">
      <Title subTitle='Our PROGRAM' title='What We Offer'></Title>
      <Programs></Programs>
      <About setPlay={setPlay}></About>
      <Title subTitle='Gallery' title='Campus Photos'></Title>
      <Campus></Campus>
      <Title subTitle='Testimonials' title='What Student Says'></Title>
      <Testimonial></Testimonial>
      <Title subTitle='Contact Us' title='Get in Touch'></Title>
      <Contact></Contact>
      <Footer></Footer>
      <VideoPlayer Play={Play} setPlay={setPlay}></VideoPlayer>
    </div>
    </>
  )
}

export default App
