/*24 to 12
Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".
*/

to12("1124") // should return "11:24 AM".
to12("0900") // should return "9:00 AM".
to12("1455") // should return "2:55 PM".
to12("2346") // should return "11:46 PM".
to12("0030") // should return "12:30 AM".

function to12(time) {
  
  // Get the hours by taking the first two characters
  let hours = time.substring(0, 2);
  
  // Strip off any leading zeros
  hours = Number(hours);
  
  // Default to AM
  let AM_PM = "AM";
  
  // Convert to 12 hour
  if(hours > 12) {
    hours = hours - 12;
    AM_PM = "PM";
  } else if (hours == 0) {
    hours = 12;
  }
  
  // Get the minutes by taking the last two characters
  let minutes = time.substring(2, 4);
  
  // Reconstruct time in the desired format
  time = hours + ":" + minutes + " " + AM_PM;
  
  return time;
}
