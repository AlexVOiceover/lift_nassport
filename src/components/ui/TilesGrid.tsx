import React from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import Tile from './Tile';

interface TilesGridProps {
  items: {
    name: string;
    popularity: number;
    color: string;
    thirdPerson: string;
  }[]; // List of objects
  onClick: (selectedItem: { name: string; thirdPerson: string }) => void; // Callback function to notify parent of selected item
}

const TilesGrid: React.FC<TilesGridProps> = ({ items, onClick }) => {
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
              isSelected={false} // Check if the tile is selected
              onClick={() =>
                onClick({ name: item.name, thirdPerson: item.thirdPerson })
              } // Notify parent of selected item
            />
          </div>
        );
      }}
    </Grid>
  );
};

export default TilesGrid;
