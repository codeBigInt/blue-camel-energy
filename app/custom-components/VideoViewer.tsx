import { X } from 'lucide-react';
import React from 'react'

interface VideoViewerProps {
    videUrl: string;
    playState: boolean
    setPlayState: (state: boolean) => void
}

const VideoViewer = ({ videUrl, playState, setPlayState }: VideoViewerProps) => {
    return (
        <div className='bg-black bg-opacity-20 flex items-center z-40 justify-center w-full min-h-screen fixed top-0 left-0'>
            <div className='flex flex-col items-center lg:w-[50%] w-[85%] lg:h-[500px] h-[400px] gap-4'>
                <button onClick={() => setPlayState(!playState)} className='self-end p-1 border-2 border-white rounded-lg'><X /></button>
                <div className='w-full h-full bg-slate-100 rounded-lg'>
                    <iframe className='w-full h-full object-cover rounded-lg border-2 border-gray-500'
                     width="560" height="315" src={videUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoViewer
