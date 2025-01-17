import React from "react";
import {adjustColor} from "../../utils/colorUtils";

interface TileProps {
  item: { name: string; popularity: number; color: string }; // Include popularity and color in item
  isSelected: boolean;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ item, isSelected, onClick }) => {
    // Adjust the color based on popularity
    const adjustedColor = adjustColor(item.color, item.popularity);

  return (
    <div
      className={`p-2 border rounded-xl text-center cursor-pointer ${
        isSelected ? "ring-2 ring-blue-500" : ""
      }`}
      style={{
        backgroundColor: adjustedColor, // Use adjusted color
      }}
      onClick={onClick}
    >
      {item.name}
    </div>
  );
};

export default Tile;