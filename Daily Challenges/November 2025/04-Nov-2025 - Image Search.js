/*
Image Search
On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.

Given an array of image names and a search term, return an array of image names containing the search term.

Ignore the case when matching the search terms.
Return the images in the same order they appear in the input array.
*/

imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog")         // should return ["dog.png"].
imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun") // should return ["Sunset.jpg", "sunflower.jpeg"].
imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG")         // should return ["Moon.png", "stars.png"].
imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat") // should return ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"].

function imageSearch(images, term) {
  
  // Regex search pattern
  // ^ - start of string
  // (.*? - first capturing group zero or more of any character
  // (${term}) - second capturing group containing the term at least once
  // .*?) - zeror or more of any character following the second capturing group
  // $ - end of string
  const pattern = `^(.*?(${term})+.*?)$`
  
  // Create new search term regular expression using 'i' flag to make case insensitive
  const searchTermRegex = new RegExp(pattern, 'i');
  // Create a filtered list by matching each item to the search regular expression
  const filteredList = images.filter(item => item.match(searchTermRegex));
  
  return filteredList;
}
