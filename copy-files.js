const fs = require("fs");
const path = require("path");

// Define the source and destination paths
const filesToCopy = ["normall.css", "quickstart.html"];
const destinationPath = path.resolve(process.cwd());

filesToCopy.forEach((file) => {
  const sourcePath = path.join(__dirname, file);
  const destinationFilePath = path.join(destinationPath, file);

  // Copy the file to the project's root directory
  fs.copyFile(sourcePath, destinationFilePath, (err) => {
    if (err) {
      console.error(`Error copying ${file}:`, err);
    } else {
      console.log(`${file} has been copied to the project root.`);
    }
  });
});
