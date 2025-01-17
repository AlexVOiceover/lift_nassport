import React, { useState } from 'react';
// import React, { useRef, useEffect } from "react";
import { VariableSizeGrid as Grid } from 'react-window';
import Tile from './Tile';

interface TilesGridProps {
  items: { name: string; popularity: number; color: string }[]; // List of objects
}

const TilesGrid: React.FC<TilesGridProps> = ({ items }) => {
  const [selectedTile, setSelectedTile] = useState<{
    name: string;
    popularity: number;
    color: string;
  } | null>(null);

  // const gridRef = useRef<Grid>(null); // Ref to access the grid instance

  // Configurations
  const columnCount = 4; // Number of columns in the grid
  const tileWidth = 120; // Width of the tile
  const tileHeight = 50; // Height of the tile
  const gap = 20; // Gap between tiles (both horizontally and vertically)
  const visibleGridWidth = 700; // Visible width of the grid
  const visibleGridHeight = 900; // Visible height of the grid

  const rowCount = Math.ceil(items.length / columnCount); // Total rows

  // Functions for column width and row height
  const getColumnWidth = () => tileWidth + gap; // Tile width + horizontal gap
  const getRowHeight = () => tileHeight + gap; // Tile height + vertical gap

  // Function to calculate the offset for odd rows
  const getOffsetForRow = (rowIndex: number) => {
    return rowIndex % 2 === 0 ? 0 : (tileWidth + gap) / 2; // Offset odd rows by half tile width + gap
  };

  // Center the grid content when the component mounts
  //  useEffect(() => {
  //   const grid = gridRef.current;
  //   if (grid) {
  //     const totalGridWidth = columnCount * getColumnWidth();
  //     const totalGridHeight = rowCount * getRowHeight();

  //     const scrollLeft = Math.max(0, (totalGridWidth - visibleGridWidth) / 2); // Center horizontally
  //     const scrollTop = Math.max(0, (totalGridHeight - visibleGridHeight) / 2); // Center vertically

  //     console.log("scrollLeft", scrollLeft);
  //     console.log("scrollTop", scrollTop);

  //     grid.scrollTo({ scrollLeft, scrollTop });
  //   }
  // }, [columnCount, rowCount]);

  const handleSelect = (item: {
    name: string;
    popularity: number;
    color: string;
  }) => {
    setSelectedTile(item);
  };

  return (
    <Grid
      columnCount={columnCount}
      rowCount={rowCount}
      columnWidth={getColumnWidth} // Includes horizontal gap
      rowHeight={getRowHeight} // Includes vertical gap
      height={visibleGridHeight} // Grid height (visible area)
      width={visibleGridWidth} // Grid width (visible area)
    >
      {({ columnIndex, rowIndex, style }) => {
        const index = rowIndex * columnCount + columnIndex;
        if (index >= items.length) return null; // Handle empty cells

        const item = items[index];
        const offset = getOffsetForRow(rowIndex);

        return (
          <div
            style={{
              ...style,
              left: parseFloat(style.left as string) + offset, // Add offset for odd rows
              width: tileWidth, // Define the tile width explicitly
              height: tileHeight, // Define the tile height explicitly
            }}
            key={item.name}
          >
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
