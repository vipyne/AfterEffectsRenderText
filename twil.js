// var server = net.createServer();
// server.listen(0, '127.0.0.1');
    console.log('1 ---- you got here, derp');

    // var twilio = new File("../__render_text__.jsx");
    //         twilio.open("r");
    //         eval(twilio.read());
    //         twilio.close();

    var tw = require("../__render_text__.jsx");
    tw.run;

    console.log('2 ---- you got here, derp derp');


// TWILIO / NODE /////////////////////////////////////////////////////////////
var client = require('twilio')('AUTH_TOKEN', 'ACCOUNT_SID');

//Send an SMS text message
client.sendMessage({

    to:'+12345678989', // Any number Twilio can deliver to
    from: '+14846794637', // A number you bought from Twilio and can use for outbound communication
    body: 'render is complete.  word to your mother.' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }
});


// #include '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js'

//     alert('you got here, derp');
// // //require the Twilio module and create a REST client



//  $.ajax({
//     url: "http://127.0.0.1",
//     data:
//  })




