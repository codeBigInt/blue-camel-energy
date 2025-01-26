import React from 'react'
import HomepageHero from './custom-components/HomepageHero'
import Solutions from './custom-components/Solutions'
import Client from './custom-components/Client'
import Reviews from './custom-components/Reviews'
import Press from './custom-components/Press'

const HomePage = () => {
  return (
    <div className='w-full'>
      <HomepageHero />
      <Solutions />
      <Client />
      <Reviews />
      <Press />
    </div>
  )
}

export default HomePage
