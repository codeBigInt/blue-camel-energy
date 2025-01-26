import React from 'react'
import Wrapper from './Wrapper'
import bg from "../../public/images/contact.png"
import ContactForm from './ContactForm'

const Contact = () => {
    const bgProps = {
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bg.src})`
    }
    return (
        <div className='lg:min-h-[700px] relative w-full z-40' style={bgProps}>
            <div className='bg-black lg:px-20 px-4 md:py-20 py-10 grid md:grid-cols-2 grid-col-1 bg-opacity-30 w-full h-full'>
                <div className='flex flex-col text-white gap4'>
                    <h2 className='text-[70px]'>Take control <br /> of your energy</h2>
                    <h3 className="text-4xl font-bold text-[#FFCC29]">Bid Farewell to blackouts</h3>
                </div>
                <div className='w-full flex justify-end'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact
