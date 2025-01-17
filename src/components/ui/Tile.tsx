import React from 'react'

interface TileProps {
    item: { name: string, popularity: number, color: string },
    isSelected: boolean,
    onClick: () => void
}

const Tile: React.FC<TileProps> = ({ item, isSelected, onClick}) => {
  // Calculate the greyscale value based on popularity
  const greyValue = 255 - Math.round((item.popularity / 100) * 200); // Scale between dark grey and light grey
  const backgroundColor = `rgb(${greyValue}, ${greyValue}, ${greyValue})`; // Create greyscale background

    return (
        <div
            className={`p-2 border rounded-xl text-center text-black cursor-pointer ${
                isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
            style={{ backgroundColor: item.color  }} // Apply the calculated background color
            onClick={onClick}
        >
        {item.name}
      </div>
    )
}

export default Tile