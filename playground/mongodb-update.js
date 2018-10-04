// db.collection('Todos').find();

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5bb65fa1311cc5269c4f50f1")
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });


    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bb65fa1311cc5269c4f50f1')
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5bb668c8311cc5269c4f532d")
    }, {
            $set: {
                name: 'Andrew'
            },
            $inc: {
                age: -4
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    client.close();

});