import React from 'react'
import Wrapper from './Wrapper'
import { Mail } from "lucide-react"
import { socials } from '@/lib/utils/contactArray'

const ContactHeader = () => {
   
    return (
        <Wrapper className='bg-scheme-gray flex justify-between'>
            <div className='flex gap-2 items-center'>
                <Mail size={18} />
                <span>info@bluecamel.us</span>
            </div>
            <div className='flex items-center gap-4'>
                {
                    socials.map((link) => (
                        <span className='text-[18px]' key={link.href}>{link.icon}</span>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default ContactHeader
