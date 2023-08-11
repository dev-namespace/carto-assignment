export function rgbToHex([r, g, b]: [number, number, number, number?]) {
    return (
        "#" +
        ((1 << 24) | (r << 16) | (g << 8) | b)
            .toString(16)
            .slice(1)
            .toUpperCase()
    );
}

export function hexToRgb(hex: string) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, "");

    // Parse r, g, b values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
}
