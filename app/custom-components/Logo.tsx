import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='w-max h-max'>
            <Image src={"/images/logo.svg"} alt='logo' width={150} height={80} />
        </div>
    )
}

export default Logo
