"use client";
import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../Wrapper'
import { Dot } from './CompanyDetailHeader'
import bg from "../../../public/images/workers.webp"
import Button from '../Button'

const CareerComp = () => {
    const workersRef = useRef<HTMLDivElement | null>(null)
    const [dots, setDots] = useState<Dot[]>([])
    const bgProps = {
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    }

    useEffect(() => {
        const calculateDots = () => {
            if (!workersRef.current) return;

            const container = workersRef.current
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
        <div className='flex-col justify-between relative items-center bg-blue-50 w-full relative flex lg:min-h-[650px] min-h-full'>
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="absolute w-1 h-1 hover:opacity-50 rounded-full"
                    style={{
                        left: `${dot.x}px`,
                        top: `${dot.y}px`,
                        transform: 'translatey(-50%, -50%)' // Center the dots
                    }}
                />
            ))}
            <div className='w-full relative min-h-[380px]' style={bgProps}></div>
            <div className='relative w-full flex-col'>
                <Wrapper className='relative w-full flex min-h-full'>
                    <div className='flex-1 flex h-full flex-col py-10 gap-8'>
                        <span className='md:text-[70px] text-[40px] flex text-scheme leading-tight flex-col'>
                            <span>The brightest career</span>
                            <span>move you will make</span>
                        </span>
                        <p className='md:text-[22px] texxt-[18px]'>Join us to create a clean energy for you all</p>
                        <div className='w-full flex md:flex-row flex-col max-sm:gap-6 justify-between pt-8'>
                            <Button className='bg-scheme text-white' variant='main'>View Open Roles</Button>
                            <Button className='bg-[#2e98f5] text-white' variant='main'>Join Our Talent Community</Button>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    )
}

export default CareerComp
