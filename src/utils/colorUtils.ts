// Utility function to adjust color lightness based on popularity
export const adjustColor = (baseColor: string, popularity: number): string => {
    
    const lightness = 5 + (popularity / 100) * 20;
  
    // Map of human-readable color names to HSL values
    const hslColors: { [key: string]: string } = {
      red: `hsl(0, 100%, ${lightness}%)`,
      green: `hsl(120, 100%, ${lightness}%)`,
      blue: `hsl(240, 100%, ${lightness}%)`,
      yellow: `hsl(60, 100%, ${lightness}%)`,
      purple: `hsl(270, 100%, ${lightness}%)`,
      pink: `hsl(330, 100%, ${lightness}%)`,
      teal: `hsl(180, 100%, ${lightness}%)`,
      orange: `hsl(30, 100%, ${lightness}%)`,
      indigo: `hsl(260, 100%, ${lightness}%)`,
      gray: `hsl(0, 0%, ${lightness}%)`,
      lime: `hsl(75, 100%, ${lightness}%)`,
      cyan: `hsl(180, 100%, ${lightness}%)`,
      brown: `hsl(30, 50%, ${lightness}%)`,
      magenta: `hsl(300, 100%, ${lightness}%)`,
      gold: `hsl(50, 100%, ${lightness}%)`,
    };
  
    // Return the adjusted HSL color or default to gray
    return hslColors[baseColor] || `hsl(0, 0%, ${lightness}%)`;
  };
  