"use client";
import Image from 'next/image';
import React, { useEffect } from 'react'
import { FaYoutube } from 'react-icons/fa';
import VideoViewer from './VideoViewer';

interface VideoCardProps {
    videoUrl: string
    playState: boolean,
    setPlayState: (state: boolean) => void
    embedUrl: string
}

const VideoCard = ({ videoUrl, playState, setPlayState, embedUrl }: VideoCardProps) => {
    const [thumbnailUrl, setThumbnailUrl] = React.useState<string | null>(null)

    const extractVideoId = (youtubeUrl: string) => {
        const patterns = [
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)([a-zA-Z0-9_-]{11})/,
            /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/
        ];

        for (const pattern of patterns) {
            const match = youtubeUrl.match(pattern);
            if (match) return match[1];
        }
        return null;
    };

    useEffect(() => {
        const videoId = extractVideoId(videoUrl);
        if (videoId) {
            setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
        }
    }, [videoUrl])

    return (
        <>
            <div onClick={() => setPlayState(!playState)} className='w-full min-h-[300px] lg:max-h-[300px] max-sm:aspect-video relative rounded-lg'>
                {thumbnailUrl && <Image
                    src={thumbnailUrl as string}
                    alt={"Video Thumbnail"}
                    width={200}
                    height={200}
                    className='w-full h-full object-cover rounded-lg' />}
                <button className='text-[#e02d33] text-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><FaYoutube /></button>
            </div>
            {playState && <VideoViewer videUrl={embedUrl} playState={playState} setPlayState={setPlayState}  />}
        </>
    )
}

export default VideoCard
