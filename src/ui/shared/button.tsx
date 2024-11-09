'use client'
import React from 'react'

type Props = {
    title: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    containerStyle?: string;
}

export default function Button({ handleClick, title, containerStyle }: Props) {
    return (
        <button
            onClick={handleClick}
            type="button"
            className={`px-3 whitespace-nowrap text-center ${containerStyle} `}
        >
            {title}
        </button>
    )
}
