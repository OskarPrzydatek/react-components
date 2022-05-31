export default function useHexToRgb(hex) {
    const rgb = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (r, g, b) => `#${r}${r}${g}${g}${b}${b}`
    )
    .substring(1)
    .match(/.{2}/g)
    .map((color) => parseInt(color, 16));

  return [rgb[0], rgb[1], rgb[2]];
}
