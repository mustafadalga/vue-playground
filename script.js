// eslint-disable-next-line no-undef
const fs = require('fs');
// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
const mkdirp = require('mkdirp');
// eslint-disable-next-line no-undef
const { exec } = require('child_process');
// eslint-disable-next-line no-undef
const rimraf = require('rimraf');

// Get command-line arguments
const args = process.argv.slice(2);
const inputFile = args[args.indexOf('-i') + 1];
const outputFile = args[args.indexOf('-o') + 1];

/**
 * This function will check is input file exists
 */
if (!fs.existsSync(inputFile)) {
    console.warn(`Input file "${inputFile}" does not exist.`);
    process.exit(1);
}

const outputDirectory = path.dirname(outputFile);
if (!fs.existsSync(outputDirectory)) {
    console.warn(`Output directory "${outputDirectory}" does not exist.`);
    process.exit(1);
}


// Define your temporary directory
const tempDir = './temp-docs';

// Make sure the temporary directory exists
mkdirp.sync(tempDir);

// Read the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    // Replace the script setup syntax variations
    const result = data
        .replace(/<script lang="ts" setup>/g, '<script lang="ts">')
        .replace(/<script setup lang="ts">/g, '<script lang="ts">')
        .replace(/<script setup>/g, '<script>');

    // Write the file to the temporary directory
    const tempFile = path.join(tempDir, path.basename(inputFile));

    fs.writeFile(tempFile, result, 'utf8', (err) => {
        if (err) {
            console.log(err);
            return;
        }

        // Generate the markdown documentation for the file
        const cmd = `documentation build ${tempFile} -f md -o ${outputFile}`;

        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.error(`exec error: ${err}`);
                return;
            }
            console.log(`Generated documentation for ${inputFile}`);

            // Delete the temporary directory
            rimraf.sync(tempDir);
        });
    });
});
