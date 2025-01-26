"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

type ImageSrc = string;

interface LogoSliderProps {
  logos: ImageSrc[],
  direction: "left" | "right",
  delay?: 300;
}

interface StyleProps extends React.CSSProperties {
  '--content-width': string;
  '--animation-duration': string;
}

const LogoSlider = ({ logos }: LogoSliderProps) => {
  const [contentWidth, setContentWidth] = useState<number>(0);

  // Calculate animation duration based on content length
  const PIXELS_PER_SECOND = 50; // Adjust this value to change scroll speed

  useEffect(() => {
    // Get the width of a single set of items
    const measureContent = (): void => {
      const content: HTMLElement | null = document.querySelector('.slider-content');
      if (content) {
        setContentWidth(content.offsetWidth);
      }
    };

    measureContent();
    window.addEventListener('resize', measureContent);
    return () => window.removeEventListener('resize', measureContent);
  }, []);

  const duration = contentWidth / PIXELS_PER_SECOND;

  return (
    <div className={`flex animate-scroll`} style={{
      '--content-width': `${contentWidth}px`,
      '--animation-duration': `${duration}s`,
    } as StyleProps}>
      {/* Original list */}
      <ul className="flex gap-4 items-center slider-content">
        {logos?.map((slider, index) => (
          <Image key={index} width={120} height={80} src={slider} alt='slider' />
        ))}
      </ul>

      {/* Duplicate list for seamless loop */}
      <ul className="flex gap-4 items-center">
        {logos?.map((slider, index) => (
            <Image key={index} width={120} height={80} src={slider} alt='slider' />
        ))}
      </ul>


      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-1 * var(--content-width)));
          }
        }
        
        .animate-scroll {
          animation: scroll var(--animation-duration) linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default LogoSlider
