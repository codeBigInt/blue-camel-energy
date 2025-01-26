"use client"
import React, { useState } from 'react'
import Wrapper from './Wrapper'
import VideoCard from './VideoCard'

const Press = () => {
    const [isPlaying, setIsplaying] = useState(false)
    const videoUrls = [
        {
            vidUrl: "https://youtu.be/cI9hTZAE9KU?si=RtyA4xyoZ2DOkB2t",
            embedUrl: "https://www.youtube.com/embed/cI9hTZAE9KU?si=RtyA4xyoZ2DOkB2t"
        },
        {
            vidUrl: "https://youtu.be/wW1qcWoD2Gg?si=28rk-3GdY23zD62A",
            embedUrl: "https://www.youtube.com/embed/wW1qcWoD2Gg?si=28rk-3GdY23zD62A"
        },
        {
            vidUrl: "https://youtu.be/H6q6pYZ9Fho?si=gp_zxMim1_WDeAwF",
            embedUrl: "https://www.youtube.com/embed/H6q6pYZ9Fho?si=gp_zxMim1_WDeAwF"
        },
        {
            vidUrl: "https://youtu.be/cI9hTZAE9KU?si=X5mfAUw1kfgVPa4K",
            embedUrl: "https://www.youtube.com/embed/cI9hTZAE9KU?si=X5mfAUw1kfgVPa4K"
        },
        {
            vidUrl: "https://youtu.be/H6q6pYZ9Fho?si=gp_zxMim1_WDeAwF",
            embedUrl: "https://www.youtube.com/embed/H6q6pYZ9Fho?si=gp_zxMim1_WDeAwF"
        },
        {
            vidUrl: "https://youtu.be/DIkCQ1NU1E0?si=EJV9kxatvhjBpKss",
            embedUrl: "https://www.youtube.com/embed/DIkCQ1NU1E0?si=EJV9kxatvhjBpKss"
        },
    ]
    return (
        <Wrapper className='bg-scheme text-white md:py-20 flex flex-col md:gap-6 gap-4 py-10'>
            <p className='uppercase text-[28px] space-x-4 font-semibold'>Press</p>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6'>
                {
                    videoUrls.map((videoUrl, index) => (
                        <VideoCard
                            key={index}
                            playState={isPlaying}
                            setPlayState={setIsplaying}
                            videoUrl={videoUrl.vidUrl}
                            embedUrl={videoUrl.embedUrl}
                        />
                    ))
                }
            </section>

        </Wrapper>
    )
}

export default Press