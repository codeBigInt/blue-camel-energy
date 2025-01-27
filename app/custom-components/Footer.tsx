import React from 'react'
import Wrapper from './Wrapper'
import { footerNavigation } from '@/lib/utils/navArray'
import Link from 'next/link'
import { socials } from '@/lib/utils/contactArray'

const Footer = () => {
  return (
    <Wrapper className='flex relative flex-col gap-6 py-10 bg-white text-black lg:pt-20'>
      <div className='grid grid-cols-3 grid-rows-4 gap-4'>
        {
          footerNavigation.map((navItem) => (
            <Link key={navItem.label} href={navItem.href} className="md:text-[20px] text-[16px] capitalize">{navItem.label}</Link>
          ))
        }
      </div>
      <div className='flex justify-between border-t border-gray-500 p-6'>
        <h3 className='md:text-[16px] text-xs'>Copyright © Blue Camel Enery 2025 </h3>
        <h3 className='md:flex hidden'>Terms of use</h3>
        <h3 className='md:flex hidden'>Privacy Policy</h3>
        <div className='flex items-center gap-4'>
          {
            socials.map((link) => (
              <Link href={link.href} className='text-[18px]' key={link.href}>{link.icon}</Link>
            ))
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
