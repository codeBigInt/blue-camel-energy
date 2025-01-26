import React from 'react'
import bg from "../../public/images/bg.jpg"
import Wrapper from './Wrapper'
import Button from './Button'
import { ArrowDown } from 'lucide-react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const HomepageHero = () => {
  const bgProps = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }
  return (
    <Wrapper style={bgProps} className='w-full min-h-[750px] md:py-20 flex flex-col justify-between'>
      <div className='text-white flex flex-col lg:gap-6 flex-1 justify-end pb-20'>
        <p className='lg:text-[150px] md:text-3xl text-[80px] pb-0 lg:pb-10'>Power</p>
        <p className='lg:text-[70px] md:text-2xl text-[40px]'>without Pain</p>
        <p className='lg:text-[20px]'>Experience continious, reliable solar power around the <br></br> clock with high-quality solar solution</p>
        <Button variant='bordered' alignIcon='right' className='text-white font-semibold mt-6 lg:mt-0 border-white border-[2px]'>
          <span>Get a Quote</span>
        </Button>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Button variant='borderless' alignIcon='right' className='text-white text-[25px] px-4 font-semibold'>
            <FaArrowLeftLong />
          </Button>
          <Button variant='borderless' alignIcon='right' className='text-white text-[25px] px-4 font-semibold'>
            <FaArrowRightLong />
          </Button>
        </div>
        <Button variant='borderless' alignIcon='right' className='text-white font-semibold'
          icon={<span className='bg-white p-1 rounded-sm'><ArrowDown color='black' /></span>}>
          <span>Scroll</span>
        </Button>
      </div>
    </Wrapper>
  )
}

export default HomepageHero
