var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/TodoApp',{ useNewUrlParser: true });

//FOR MLAB MONGODB AT HEROKU we should use the URI value to connect
mongoose.connect('mongodb://test1:b3r15t41n@ds129823.mlab.com:29823/todo-api'||'mongodb://127.0.0.1:27017/TodoApp',{ useNewUrlParser: true }); 

// module.exports = {
//     mongoose: mongoose
// };

module.exports = {mongoose};