import React from 'react';
import Image from 'next/image';

interface ImgCardProps {
    src: string;
    caption: string;
    link?: string;
}

const ImgCard: React.FC<ImgCardProps> = ({ src, caption }) => {
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="text-center">
                <Image
                    src={src}
                    alt={caption}
                    className="mt-0.5 max-w-full h-auto rounded-lg shadow-lg"
                    width={500} // Replace with appropriate width
                    height={300} // Replace with appropriate height
                />
                <p className="mt-1">
                    {caption}
                </p>
            </div>
        </section>
    );
};

export default ImgCard;