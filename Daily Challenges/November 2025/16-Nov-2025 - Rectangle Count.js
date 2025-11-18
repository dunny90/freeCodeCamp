/*
Rectangle Count
Given two positive integers representing the width and height of a rectangle, determine how many rectangles can fit in the given one.

Only count rectangles with integer width and height.
For example, given 1 and 3, return 6. Three 1x1 rectangles, two 1x2 rectangles, and one 1x3 rectangle.
*/

countRectangles(1, 3)       // should return 6.
countRectangles(3, 2)       // should return 18.
countRectangles(1, 2)       // should return 3.
countRectangles(5, 4)       // should return 150.
countRectangles(11, 19)     // should return 12540.

function countRectangles(width, height) {

    let result = 0;

    // Use combinatorial formula
    // Work out how many boundaries there are, i.e. grid lines
    let horizontalLines = width + 1;
    let verticalLines = height + 1;

    // Work out the different ways both horizontal and vertical boundaries can be chosen
    let waysToChooseHorizontal = (horizontalLines * width) / 2;
    let waysToChooseVertical = (verticalLines * height) / 2;
    
    // The total number of rectangles is these two numbers multiplied
    result = waysToChooseHorizontal * waysToChooseVertical; 

    console.log(result);

    return result;

}