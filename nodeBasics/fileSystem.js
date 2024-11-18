// The Node.js file system module allows you to work with the file system on your computer

/*  Covering:
    - read
    - create
    - update 
    - delete
    - rename
*/

const fs = require("fs");

fs.readFile(
  // file handle, encoding and callback function as parameters
  // callback function receives data if error is null
  "./nodeBasics/files/helloWorld.txt",
  "utf-8",
  (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  }
);

fs.writeFile(
  // creates file to directory
  // method replaces file content
  "./nodeBasics/files/createdFile.txt",
  "This file was created using writeFile method",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("File created");
    }
  }
);

fs.appendFile(
  // add text to end of specified file. If file does not exist, it is created
  // works also updating files
  "./nodeBasics/files/append.txt",
  "appended text",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Saved");
    }
  }
);

fs.open(
  // Open file for writing (flag W), write content to file, and close
  // Note, for example writeFile() will automaticly do opening, writing and closing
  "./nodeBasics/files/open.txt",
  "w",
  (error, file) => {
    if (error) {
      throw error;
    }
    console.log("File opened");

    fs.write(file, "added text content", (error) => {
      if (error) {
        throw error;
      }
      console.log("Text content added");

      fs.close(file, (error) => {
        if (error) throw error;
        console.log("File closed");
      });
    });
  }
);

fs.unlink(
  // deletes file
  "./nodeBasics/files/deleteThis.txt",
  (error) => {
    if (error) {
      throw error;
    } else {
      console.log("File deleted");
    }
  }
);

setTimeout(
  // create deleted deleteThis.txt again
  () => {
    fs.writeFile(
      "./nodeBasics/files/deleteThis.txt",
      "Delete this using unlink() method",
      (error) => {
        if (error) {
          throw error;
        } else {
          console.log("file created");
        }
      }
    );
  },
  3000
);

fs.rename(
  // rename files
  "./nodeBasics/files/rename.txt",
  "./nodeBasics/files/renamed.txt",
  (error) => {
    if (error) {
      throw error;
    } else {
      console.log("rename.txt -> renamed.txt");
    }
  }
);
