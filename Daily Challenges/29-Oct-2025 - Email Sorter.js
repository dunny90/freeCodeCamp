/*
Email Sorter
On October 29, 1971, the first email ever was sent, introducing the username@domain format we still use. Now, there are billions of email addresses.

In this challenge, you are given a list of email addresses and need to sort them alphabetically by domain name first (the part after the @), and username second (the part before the @).

Sorting should be case-insensitive.
If more than one email has the same domain, sort them by their username.
Return an array of the sorted addresses.
Returned addresses should retain their original case.
For example, given ["jill@mail.com", "john@example.com", "jane@example.com"], return ["jane@example.com", "john@example.com", "jill@mail.com"].
*/

sort(["jill@mail.com", "john@example.com", "jane@example.com"]) // should return ["jane@example.com", "john@example.com", "jill@mail.com"].
sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]) // should return ["bob@mail.com", "carol@mail.com", "alice@zoo.com"].
sort(["user@z.com", "user@y.com", "user@x.com"]) // should return ["user@x.com", "user@y.com", "user@z.com"].
sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]) // should return ["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"].
sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]) // should return ["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"].

function sort(emails) {

  // Use a bespoke array sort function
  emails.sort(sortFunction);
  
  return emails;
}

function sortFunction(a, b) {
  
  // Convert both elements being compared to lower case to make case insensitive
  a = a.toLowerCase();
  b = b.toLowerCase();
  
  // If the domain part is the same, then compare the username
  if(a.substring(a.indexOf("@") + 1, a.length) == b.substring(b.indexOf("@") + 1, b.length) ) {
    
    // If the username of 'a' is alphabetically before the username of 'b', return -1. Otherwise return 1
    if(a.substring(0, a.indexOf("@")) < b.substring(0, b.indexOf("@")) ) {
      return -1;
    } else {
      return 1;
    }
  } else {
    // Domains are not the same, so sort based on domain
    
    // If the domain of 'a' is alphabetically before the domain of 'b', return -1. Otherwise return 1
    if(a.substring(a.indexOf("@") + 1, a.length) < b.substring(b.indexOf("@") + 1, b.length) ) {
      return -1;
    } else {
      return 1;
    }
    
  } 
  
}
