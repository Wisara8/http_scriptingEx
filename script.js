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

      // string += data.toString();
      // string += '\n';
      string += data + '\n';
    });

    // response.on('end', function() {
    //   console.log('Response stream complete.');
    //   return string;
    // });

  });
}

getAndPrintHTMLChunks();