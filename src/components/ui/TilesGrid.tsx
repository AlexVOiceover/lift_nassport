import React, { useState } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import Tile from './Tile';

interface TilesGridProps {
  items: {
    name: string;
    popularity: number;
    color: string;
    thirdPerson: string;
  }[]; // List of objects
  onAccept: (selectedItem: { name: string; thirdPerson: string }) => void; // Callback function to notify parent when the user accepts
  onCancel: () => void; // Callback function for cancel action
}

const TilesGrid: React.FC<TilesGridProps> = ({ items, onAccept, onCancel }) => {
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    thirdPerson: string;
  } | null>(null);

  // Configurations
  const columnCount = 4; // Number of columns in the grid
  const tileWidth = 120; // Width of the tile
  const tileHeight = 50; // Height of the tile
  const gap = 20; // Gap between tiles (both horizontally and vertically)
  //   const visibleGridWidth = 700; // Visible width of the grid
  //   const visibleGridWidth = 600; // Visible width of the grid
  //   const visibleGridHeight = 900; // Visible height of the grid

  const rowCount = Math.ceil(items.length / columnCount); // Total rows

  // Calculate visible grid dimensions
  const totalColumns = columnCount; // Total number of columns
  const totalRows = rowCount; // Total number of rows

  const visibleGridWidth = totalColumns * (tileWidth + gap) + 3 * gap; // Total width, removing the last gap
  const visibleGridHeight = totalRows * (tileHeight + gap) + gap + 150; // Total height, removing the last gap

  // Functions for column width and row height
  const getColumnWidth = () => tileWidth + gap; // Tile width + horizontal gap
  const getRowHeight = () => tileHeight + gap; // Tile height + vertical gap

  // Function to calculate the offset for odd rows
  const getOffsetForRow = (rowIndex: number) => {
    return rowIndex % 2 === 0 ? 0 : (tileWidth + gap) / 2; // Offset odd rows by half tile width + gap
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex  h-full w-full items-center justify-center'>
        <Grid
          columnCount={columnCount}
          rowCount={rowCount}
          columnWidth={getColumnWidth} // Includes horizontal gap
          rowHeight={getRowHeight} // Includes vertical gap
          height={visibleGridHeight - 100} // Adjust height for buttons
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
                  isSelected={selectedItem?.name === item.name} // Highlight selected tile
                  onClick={() =>
                    setSelectedItem({
                      name: item.name,
                      thirdPerson: item.thirdPerson,
                    })
                  } // Set the selected item
                />
              </div>
            );
          }}
        </Grid>
      </div>

      {/* Buttons for Accept and Cancel */}
      <div className='flex justify-start space-x-4 p-4'>
        <button
          onClick={() => selectedItem && onAccept(selectedItem)}
          className={`px-4 py-2 rounded-lg ${
            selectedItem
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!selectedItem}
        >
          Accept
        </button>
        <button
          onClick={onCancel}
          className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TilesGrid;
