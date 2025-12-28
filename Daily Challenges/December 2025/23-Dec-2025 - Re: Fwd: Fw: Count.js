/*
Re: Fwd: Fw: Count
Given a string representing the subject line of an email, determine how many times the email has been forwarded or replied to.

For simplicity, consider an email forwarded or replied to if the string contains any of the following markers (case-insensitive):

"fw:"
"fwd:"
"re:"
Return the total number of occurrences of these markers.
*/

emailChainCount("Re: Meeting Notes")                // should return 1.
emailChainCount("Meeting Notes")                    // should return 0.
emailChainCount("Re: re: RE: rE: Meeting Notes")    // should return 4.
emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes")   // should return 5.
emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary")     // should return 23.

function emailChainCount(subject) {

    // To keep track of the number of occurences
    let occurrences = 0;

    // Convert to lower case
    subject = subject.toLowerCase();

    // Find occurences of each search string
    occurrences += findOccurences(subject, "fw:");
    occurrences += findOccurences(subject, "fwd:");
    occurrences += findOccurences(subject, "re:");

    console.log(occurrences);

  return occurrences;
}

function findOccurences(string, value) {

    // Start at position zero
    let startAt = 0;
    let occurrences = 0;

    while(true) {

        // Search for the value, starting at the next search position
        let index = string.indexOf(value, startAt);
        // Check if found
        if(index >= 0) {
            // Found, so increment occurences
            occurrences++;
            // set the next starting position
            startAt = index + 1;
        } else {
            // Not found so return number of occurences
            return occurrences;
        }

    }
}