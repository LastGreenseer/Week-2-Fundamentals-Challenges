const rows = 5;
const cols = 5;

let grid = {};

function logGrid(grid) {
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < cols; j++) {
      row += grid[i][j] + " ";
    }
    console.log(row.trim());
  }
}
