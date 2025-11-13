import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Nav from '../components/navbar/Nav'

const Home = () => {
  return (
    <div>
      <Nav/>
      <div className='h-screen w-screen fixed z-10'>
      <Video/>
    </div>
    <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between z-20'>
      <HomeHeroText/>
      <HomeBottomText/>
    </div>
    </div>
  )
}

export default Home