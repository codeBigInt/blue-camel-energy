import React from 'react'
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
        <div className='lg:min-h-[700px] relative w-full' style={bgProps}>
            <div className='bg-black lg:px-20 px-4 md:py-20 py-10 grid md:grid-cols-2 grid-col-1 bg-opacity-30 w-full h-full'>
                <div className='flex flex-col text-white gap4'>
                    <h2 className='lg:text-[70px] text-[40px]'>Take control <br /> of your energy</h2>
                    <h3 className="lg:text-4xl text-2xl font-bold text-[#FFCC29]">Bid Farewell to blackouts</h3>
                </div>
                <div className='w-full flex justify-end mt-10 lg:mt-0'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact
