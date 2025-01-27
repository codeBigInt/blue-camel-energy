import React from 'react'
import Wrapper from './Wrapper'
import Button from './Button'

const NewsLetter = () => {
  return (
    <Wrapper className='lg:min-h-[300px] flex lg:flex-row max-sm:gap-6 flex-col
     pb-10 justify-between lg:items-end w-full bg-[#FFCC29]'>
      <h3 className="lg:text-4xl text-2xl">Stay up to speed on the <br /> latest from <span className='capitalize'>blue camel energy</span></h3>
      <form className='flex flex-wrap items-start gap-6 lg:w-[50%] w-full'>
        <div className='flex flex-col gap-2 lg:w-full flex-1'>
          <input type='text' placeholder='Email address' className='bg-white p-4 flex-1 text-gray-600' />
          <p className='uppercase'>Subscribe to our newsletter</p>
        </div>
        <Button variant="main" className='bg-black text-white py-4 capitalize'>
          Subscribe
        </Button>
      </form>
    </Wrapper>
  )
}

export default NewsLetter
