var https = require('https');


function getHTML(options, callback) {
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
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);