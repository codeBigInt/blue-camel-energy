import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Button from './Button'
import Wrapper from './Wrapper'
import { navigation } from '@/lib/utils/navArray'

const Navbar = () => {
    

  return (
    <Wrapper className="flex items-center sticky justify-between">
      <Logo />
      <ul className='md:flex hidden items-center gap-6 capitalize'>
        {navigation.map((item) => (
            <Link key={item.label} href={item.href} className='py-2 hover:border-b-[3px] hover:border-black'>{item.label}</Link>
        ))}
      </ul>
      <div>
        <Button variant='main' className='bg-scheme text-white'>
            <span>Shop Now</span>
        </Button>
      </div>
    </Wrapper>
  )
}

export default Navbar
