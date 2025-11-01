/*
On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:

You always start on the "Home" page, which will not be included in the commands array.
Valid commands are:
"Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" takes you to the "About" page. When you visit a new page, make sure to discard any forward history you have.
"Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
"Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.
For example, given ["Visit About Us", "Back", "Forward"], return "About Us".
*/

navigate(["Visit About Us", "Back", "Forward"]) // should return "About Us".
navigate(["Forward"]) // should return "Home".
navigate(["Back"]) // should return "Home".
navigate(["Visit About Us", "Visit Gallery"]) // should return "Gallery".
navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) // should return "Home".
navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) // should return "Contact".
navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) // should return "Visit Us".

function navigate(commands) {
  
  // Array to store the pages
  let pages = ["Home"];
  // Counter to keep track of what page we're on
  let currentPageCounter = 0;
  // Counter to keep track of how many valid back clicks
  let backCounter = 0;
  
  // Loop through the commands
  for(let i = 0; i < commands.length; i++) {
    
    // Extract the current command
    let currentCommand = commands[i];
    
    switch(currentCommand) {
        
      // If the current command is forward
      case "Forward":
        // If there has already been a 'back'
        if(backCounter > 0) {
          // Decrement the back counter
          backCounter--;
          // Increment the current page counter
          currentPageCounter++;
        }
        
        break;
      
      // If the current command is back
      case "Back":
        
        // If we're not already on the first page
        if(currentPageCounter > 0) {
          // Increment back counter
          backCounter++;
          // decrement the current page counter
          currentPageCounter--;  
        }
        
        break;
        
      default:

        // Must be a page command, so extract the page without the 'Visit ' prefix
        let page = currentCommand.substring(6, currentCommand.length);
        // Increment the current page counter
        currentPageCounter++;
        // Add the page to the pages array
        pages.push(page);

        break;

    }
    
  }


  return pages[currentPageCounter];
}
