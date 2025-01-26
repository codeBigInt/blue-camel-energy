import React from 'react'
import Wrapper from './Wrapper'
import ReviewCaruosel from './ReviewCaruosel'


const Reviews = () => {
  return (
    <Wrapper className='bg-blue-50 flex flex-col md:gap-6 gap-4 pt-20 pb-20'>
      <p className='uppercase text-[14px] text-gray-500'>Our Customers</p>
      <h2 className='md:text-4xl text-2xl text-blue-900 '>Why you should trust us</h2>
      <div>
        <p>
          We are fast becoming preffered provider of efficient solar power solutions leading state government, government agencies, construction companies, ICT companies, embasies ans consulates, banks businesses, homes, schools, para-millitary.
        </p>
      </div>
      <p>Here&apos;s what client says about us.</p>
      <section className='w-full'>
        <ReviewCaruosel />
      </section>
    </Wrapper>
  )
}

export default Reviews
