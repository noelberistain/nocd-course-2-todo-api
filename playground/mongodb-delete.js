// db.collection('Todos').find();

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos')
    //     .deleteMany({ text: 'Eat lunch' })
    //     .then(result => {
    //         console.log(result);
    //     });


    // db.collection('Todos')
    //     .deleteOne({ text: 'Eat lunch' })
    //     .then(result => console.log(result));


    // db.collection('Todos')
    //     .findOneAndDelete({ completed: false })
    //     .then(result => console.log(result));


    db.collection('Users').deleteMany({ name: "Andrew" });

    db.collection('Users')
        .findOneAndDelete({
            _id: new ObjectID("5bb668bc311cc5269c4f5329")
        }).then( results => 
            console.log(JSON.stringify(results, undefined, 2))
            );

    client.close();

});