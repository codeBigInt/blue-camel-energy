"use client";
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Button from './Button'
import Wrapper from './Wrapper'
import { navigation } from '@/lib/utils/navArray'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathName = usePathname()
  return (
    <Wrapper className="flex items-center sticky justify-between">
      <Logo />
      <ul className='md:flex hidden items-center gap-6 capitalize'>
        {navigation.map((item) => (
          <Link key={item.label} href={item.href} className={`py-2 px-3 hover:opacity-50 ${pathName === item.href ? "border-b-[3px] border-black" : ""}`}>{item.label}</Link>
        ))}
      </ul>
      <div className='flex gap-3'>
        <Button variant='main' className='bg-scheme text-white'>
          <span>Shop Now</span>
        </Button>
        <Sheet>
          <SheetTrigger className="lg:hidden flex">
            <div className='py-2 px-3 lg:hidden flex items-center gap-2 hover:bg-[#45355f]/20 border border-[#45355f] rounded-lg'>
              <Menu />
            </div>
          </SheetTrigger>
          <SheetContent className='pt-20 max-md:flex hidden flex-col overflow-y-auto items-start'>
            <SheetTitle className='text-left text-2xl pb-4'><Logo /></SheetTitle>
            {
              navigation.map((item, index) => (
                <SheetClose className='w-full justify-start flex text-start' key={index}>
                  <Link className={`text-[18px] capitalize py-4 border-b-[1px] w-full`} href={item.href}>{item.label}</Link>
                </SheetClose>
              ))
            }
          </SheetContent>
        </Sheet>
      </div>
    </Wrapper>
  )
}

export default Navbar
