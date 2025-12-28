/*
Snowflake Generator
Given a multi-line string that uses newline characters (\n) to represent a line break, return a new string where each line is mirrored horizontally and attached to the end of the original line.

Mirror a line by reversing all of its characters, including spaces.
For example, given "* \n *\n* ", which logs to the console as:

* 
 *
* 
Return "*  *\n ** \n*  *", which logs to the console as:

*  *
 ** 
*  *
Take careful note of the whitespaces in the given and returned strings. Be sure not to trim any of them.
*/

generateSnowflake("* \n *\n* ")                     // should return "*  *\n ** \n*  *".
generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  ")   // should return " X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X ".
generateSnowflake("*   *\n * * \n* * *\n * * \n*   *") // should return "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *".
generateSnowflake("*  -\n * -\n*  -")               // should return "*  --  *\n * -- * \n*  --  *".

function generateSnowflake(crystals) {

    // Split into array using new line character
    let arr = crystals.split("\n");

    // Loop through the lines
    for(let i = 0; i < arr.length; i++) {

        // Convert to array so that we can reverse the string
        let line = Array.from(arr[i]).reverse().join("");
        // Append reversed string onto array item, so that the line is mirrored
        arr[i]+= line;

    }

    console.log(arr);

    // Re-join the array using the new line characters
    crystals = arr.join("\n");

  return crystals;
}
