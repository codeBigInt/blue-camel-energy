import React from 'react'
import Wrapper from './Wrapper'
import LogoSlider from './LogoSlider'
import { logos } from '@/lib/utils/logoArray'

const Client = () => {
    return (
        <>
            <div className='flex justify-center items-center lg:px-20 px-8 py-10 text-xl bg-scheme text-white'>
                Prestigious OEM and International partners
            </div>
            <Wrapper>
                <div className='flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'>
                    <LogoSlider logos={logos} direction='left' />
                </div>
            </Wrapper>
        </>
    )
}

export default Client
