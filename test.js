var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
console.log('token', token);

var decoded = jwt.verify(token, 'shhhhh');
console.log('decoded', decoded);

// var decoded = jwt.verify(token, 'shhhhhasdasdsad');
// console.log('decoded2', decoded);

var token = jwt.sign({ username: 'nasser', email: 'nasser@yahoo.com', pass:'123456'}, 'shhhhh');
console.log('token2', token);