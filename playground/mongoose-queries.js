const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { ObjectID } = require('mongodb');
const { User } = require('./../server/models/user');

// var userId = "5bb69fb7b130680a6ca12edf";
// if (ObjectID.isValid(id)) {
//     console.log('ID valid');
// }
// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {

//     console.log('Todo', todo);
// })

// Todo.findById(id).then(todo => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if (!user) {
        return console.log("Unable to find user");
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});