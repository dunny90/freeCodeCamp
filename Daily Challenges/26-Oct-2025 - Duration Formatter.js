/*
Duration Formatter
Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

Seconds: Should always be two digits.
Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
Hours: Should be included only if they're greater than zero.
*/

format(500)     // should return "8:20".
format(4000)    // should return "1:06:40".
format(1)       // should return "0:01".
format(5555)    // should return "1:32:35".
format(99999)   // should return "27:46:39".

function format(seconds) {
  
  let hours = 0;
  let formattedTime = "";
  let minuteZeroPadding = 1;    // Default to 1 and override if hours are pesent
  let minutes = seconds / 60;
  
  // If there are more than 60 minutes, work out the hours
  if(minutes > 60) {
    hours = minutes / 60;
  }
  
  // If hours are present
  if(hours != 0) {
    
    // Add hours to the formatted time string
    formattedTime = Math.floor(hours, 0) + ":";
    
    // Extract the minutes as a decimal by subtracting the number of whole hours
    minutes = hours - Math.floor(hours, 0);
    // Work out the number of minutes by multiplying the decimal by 60
    minutes = minutes * 60;
    
    // Minutes are padded to a length of 2 when hours are present
    minuteZeroPadding = 2;
  }

  
  // Add this to the formatted time string
  formattedTime += Math.floor(minutes, 0).toFixed(0).padStart(minuteZeroPadding, "0") + ":";

  // Now work out the seconds by extraxing the decimal part of the minutes
  seconds = minutes - Math.floor(minutes, 0);
  
  // Multiply the decimal part by 60 to work out the number of seconds
  seconds = seconds * 60;
  
  // Round the number of seconds to nearest whole second
  seconds = Math.round(seconds);

  // Add this to the formatted time string
  formattedTime += seconds.toFixed(0).padStart(2, "0");

  return formattedTime;
}
