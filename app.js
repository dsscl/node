// &18.1 理解事件
// var EventEmitter = require('events').EventEmitter;
// var secretMessage = new EventEmitter();
// secretMessage.on('message', function(data) {
//     console.log(data)
// })

// secretMessage.on('self destruct', function() {
//     console.log('BANG!! The message is a destroyed!');
// })

// secretMessage.emit('message', 'This is a secert message. It will self destruct in 5 seconds..');

// setTimeout(function() {
//     secretMessage.emit('self destruct');
// }, 5000)

// &18.2 通过HTTP演示事件
// var https = require('https');
// var username = 'YOUR_TWITTER_USERNAME';
// var password = 'YOUR_TWITTER_PASSWORD';
// var json;

// var options = {
//     host: 'stream.twitter.com',
//     auth: username + ':' + password,
//     path: '/1/statuses/filter.json?track=chocolate',
//     method: 'POST'
// };

// var req = https.request(options, function(res) {
//     res.setEncoding('utf8');
//     res.on('data', function(data) {
//         json = JSON.parse(data);
//         console.log('New data event!');
//         console.log(json.text);
//     });
// });

// req.end();

// &18.3 用事件玩乒乓
// var EventEmitter = require('events').EventEmitter
// var pingpong = new EventEmitter()

// setTimeout(function() {
//     console.log('Sending first ping');
//     pingpong.emit('ping')
// }, 2000)

// pingpong.on('ping', function() {
//     console.log('Got ping')
//     setTimeout(function() {
//         pingpong.emit('pong')
//     }, 2000)
// })

// pingpong.on('pong', function() {
//     console.log('Got pong')
//     setTimeout(function() {
//         pingpong.emit('ping')
//     }, 2000)
// })

// var logPing = function(){
//     console.log('Second ping listener got ping')
// }
// setTimeout(function() {
//     console.log('Added a second ping listener')
//     pingpong.on('ping', logPing)
// }, 4000)

// setTimeout(function(){
//     console.log('Remove second ping listener')
//     pingpong.removeListener('ping', logPing)
// }, 12000)