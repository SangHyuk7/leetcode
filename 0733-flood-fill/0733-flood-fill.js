/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

//깊이우선 탐색  
const floodFill = function(image, sr, sc, newColor) {
    const color = image[sr][sc];
    const dfs = (image, r, c, color, newColor) => {
        if (image[r][c] === color) {
            image[r][c] = newColor;
            if (r >= 1) {
                dfs(image, r-1, c, color, newColor);
            }
            if (c >= 1) {
                dfs(image, r, c-1, color, newColor);
            }
            if (r+1 < image.length) {
                dfs(image, r+1, c, color, newColor);
            }
            if (c+1 < image[0].length) {
                dfs(image, r, c+1, color, newColor);
            }
        }
    }
    if (newColor !== color) {
        dfs(image, sr, sc, color, newColor);
        return image;
    } else {
        return image;
    }
};