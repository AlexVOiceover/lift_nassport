import React from "react";
import {adjustColor, getOppositeColor} from "../../utils/colorUtils";

interface TileProps {
  item: { name: string; popularity: number; color: string }; // Include popularity and color in item
  isSelected: boolean;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ item, isSelected, onClick }) => {
    // Adjust the color based on popularity
    const adjustedColor = adjustColor(item.color, item.popularity);
    const oppositeColor = getOppositeColor(adjustedColor);

  return (
    <div
    className={`p-2 rounded-xl text-center cursor-pointer transition ${
      isSelected ? "shadow-inner bg-white text-black" : ""
    }`}
    style={{
      backgroundColor: isSelected ? "white" : adjustedColor, // White background if selected, otherwise adjustedColor
      color: isSelected ? "black" : oppositeColor, // Black text if selected, otherwise oppositeColor
    }}
    onClick={onClick}
  >
    {item.name}
  </div>
  );
};

export default Tile;