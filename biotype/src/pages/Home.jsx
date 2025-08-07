import React from 'react'
import Header from '../components/Header'
import BloodTypeSelector from '../components/BloodTypeSelector'
import TopCoachs from '../components/TopCoachs'
import Banner from '../components/Banner'


const Home = () => {
  return (
    <div>
      <Header/>
      <BloodTypeSelector/>
      <TopCoachs/>
      <Banner/>

    </div>
  )
}

export default Home