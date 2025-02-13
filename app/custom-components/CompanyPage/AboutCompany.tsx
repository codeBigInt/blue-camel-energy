"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Dot } from './CompanyDetailHeader'
import Button from '../Button'
import Wrapper from '../Wrapper'
import Image from 'next/image'

const AboutCompany = () => {
    const aboutRef = useRef<HTMLDivElement | null>(null)
    const [dots, setDots] = useState<Dot[]>([])

    useEffect(() => {
        const calculateDots = () => {
            if (!aboutRef.current) return;

            const container = aboutRef.current
            const containerWidth = container.clientWidth
            const containerHeight = container.clientHeight

            const spacing = 50
            const columns = Math.floor(containerWidth / spacing)
            const rows = Math.floor(containerHeight / spacing)

            const newDots: Dot[] = []

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < columns; col++) {
                    newDots.push({
                        x: col * spacing + spacing / 2,
                        y: row * spacing + spacing / 2
                    })
                }
            }

            setDots(newDots)
        }

        calculateDots()

        const handleResize = () => {
            calculateDots() // Call the function directly, not returning it
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])


    return (
        <div className='relative w-full flex lg:min-h-[600px] min-h-full bg-blue-50' ref={aboutRef}>
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="absolute w-1 h-1 hover:opacity-50 bg-blue-300 rounded-full"
                    style={{
                        left: `${dot.x}px`,
                        top: `${dot.y}px`,
                        transform: 'translate(-50%, -50%)' // Center the dots
                    }}
                />
            ))}
            <Wrapper className='w-full relative max-sm:gap-10 flex md:flex-row flex-col justify-between h-full mt-20 z-10'>
                <div className='md:w-[55%] w-full flex flex-col gap-6 justify-center'>
                    <p className='uppercase leading-3 font-semibold'>About us</p>
                    <p>Blue Camel Energy stands as a leading entity in the space of renewable energy and power backup solutions within Nigeria. As an indigenous Limited Liability Company, we boast an extensive decade-long tenure dedicated in the space of renewable energy business, capacity building, and the sales and distribution of solar PV components. Furthermore, our Solar Assembly Plant and Renewable Energy Training Academy is located in Kaduna State, further solidifying our commitment to excellence in the industry.
                    </p>
                    <p>
                    Our corporate headquarters, commercial office, and warehouse are situated in Abuja. Additionally, we maintain strategic business hubs in Jos, Plateau State (North-East), Lagos State (South-West), as well as established presences in Gombe State and Adamawa State.
                    </p>
                </div>
                <div className='md:w-[40%] w-full md:flex hidden justify-center items-center'>
                    <div className='bg-[#2e98f5] md:w-[60%] w-full text-center lg:px-6 px-4 py-20 text-white text-[20px] lg:text-[30px] '>
                        Developing sustainable power solution for people with little or no access to power supply
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default AboutCompany
