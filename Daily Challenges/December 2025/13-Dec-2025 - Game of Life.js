/*
Game of Life
Given a matrix (array of arrays) representing the current state in Conway's Game of Life, return the next state of the matrix using these rules:

Each cell is either 1 (alive) or 0 (dead).
A cell's neighbors are the up to eight surrounding cells (vertically, horizontally, and diagonally).
Cells on the edges have fewer than eight neighbors.
Rules for updating each cell:

Any live cell with fewer than two live neighbors dies (underpopulation).
Any live cell with two or three live neighbors lives on.
Any live cell with more than three live neighbors dies (overpopulation).
Any dead cell with exactly three live neighbors becomes alive (reproduction).
For example, given:

[
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 0]
]
return:

[
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]
Each cell updates according to the number of live neighbors. For instance, [0][0] stays dead (2 live neighbors), [0][1] stays alive (2 live neighbors), [0][2] dies (3 live neighbors), and so on.
*/

gameOfLife([[0, 1, 0], 
            [0, 1, 1], 
            [1, 1, 0]])         // should return [[0, 1, 1], [0, 0, 1], [1, 1, 1]].

            
gameOfLife([[1, 1, 0, 0], 
            [1, 0, 1, 0], 
            [0, 1, 1, 1], 
            [0, 0, 1, 0]])      // should return [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]].

gameOfLife([[1, 0, 0], 
            [0, 1, 0], 
            [0, 0, 1]])         // should return [[0, 0, 0], [0, 1, 0], [0, 0, 0]].

gameOfLife([[0, 1, 1, 0], 
            [1, 1, 0, 1], 
            [0, 1, 1, 0], 
            [0, 0, 1, 0]])      // should return [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]].

function gameOfLife(grid) {

    // To store the resultant next state
    let nextState = [];

    // Loop through each cell in the grid
    for(let i = 0 ; i < grid.length; i++) {

        // To store the new row
        let row = [];

        for(let j = 0; j < grid[i].length; j++) {

            // Work out how many neighbours this cell has
            let neighbours = getLiveNeighbours([i, j], grid);

            // Check if currently dead or alive
            if(grid[i][j] == 0) {
                // Dead & exactly 3 neighbours
                if(neighbours == 3) {
                    row.push(1);    // Changes to alive
                } else {
                    row.push(0);    // Remains dead
                }
            } else {
                // Alive
                if(neighbours < 2){
                    row.push(0);    // Alive & less than 2 - Dead
                } else if(neighbours > 3) {
                    row.push(0);    // Alive & more than 3 - Dead
                } else {
                    row.push(1);    // Alive & 2/3 - Alive
                }

            }

        }

        // Push the row to the next state array
        nextState.push(row);
    }

  return nextState;
}

function getLiveNeighbours(cell, arr) {

    // Extract x & y cell position
    let x = cell[0];
    let y = cell[1];
    // To store resultant neighbour count
    let neighbourCount = 0;


    // Check if cell against wall
    if(x == 0) {
        
        // Only search up

        if(y == 0) {
            // Only search right
            neighbourCount += arr[x + 1][y];
            neighbourCount += arr[x + 1][y+1];
            neighbourCount += arr[x ][y+1];

        } else if (y == arr.length-1) {
            // Only search left
            neighbourCount += arr[x + 1][y];
            neighbourCount += arr[x + 1][y-1];
            neighbourCount += arr[x ][y-1];
        } else {
            // Search left & right
            neighbourCount += arr[x + 1][y];
            neighbourCount += arr[x + 1][y-1];
            neighbourCount += arr[x + 1][y+1];
            neighbourCount += arr[x][y-1];
            neighbourCount += arr[x][y+1];
        }
        
    } else if(x == arr.length-1) {

        // Only search down

        if(y == 0) {
            // Only search right
            neighbourCount += arr[x -1][y];
            neighbourCount += arr[x -1][y+1];
            neighbourCount += arr[x][y+1];

        } else if (y == arr.length-1) {
            // Only search left
            neighbourCount += arr[x - 1][y];
            neighbourCount += arr[x - 1][y-1];
            neighbourCount += arr[x][y-1];

        } else {
            // Search left & right
            neighbourCount += arr[x - 1][y];
            neighbourCount += arr[x - 1][y-1];
            neighbourCount += arr[x - 1][y+1];
            neighbourCount += arr[x][y-1];
            neighbourCount += arr[x][y+1];
        }

    } else {

        // Search up & down

        if(y == 0) {
            // Only search right
            neighbourCount += arr[x -1][y];
            neighbourCount += arr[x -1][y+1];
            neighbourCount += arr[x][y+1];
            neighbourCount += arr[x+1][y+1];
            neighbourCount += arr[x +1][y];

        } else if (y == arr.length-1) {
            // Only search left
            neighbourCount += arr[x -1][y];
            neighbourCount += arr[x -1][y-1];
            neighbourCount += arr[x][y-1];
            neighbourCount += arr[x+1][y-1];
            neighbourCount += arr[x +1][y];

        } else {
            // Search left & right
            neighbourCount += arr[x - 1][y];
            neighbourCount += arr[x - 1][y-1];
            neighbourCount += arr[x - 1][y+1];
            neighbourCount += arr[x][y-1];
            neighbourCount += arr[x][y+1];
            neighbourCount += arr[x + 1][y];
            neighbourCount += arr[x + 1][y-1];
            neighbourCount += arr[x + 1][y+1];
        }

    }

    return neighbourCount;

}