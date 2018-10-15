var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var localUrl = 'mongodb://localhost:27017/TodoApp';
var herokuUrl = 'mongodb://test1:b3r15t41n@ds129823.mlab.com:29823/todo-api'

mongoose.set('useFindAndModify', false);
//FOR MLAB MONGODB AT HEROKU we should use the URI value to connect
mongoose.connect( localUrl, { useNewUrlParser: true });

// module.exports = {
//     mongoose: mongoose
// };

module.exports = { mongoose };