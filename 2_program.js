var args = process.argv.slice(2);

var sum = args.reduce(function (prev, val) {
  val = Number(val);
  return prev + val;
}, 0.0);

console.log(sum);
