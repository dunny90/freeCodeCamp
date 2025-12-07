/*
Date Formatter
Given a date in the format "Month day, year", return the date in the format "YYYY-MM-DD".

The given month will be the full English month name. For example: "January", "February", etc.
In the return value, pad the month and day with leading zeros if necessary to ensure two digits.
For example, given "December 6, 2025", return "2025-12-06".
*/

formatDate("December 6, 2025")      // should return "2025-12-06".
formatDate("January 1, 2000")       // should return "2000-01-01".
formatDate("November 11, 1111")     // should return "1111-11-11".
formatDate("September 7, 512")      // should return "512-09-07".
formatDate("May 4, 1950")           // should return "1950-05-04".
formatDate("February 29, 1992")     // should return "1992-02-29".

function formatDate(dateString) {

    // Convert to date
    let d = new Date(dateString);

    // Extract the day and pad with 0
    let day = d.getDate().toString().padStart(2, "0");
    // Get the month and add 1 to bring between 1 & 12
    let month = d.getMonth();
    month += 1;
    // Pad the month with 0
    month = month.toString().padStart(2, "0");
    // Get the year
    let year = d.getFullYear();
    // Construct the result
    let result = year + "-" + month + "-" + day;

    console.log(result);

  return result;
}
