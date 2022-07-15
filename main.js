var NodeWebcam = require( "node-webcam" );
var http = require( "http" );

var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});

var opts = {

    //Picture related

    width: 1280,

    height: 720,

    quality: 25,

    // Number of frames to capture
    // More the frames, longer it takes to capture
    // Use higher framerate for quality. Ex: 60

    frames: 60,


    //Delay in seconds to take shot
    //if the platform supports miliseconds
    //use a float (0.1)
    //Currently only on windows

    delay: 0,


    //Save shots in memory

    saveShots: true,


    // [jpeg, png] support varies
    // Webcam.OutputTypes

    output: "jpeg",


    //Which camera to use
    //Use Webcam.list() for results
    //false for default device

    device: false,


    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes

    callbackReturn: "location",


    //Logging

    verbose: false

};

var Webcam = NodeWebcam.create( opts );

setInterval(function() {
    

    var ruta = path.join(__dirname, "public", `capture.jpg`);

    NodeWebcam.capture( ruta, opts, function( err, data ) {

    });


}, 500);

