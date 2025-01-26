import React from 'react'
import Wrapper from './Wrapper'
import Button from './Button'

const NewsLetter = () => {
  return (
    <Wrapper className='lg:min-h-[300px] flex pb-10 justify-between items-end w-full bg-[#FFCC29]'>
      <h3 className="text-4xl">Stay up to speed on the <br /> latest from <span className='capitalize'>blue camel energy</span></h3>
      <form className='flex items-start gap-6 lg:w-[50%]'>
        <div className='flex flex-col gap-2 w-full'>
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
