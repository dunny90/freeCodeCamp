/*
Extension Extractor
Given a string representing a filename, return the extension of the file.

The extension is the part of the filename that comes after the last period (.).
If the filename does not contain a period or ends with a period, return "none".
The extension should be returned as-is, preserving case.
*/

getExtension("document.txt")    // should return "txt".
getExtension("README")          // should return "none".
getExtension("image.PNG")       // should return "PNG".
getExtension(".gitignore")      // should return "gitignore".
getExtension("archive.tar.gz")  // should return "gz".
getExtension("final.draft.")    // should return "none".

function getExtension(filename) {

    let extension = "";

    // Find the last index of '.' so we can extract the extension
    let indexOfExtension = filename.lastIndexOf(".");

    // If a period was found, extract the extension
    if(indexOfExtension != -1) {
        extension = filename.substring(indexOfExtension+1);
    }

    // If the extension is empty then decode this to none
    if(extension == "") {
        extension = "none";
    }

    console.log(extension);

  return extension;
}