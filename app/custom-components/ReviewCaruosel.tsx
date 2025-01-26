"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card'
import { reviewers } from '@/lib/utils/reviewArray'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"

const ReviewCaruosel = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true })
    )
    return (
        <Carousel
            className="w-full max-w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {reviewers.map((reviewer, index) => (
                    <CarouselItem className='lg:w-[30%] w-full  lg:max-w-[30%] ma min-h-[200px]' key={index}>
                        <div className="p-1">
                            {/* left and rightabsolutely positioned borders */}
                            <Card className='w-full rounded-none partial-borders shadow-none border-x-0 border-y-[1px] border-y-gray-400 bg-transparent'>
                                <CardContent className="flex flex-col gap-4 p-6 min-h-[300px]">
                                    <div className='flex items-center gap-4'>
                                        <div className='w-[60px] h-[60px] rounded-sm overflow-hidden'>
                                            <Image className='object-cover w-full h-full' src={reviewer.image} alt={reviewer.image} width={60} height={60} />
                                        </div>
                                        <div>
                                            <p>{reviewer.name}</p>
                                            <p className='text-xs text-gray-500'>{reviewer.title}</p>
                                            <p className='text-xs text-gray-500'>{reviewer.company}</p>
                                        </div>
                                    </div>
                                    <p className='pt-4'>{reviewer.review}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default ReviewCaruosel
