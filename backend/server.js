const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const todoRoutes = express.Router();

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/todos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("Conexiune la baza de date realizata")
});

todoRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Todo.findById(id, function (err, todo) {
        res.json(todo);
    })
});

todoRoutes.route('/').get(function (req, res) {
    Todo.find({},function (err,todos) {
        res.send(todos);
    })
});

todoRoutes.route('/update/:id').post(function (req, res) {
    let id = req.params.id;
    Todo.findById(id, function (err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            if(!req.body.todo_description){
                todo.todo_completed = req.body.todo_completed;
            }
            else{
                console.log(todo);
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;
            }

            todo.save().then(todo => {
                res.send({
                    message : {data : "Todo Updated"},
                    todo : todo,
                });
            })
                .catch(err => {
                    res.status(400).send(err);
                })

    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);

    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/delete/:id').post(function (req,res) {
    let id = req.params.id;
    Todo.findById(id,function (err,todo) {
        if (!todo) {
            res.status(404).send("data is not found");
        }
        else{
            todo.delete().then(todo =>{
               res.status(200).send("Product Was Deleted")
            });
        }
    })

});

app.use('/todos',todoRoutes);

app.listen(PORT, () => console.log(`serverul ruleaza pe portul ${PORT}`));

