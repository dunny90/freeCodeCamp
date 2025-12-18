/*
Checkerboard
Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with "X" and "O" characters of the given size.

The characters should alternate like a checkerboard.
The top-left cell must always be "X".
For example, given [3, 3], return:

[
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"]
]

*/

createBoard([3, 3])     // should return [["X", "O", "X"], 
                        //                ["O", "X", "O"], 
                        //                ["X", "O", "X"]].
                        //
createBoard([6, 1])     // should return [["X"], 
                        //                ["O"], 
                        //                ["X"], 
                        //                ["O"], 
                        //                ["X"], 
                        //                ["O"]].
                        //
createBoard([2, 10])    // should return  [["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], 
                        //                 ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]].
                        //
createBoard([5, 4])     // should return [["X", "O", "X", "O"], 
                        //                ["O", "X", "O", "X"], 
                        //                ["X", "O", "X", "O"], 
                        //                ["O", "X", "O", "X"], 
                        //                ["X", "O", "X", "O"]].

function createBoard(dimensions) {

    // To store the result
    let board = [];
    let counter = 1;
    
    // Loop through the rows
    for(let rows = 1; rows <= dimensions[0]; rows++)    {
        
        let row = [];

        // Loop through the columns
        for(let columns = 1; columns <= dimensions[1]; columns++) {
            let value = "";

            // Use counter to alternate pattern
            if(counter == 1) {
                value = "X";
                counter++;
            } else {
                value = "O";
                counter--;
            }

            // Last column needs to consider the number of columns and the last character of the current row
            // If odd number of columns - pattern can continue
            // If even then pattern needs to reset to enable next row to be in correct pattern 
            if(columns == dimensions[1]) {
                // Determine if even number of columns and set counter accordingly
                if(columns % 2 == 0) {
                    if(value == "O"){
                        counter = 2;
                    } else {
                        counter = 1;
                    }
                }
            }

            // Add value to row
            row.push(value);
        }

        // Add row to board
        board.push(row);
    }

  return board;
}
