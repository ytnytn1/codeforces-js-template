const fileName = process.argv.length === 3 ? process.argv[2].replace(/^--/, '') : '';

const args = fileName ? `./src/test/${fileName}.spec.js` : `./src/test/*.spec.js`;

require('child_process')
  .spawn('mocha', [args], {stdio:'inherit'})
  .on('exit', function (error) {
    if(error){
      console.error(error);
    }
  });