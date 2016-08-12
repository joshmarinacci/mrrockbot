/**
 * Created by josh on 8/12/16.
 */

var Twit = require('twit')

var T = new Twit({
    consumer_key:         'MACS4yZZjuH7MSx6PZ9CVFUAd',
    consumer_secret:      '2y97XFVprWYD9jc75atLMHKhIWQatNLRdwWDqJFXz821uKace7',
    access_token:         '762119568093384704-S7O4bnrSTtRFw4MiHU3ns1buU4glL3R',
    access_token_secret:  '95sfxZeZ7cxwv48qe5DdaBliYSq12jpzSuxcbS2qAQkz0',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var stream = T.stream('user' )

var ME = "762119568093384704";
stream.on('message', function (msg) {
    console.log("got a message",msg);
});
stream.on('tweet', (tweet) => {
    console.log("tweet", tweet.text);
    var nameID = tweet.id_str;
    var name = tweet.user.screen_name;
    var uid = tweet.user.id_str;
    console.log('sending back to ', nameID, name);
    if(uid != ME) {
        console.log("really sending");
        if(name == 'mrrockbot') {
            console.log("weird error");
            return;
        }
         T.post('statuses/update', {
            in_reply_to_status_id: nameID,
            status: 'Rock back at ya ' + '  @' + name
         }, function (err, data, response) {
            console.log("did the reply", err, data);
         });
    }
});
