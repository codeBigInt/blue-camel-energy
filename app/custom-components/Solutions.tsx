import { solutions } from '@/lib/utils/solutionsArray'
import React from 'react'
import Wrapper from './Wrapper'

const Solutions = () => {
    return (
        <Wrapper className='bg-scheme-gray pt-20'>
            <h5 className='uppercase text-gray-500 text-[20px]'>Solutions</h5>
            <div className='leading-normal lg:text-5xl text-3xl py-10'>
                <p>The #1 renewable</p>
                <p>energy company Nigeria</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    solutions.map((solution, index) => (
                        <div key={index} className={` pr-8 py-8 text-left ${index < solutions.length - 1 ? "lg:border-r border-r-gray-400" : ""}`}>
                            <h3 className='lg:text-xl py-2'>{solution.title}</h3>
                            <p>{solution.desc}</p>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default Solutions
