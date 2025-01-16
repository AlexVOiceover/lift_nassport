import React from 'react'

interface TileProps {
    item: { name: string},
    isSelected: boolean,
    onClick: () => void
}

const Tile: React.FC<TileProps> = ({ item, isSelected, onClick}) => {
    return (
        <div
            className={`p-2 border rounded-sm text-center text-black cursor-pointer ${
                isSelected ? "bg-blue-500 text-white" : " bg-gray-200"
            }`}
            onClick={onClick}
        >
        {item.name}
      </div>
    )
}

export default Tile