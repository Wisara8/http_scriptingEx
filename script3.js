var https = require('https');


function getAndPrintHTML(options) {
  var string = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {

      string += data + '\n';
    });

    response.on('end', function() {
      console.log(string);
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getAndPrintHTML(requestOptions);