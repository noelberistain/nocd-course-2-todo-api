var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/TodoApp',{ useNewUrlParser: true });

//FOR MLAB MONGODB AT HEROKU we should use the URI value to connect

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

// module.exports = {
//     mongoose: mongoose
// };

module.exports = {mongoose};