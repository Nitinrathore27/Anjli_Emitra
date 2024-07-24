import React from 'react';

interface DisplayCardProps {
    title: string;
    value: number | string;
    description: string;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ title, value, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-64 h-40 flex flex-col items-center justify-center">
            <div className="text-lg mb-2">{title}</div>
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className="text-sm">{description}</div>
        </div>
    );
};

export default DisplayCard;
