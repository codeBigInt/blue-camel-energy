"use client";
import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../Wrapper'
import bg from '@/public/images/solutions.png'
import Image from 'next/image';
import Button from '../Button';
import { ArrowDown } from 'lucide-react';

export interface Dot {
    x: number;
    y: number;
}

const CompanyDetailHeader = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [dots, setDots] = useState<Dot[]>([])
    useEffect(() => {
        const calculateDots = () => {
            if (!containerRef.current) return;

            const container = containerRef.current
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
        <div className='relative w-full flex pt-10 lg:min-h-[600px] min-h-full bg-blue-50' ref={containerRef}>
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="absolute w-1 h-1 hover:opacity-50 bg-blue-300 rounded-full"
                    style={{
                        left: `${dot.x}px`,
                        top: `${dot.y}px`,
                        transform: 'translatey(-50%, -50%)' // Center the dots
                    }}
                />
            ))}
            <Wrapper className='relative overflow-hidden w-full py-0 flex md:flex-row flex-col h-full z-10'>
                <div className='pt-8 flex-1 flex flex-col'>
                    <p className='lg:text-[80px] lg:mt-10 text-scheme md:text-[60px] font-light whitespace-normal break-words lg:gap-2 flex flex-col text-[50px]'><span>Switch to The</span><span>Future</span></p>
                    <div className='flex-1 max-w-[80%] md:flex hidden -mt-[20%]  min-h-[300px] scale-100'>
                        <Image src={bg} alt='image' className='object-fill translate-y-[10%] -translate-x-[15%] w-full h-full' width={300} height={300} />
                    </div>
                </div>
                <Button variant='borderless' alignIcon='right' className='h-max w-max self-end font-semibold'
                    icon={<span className='bg-scheme p-1 rounded-sm'><ArrowDown color='white' /></span>}>
                    <span className='text-scheme'>Scroll</span>
                </Button>
            </Wrapper>
        </div>
    )
}

export default CompanyDetailHeader