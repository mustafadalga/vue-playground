// eslint-disable-next-line no-undef
const fs = require('fs');
// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
const mkdirp = require('mkdirp');
// eslint-disable-next-line no-undef
const { exec } = require('child_process');

// Define your temporary directory
const tempDir = './temp-docs';

// Make sure the temporary directory exists
mkdirp.sync(tempDir);

// Create a glob pattern to match all .vue files in the current directory and subdirectories
const pattern = '**/*.vue';

const {
    glob,
    globSync,
    globStream,
    globStreamSync,
    Glob,
} = require('glob')


const g4 = new Glob('**/*.vue', { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    const fileNames = files
        .filter(file => file.isFile())
        .map(file => file.name);

    console.log(fileNames);
});

console.log(g4)
async function a(){
    const g3 = new Glob('**/*.vue', { withFileTypes: true })
    g3.stream().on('data', path => {




        //
        // console.log(
        //     path.fullpath(),
        //     path.isDirectory(),
        //     path.readdirSync().map(e => e.name)
        // )
    })
}
a()