import React from 'react'
import Wrapper from '../Wrapper'
import Image from 'next/image'

const CompanyService = () => {
    return (
        <Wrapper className='bg-yellow-500 lg:flex-row flex-col-reverse max-sm:gap-20 py-20 justify-between items-center text-scheme w-screen flex pt-10 lg:min-h-[650px] min-h-full overflow-hidden'>
            <div className='md:w-[40%] w-full flex flex-col md:gap-8 gap-4'>
                <p className='uppercase leading-3 text-[18px] font-semibold'>Our Approach</p>
                <p className='text-black'>
                    With this global outlook to renewable energy, in addition to our knowledge of the local terrain and the challenge of the industry, we are well positioned by our wealth of experience of effectively meet your renewable energy and power needs.
                </p>
                <p className='md:text-[26px] pt-10'>
                    We remain committed to providing innovative, cost effective, environmental friendly and reliable power and renewable energy solution to every Nigerian.
                </p>
            </div>
            <div className='relative md:w-[60%] w-full flex justify-end'>
                <Image className='w-[85%] translate-x-1/4 -translate-y-1/4' src={"/images/solarmen.webp"} alt='pipemen' width={300} height={300} />
                <Image className='w-[65%] absolute top-1/2 right-1/4' src={"/images/pipemen.webp"} alt='pipemen' width={300} height={300} />
            </div>
        </Wrapper>
    )
}

export default CompanyService
