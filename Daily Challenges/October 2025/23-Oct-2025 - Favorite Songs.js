/*
Favorite Songs
Remember iPods? The first model came out 24 years ago today, on Oct. 23, 2001.

Given an array of song objects representing your iPod playlist, return an array with the titles of the two most played songs, with the most played song first.

Each object will have a "title" property (string), and a "plays" property (integer).
*/

favoriteSongs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]) // should return ["Sync or Swim", "Earbud Blues"].
favoriteSongs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ]) // should return ["Clickwheel Love", "99 Downloads"].
favoriteSongs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ]) // should return ["Song B", "Song C"].

function favoriteSongs(playlist) {
  
  // Sort the array using the custom arraySorter function
  playlist.sort(arraySorter);
  
  // Array to store the top two songs based on play count
  let topTwoSongs = [];
  
  // Now the array is sorted in reverse order, just pick off the first two elements
  topTwoSongs.push(playlist[0].title);
  topTwoSongs.push(playlist[1].title);

  return topTwoSongs;
}


// Function to sort in reverse order (high to low) based on play count
function arraySorter(a, b) {
  
  // If the current element has more plays than the next element, return -1 indicating it should come first
  if(a.plays > b.plays) {
    return -1;
  }
  // If the current element has less plays than the next element, return 1 indicating it should come second
  if(a.plays < b.plays) {
    return 1;
  }
  // Otherwise return 0
  return 0;
  
}
