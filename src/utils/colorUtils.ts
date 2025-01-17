// Utility function to adjust color lightness based on popularity
export const adjustColor = (baseColor: string, popularity: number): string => {
  const lightness = Math.round(3 + (popularity / 100) * 40);

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
  return hslColors[baseColor.toLowerCase()] || `hsl(0, 0%, ${lightness}%)`;
};

export const getOppositeColor = (hslColor: string): string => {
  // Extract H, S, L values from the HSL string using regex
  const hslRegex = /hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/;
  const match = hslColor.match(hslRegex);

  if (!match) {
    console.error('Invalid HSL color format:', hslColor);
    return 'black'; // Fallback to black if input is not a valid HSL
  }

  const h = Number(match[1]); // Extract and convert hue to number
  const s = Number(match[2]); // Extract and convert saturation to number
  const l = Number(match[3]); // Extract and convert lightness to number

  // Calculate the opposite hue (shift 180° on the color wheel)
  const oppositeHue = (h + 180) % 360;

  // Invert the lightness (opposite of light/dark)
  let oppositeLightness = 100 - l;

  // Apply attenuation to prevent extremely bright or dark text
  const attenuationFactor = 10; // Adjustable factor (higher = more attenuation)
  if (oppositeLightness > 90) {
    oppositeLightness = 90 - attenuationFactor; // Cap lightness
  } else if (oppositeLightness < 10) {
    oppositeLightness = 10 + attenuationFactor; // Raise darkness
  }

  // Return the calculated opposite color as an HSL string
  return `hsl(${oppositeHue}, ${s}%, ${oppositeLightness}%)`;
};
