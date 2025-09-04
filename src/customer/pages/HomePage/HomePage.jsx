import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_shirts } from '../../../data/mens_shirts'

const HomePage = () => {
  return (
    <div>
      <MainCarosel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_shirts[0]} sectionName={"Men shirt and watches"}/>
        <HomeSectionCarosel data={mens_shirts[0]} sectionName={"Men shirt and watches"}/>
        <HomeSectionCarosel data={mens_shirts[0]} sectionName={"Men shirt and watches"}/>
        <HomeSectionCarosel data={mens_shirts[0]} sectionName={"Men shirt and watches"}/>
        <HomeSectionCarosel data={mens_shirts[0]} sectionName={"Men shirt and watches"}/>
        <HomeSectionCarosel data={mens_shirts[0]} sectionName={"Men shirt and watches"}/>
      </div>
    </div>
  )
}

export default HomePage
