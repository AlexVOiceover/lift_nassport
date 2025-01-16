import React from 'react'

interface TileProps {
    label: string,
    isSelected: boolean,
    onClick: () => void
}

const Tile: React.FC<TileProps> = ({ label, isSelected, onClick}) => {
    return (
        <div
            className={`p-4 border rounded-md text-center cursor-pointer ${
                isSelected ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={onClick}
        >
        {label}
      </div>
    )
}

export default Tile