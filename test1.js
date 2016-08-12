/**
 * Created by josh on 8/12/16.
 */

var Twit = require('twit')
var Answers = require('./answers');

var T = new Twit({
    consumer_key:         'MACS4yZZjuH7MSx6PZ9CVFUAd',
    consumer_secret:      '2y97XFVprWYD9jc75atLMHKhIWQatNLRdwWDqJFXz821uKace7',
    access_token:         '762119568093384704-S7O4bnrSTtRFw4MiHU3ns1buU4glL3R',
    access_token_secret:  '95sfxZeZ7cxwv48qe5DdaBliYSq12jpzSuxcbS2qAQkz0',
    timeout_ms:           60*1000
});

var stream = T.stream('user');

var ME = "762119568093384704";
stream.on('message', function (msg) {
    if(msg.user && msg.user.id_str == ME) return;
    console.log("got a message",msg);
});
stream.on('tweet', (tweet) => {
    var uid = tweet.user.id_str;
    if(uid != ME) {
        var username = tweet.user.screen_name;
        console.log("=======\n======\ntweet", tweet);
        if(username == 'mrrockbot') {
            console.log("weird error");
            return;
        }
        T.post('statuses/update', {
            in_reply_to_status_id: tweet.id_str,
            //in_reply_to_status_id_str: tweet.id_str,
            //in_reply_to_user_id: tweet.user.id,
            //in_reply_to_user_id_str: tweet.user.id_str,
            //in_reply_to_screen_name:tweet.user.screen_name,
            status: '.@' + username + ' ' + Answers.getAnswer(tweet.text),
            trim_user:'true'
        }, function (err, data, response) {
            if(err) {
                console.log("ERRORR!" + err,err);
                return;
            }
            console.log("response is", err, data);
        });
    }
});
