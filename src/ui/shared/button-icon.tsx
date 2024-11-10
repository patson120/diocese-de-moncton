'use client'
import React from 'react'

type Props = {
    title: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    containerStyle?: string;
}

export default function ButtonIcon({ handleClick, title, containerStyle }: Props) {
    return (
        <button
            onClick={handleClick}
            type="button"
            className={`whitespace-nowrap rounded-lg  text-center ${containerStyle} `}
        >
            {title}
        </button>
    )
}
