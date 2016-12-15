var stat = require('fs').stat;
var spawn = require('child_process').spawn;

module.exports = function() {

  var src;
  var args;
  var options;
  var callback;
  var pdSpawn;
  var result = "";
  var isURL;

  // Event Handlers
  var onStdOutData;
  var onStdOutEnd;
  var onStdErrData;
  var onStatCheck;

  isURL = function (src) {
    return /^(https?|ftp):\/\//i.test(src);
  };

  onStdOutData = function (data) {
    result += data;
  };

  onStdOutEnd = function () {
    callback(null, result || true);
  };

  onStdErrData = function (err) {
    callback(new Error(err));
  };

  onStatCheck = function (err, stats) {
    // If src is a file or valid web URL, push the src back into args array
    if ((stats && stats.isFile()) || isURL) {
      args.unshift(src);
    }

    // Create child_process.spawn
    pdSpawn = spawn('pandoc', args, options);

    // If src is not a file, assume a string input.
    if ((typeof stats === "undefined") && !isURL) {
      pdSpawn.stdin.end(src, 'utf-8');
    }

    // Set handlers...
    pdSpawn.stdout.on('data', onStdOutData);
    pdSpawn.stdout.on('end', onStdOutEnd);
    pdSpawn.stderr.on('data', onStdErrData);
  };

  // Convert arguments to actual array.
  args = Array.prototype.slice.call(arguments);
  // Save src out of the args array.
  src = args.shift();
  // Check if src is URL match.
  isURL = isURL(src);
  // Save the callback out of the args array.
  callback = args.pop();

  // At this point, args array should be atlest .length 
  // of 1. If .length is 2, we have an Options object.
  if (args.length == 2 && args[1].constructor !== Array) {
    options = args.pop();
  }

  // Pull only remaining element from 
  // the args Array and overwrite itself.
  args = args.shift();

  // Array of arguments are required for PanDoc.
  // If arguments are in String format, convert 
  // them to an array to use 
  // in the child_process.spawn() call.
  if (args.constructor === String) {
    args = args.split(' ');
  }

  // Check file status of src
  stat(src, onStatCheck);
};
