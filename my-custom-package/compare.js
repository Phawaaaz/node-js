// file_joiner.js

const fs = require('node:fs/promises');
const path = require('node:path');

async function joinFiles(filesToJoin, outputFile) {
  try {
    if (!Array.isArray(filesToJoin) || filesToJoin.length === 0) {
      console.error('Hey, you need to give me a list of files to join!');
      return;
    }
    if (!outputFile || typeof outputFile !== 'string') {
      console.error('Uh oh, where should I save the joined file? Give me a name!');
      return;
    }

    let allTheContent = '';
    for (let i = 0; i < filesToJoin.length; i++) {
      const currentFile = filesToJoin[i];
      try {
        const fileContent = await fs.readFile(currentFile, 'utf8');
        allTheContent += fileContent;
      } catch (error) {
        console.error(`Oops! Couldn't read the file: ${currentFile}. Maybe it's missing?`);
        // Let's keep going with the other files for now
      }
    }

    await fs.writeFile(outputFile, allTheContent, 'utf8');
    console.log(`Okay, I joined ${filesToJoin.length} files into: ${outputFile}!`);

  } catch (bigProblem) {
    console.error('Something went wrong while joining files:', bigProblem);
  }
}

async function main() {
  const inputFiles = ['first.txt', 'second.txt', 'maybe_this_one.txt'];
  const outputFileName = 'everything_together.txt';

  // Let's make some dummy files to test
  try {
    await fs.writeFile(inputFiles[0], 'This is the first file.\n');
    await fs.writeFile(inputFiles[1], 'Here\'s the second file!\n');
    // Maybe we forget to create 'maybe_this_one.txt' to see the error handling

    await joinFiles(inputFiles, outputFileName);

    // Let's see what's in the joined file (just for fun)
    const finalContent = await fs.readFile(outputFileName, 'utf8');
    console.log('\nWhat\'s inside the joined file:');
    console.log(finalContent);

  } catch (error) {
    console.error('Something went wrong in the main part:', error);
  } finally {
    // Let's clean up the files we made
    for (const file of inputFiles) {
      try {
        await fs.unlink(file);
      } catch (err) {
        // It's okay if they weren't there
      }
    }
    try {
      await fs.unlink(outputFileName);
    } catch (err) {
      // It's okay if it wasn't created
    }
  }
}

main();