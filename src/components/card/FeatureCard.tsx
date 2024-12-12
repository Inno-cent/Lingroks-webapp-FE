import React from 'react'
import Image from 'next/image'

interface FeatureCardProps {
    imgSrc: string,
    alt: string,
    title: string,
    subtitle: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({imgSrc, alt, title, subtitle}) => {
    return(
        <div className='relative max-w-[300px] min-h-[300px] cursor-pointer overflow-hidden'>
            <Image
                alt={alt}
                src={imgSrc}
                width={100}
                height={100}
                className='w-full h-full object-cover block rounded-2xl'
                unoptimized={true}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl"></div>
            <div className="absolute bottom-0 left-0 p-4 z-10">
                <h2 className='text-white text-base'>
                    {title}
                </h2>
                <p className='text-white text-[14px]'>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default FeatureCard