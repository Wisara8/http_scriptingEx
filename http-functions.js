var https = require('https');

module.exports = function getHTML (options, callback) {
  var string = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {

      string += data + '\n';
    });

    response.on('end', function() {
      console.log(callback(string));
    });

  });
};