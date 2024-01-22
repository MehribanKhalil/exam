import React from 'react'
import { Helmet } from 'react-helmet-async'
import CourseSection from '../../components/HomePageComponents/CourseSection'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import OurEvents from '../../components/HomePageComponents/OurEvents'
import OurServices from '../../components/HomePageComponents/OurServices'
import RegisterSection from '../../components/HomePageComponents/RegisterSection'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <HeroSection/>
      <CourseSection/>
      <RegisterSection/>
      <OurServices/>
      <OurEvents/>

    </div>
  )
}

export default Home
