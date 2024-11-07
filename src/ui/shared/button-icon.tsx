
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
            className={`px-3 py-2 bg-primary whitespace-nowrap rounded-lg text-white text-center ${containerStyle} `}
        >
            {title}
        </button>
    )
}
