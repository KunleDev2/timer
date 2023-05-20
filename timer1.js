const getArgs = process.argv.slice(2);
let getInitTimer = 0;

// sort the seconds in ascending order
getArgs.sort((c, d) => parseInt(c) - parseInt(d));

// for loop to loop through the input
for (let i = 0; i < getArgs.length; i++) {
  let getArgsInt = parseInt(getArgs[i]);

  if (getArgsInt >= 0 && !isNaN(getArgsInt)) {
    // set time out called
    setTimeout(() => {
      process.stdout.write("\x07");
    }, getInitTimer * 1000);
  }

  getInitTimer = getArgsInt;
};