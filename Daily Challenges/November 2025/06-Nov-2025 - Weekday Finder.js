/*
Weekday Finder
Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Be sure to ignore time zones.
*/

getWeekday("2025-11-06") //should return Thursday.
getWeekday("1999-12-31") //should return Friday.
getWeekday("1111-11-11") //should return Saturday.
getWeekday("2112-12-21") //should return Wednesday.
getWeekday("2345-10-01") //should return Monday.

function getWeekday(dateString) {

  // Convert the date string to date
  let d = new Date(dateString + " 00:00:00");
  
  // Get the day of the date
  let day = d.getDay();
  
  // Convert the day to text description of day
  switch(day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  return day;
}
