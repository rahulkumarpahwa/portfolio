import React from 'react';

interface ImgCardProps {
    src: string;
    caption: string;
    link?: string;
}

const ImgCard: React.FC<ImgCardProps> = ({ src, caption }) => {
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="text-center">
                <img
                    src={src}
                    className="mt-0.5 max-w-full h-auto rounded-lg shadow-lg"
                />
                <p className="mt-1">
                    {caption}
                </p>
            </div>
        </section>
    );
};

export default ImgCard;