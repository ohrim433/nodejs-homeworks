const path = require('path');

const moveAllFiles = require('./functions');

const students1800Path = path.resolve(process.cwd(), 'students', '1800');
const students2000Path = path.resolve(process.cwd(), 'students', '2000');

moveAllFiles(students1800Path, students2000Path);
moveAllFiles(students2000Path, students1800Path);
