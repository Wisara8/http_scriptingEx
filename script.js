var https = require('https');


function getAndPrintHTMLChunks() {
  var string = "";
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {

      string += data + '\n';
    });

    response.on('end', function() {
      console.log(string);
    });

  });
}

getAndPrintHTMLChunks();