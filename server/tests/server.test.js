const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

beforeEach(done => {
    Todo.remove({}).then(function () { done() });
});

describe('POST /todos', function () {
    it('should create a new todo', function (done) {
        var text = 'Test todo text';

        request(app)
            .post('./todos')
            .send({ text })
            .expect(200)
            .expect(res => {
                expect(res.body.text).toBe(text);
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }

                Todo.find().then(function (todos) {
                    expect(todos.length).toBe(1);
                    expect(todso[0].text).toBe(text);
                    done();
                }).catch(function (e) { done(e) });
            });
    });

    it('should not create todo with invalid body data', function (done) {
        request(app)
            .post('./todos')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
            });
    });

});

