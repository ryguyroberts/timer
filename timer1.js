// Slice first to remove first 2 process.arg vals
const slicedArr = process.argv.splice(2);

const timer = () => {
  // No value do nothing
  if (!slicedArr.length) {
    return;
  }
  for (const value of slicedArr) {
    // if value negative or not number skip
    if (value <= 0 || !Number(value)) {
      continue;
    }
    // output beep at interval times 1000 to get seconds.
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (value * 1000));
  }
};
timer();