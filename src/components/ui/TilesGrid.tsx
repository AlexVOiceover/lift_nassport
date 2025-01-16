import React, { useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import Tile from "./Tile";

interface TilesGridProps {
  items: { name: string }[]; // List of objects with a `name` property
}

const TilesGrid: React.FC<TilesGridProps> = ({ items }) => {
  const [selectedTile, setSelectedTile] = useState<{ name: string } | null>(null);

  const handleSelect = (item: { name: string }) => {
    setSelectedTile(item);
  };

  const columnCount = 4; // Number of columns in the grid
  const rowCount = Math.ceil(items.length / columnCount);

  return (
    <Grid
      columnCount={columnCount}
      rowCount={rowCount}
      columnWidth={150}
      rowHeight={50}
      height={300} // Grid height (visible area)
      width={600} // Grid width (visible area)
    >
      {({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * columnCount + columnIndex;
        if (index >= items.length) return null; // Handle empty cells

        const item = items[index];
        return (
          <div style={style} key={item.name}>
            <Tile
              item={item} // Pass the whole object
              isSelected={item === selectedTile} // Check if the tile is selected
              onClick={() => handleSelect(item)} // Pass the object to handleSelect
            />
          </div>
        );
      }}
    </Grid>
  );
};

export default TilesGrid;
