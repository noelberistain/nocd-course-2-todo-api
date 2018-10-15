const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.deleteMany({}).then(result=>{
//     console.log(result);
// })

// Todo.findOneAndDelete("5bbfe4d0d54c311f1cc81d95").then(todo=>console.log(todo));

// Todo.findByIdAndDelete({_id: "5bbfea76d54c311f1cc81f5a"}).then(todo=>console.log(todo));

// Todo.findOneAndRemove({ _id: "5bbfeaedd54c311f1cc81f92" }).then(todo => console.log(todo));

