/*
Ball Trajectory
Today's challenge is inspired by the video game Pong, which was released November 29, 1972.

Given a matrix (array of arrays) that includes the location of the ball (2), and the previous location of the ball (1), return the matrix indices for the next location of the ball.

The ball always moves in a straight line.
The movement direction is determined by how the ball moved from 1 to 2.
The edges of the matrix are considered walls. If the balls hits a:
top or bottom wall, it bounces by reversing its vertical direction.
left or right wall, it bounces by reversing its horizontal direction.
corner, it bounces by reversing both directions.
*/

getNextLocation([   [0,0,0,0], 
                    [0,0,0,0], 
                    [0,1,2,0], 
                    [0,0,0,0]]) // should return [2, 3].

                    
getNextLocation([   [0,0,0,0], 
                    [0,0,1,0], 
                    [0,2,0,0], 
                    [0,0,0,0]]) // should return [3, 0].
                    

getNextLocation([   [0,2,0,0], 
                    [1,0,0,0], 
                    [0,0,0,0], 
                    [0,0,0,0]]) // should return [1, 2].

getNextLocation([   [0,0,0,0], 
                    [0,0,0,0], 
                    [2,0,0,0], 
                    [0,1,0,0]]) // should return [1, 1].

getNextLocation([   [0,0,0,0], 
                    [0,0,0,0], 
                    [0,0,1,0], 
                    [0,0,0,2]]) // should return [2, 2].

function getNextLocation(matrix) {

    let one = null;
    let two = null;
    let size = matrix.length;
    let nextPos = null;

    // Loop through the matrix until both 1 and 2 are found
    for(let i = 0; i < matrix.length; i++) {

        for(let j = 0; j < matrix[i].length; j++) {

            if(matrix[i][j] == 1) {
                one = [i, j];
            }

            if(matrix[i][j] == 2) {
                two = [i, j];
            }

            // Both found, so we can now work out the next position
            if(one != null && two != null) {
                break;
            }

        }
    }

    // Check if 2 is against a wall 
    if(two[0] == 0 || two[0] == size-1 || two[1] == 0 || two[1] == size-1) {

        if((two[0] == 0 || two[0] == size-1) && two[1] != size-1) {
            // On the top or bottom row and not next to a side wall
            // REBOUND

            if(one[1] < two[1]) {
                // REBOUND
                // 1 is to left of 2, so next position will be 1 position to the right of 2 on same row
                nextPos = [one[0],two[1] + 1];
            } else {
                // REBOUND
                // 1 is to right of 2, so next position will be 1 position to the left of 2 on same row
                nextPos = [one[0],two[1] - 1];
            }

        } else {

            if((two[1] == 0 || two[1] == size-1) && two[0] != size-1) {
                // On the left or right wall and not next to a top or bottom wall
                // REBOUND

                if(one[0] < two[0]) {
                    // REBOUND
                    // 1 is to left of 2, so next position will be 1 position to the right of 2 on same row
                    nextPos = [two[0] + 1,one[1]];
                } else {
                    // REBOUND
                    // 1 is to right of 2, so next position will be 1 position to the left of 2 on same row
                    nextPos = [two[0] - 1, one[1]];
                }
            } else {
                // 2 against a wall and 1 is offset i.e. i coordinates are different, meaning in a corner
                if(one[0] != two[0]) {
                    // Next position will be where 1 currently is
                    nextPos = one;
                }
            }

        }  


    } else {
        // The 2 isn't against a wall, so work out where the 1 is
        if(one[0] == two[0]) {

            // They are on the same row, so work out which is bigger

            if(one[1] < two[1]) {
                // The 1 is earlier in the row, so the next position will be after 2
                nextPos = [two[0], two[1] + 1];
            } else {
                // The 1 is later in the row, so the next position will be before 2
                nextPos = [two[0], two[1] - 1];
            }

        } else {
            // The 1 & 2 are on different rows - work out if they are in line or offset

            // One is on row above
            if(one[0] < two[0]) {

                if(one[1] < two[1]) {
                    // One is on row above and offset to left
                    nextPos = [two[0] + 1, two[1] + 1];

                } else {
                    // One is on row above and offset to the right
                    nextPos = [two[0] + 1, two[1] - 1];

                }

            } else {
                // One is on row below
                
                if(one[1] < two[1]) {
                    // One is on row below and offset to left
                    nextPos = [two[1] - 1, two[0] + 1];

                } else {
                    // One is on row below and offset to the right
                    nextPos = [two[0] - 1, two[0] - 1];

                }
            }

        }
    }

    console.log(nextPos);

  return nextPos;
}