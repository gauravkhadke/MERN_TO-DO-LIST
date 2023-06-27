const express = require ("express")
const app = express();
const bodyParser = require ("body-parser")
const cors =require ("cors")
const { mongoose} =require ("mongoose");
const PORT = 4000;
const Todo = require ("./todo.model")
const todoRoutes = express.Router();

async function connectToMongodb(){
    await mongoose.connect("mongodb://gauravkhadke63:xyz12@ac-dxzvt8m-shard-00-00.kcskuxv.mongodb.net:27017,ac-dxzvt8m-shard-00-01.kcskuxv.mongodb.net:27017,ac-dxzvt8m-shard-00-02.kcskuxv.mongodb.net:27017/?ssl=true&replicaSet=atlas-dvudas-shard-0&authSource=admin&retryWrites=true&w=majority",
   {useNewUrlParser: true})
   console.log("Connected to Mongodb");
   }

   todoRoutes.route("/").get(async function(req,res){
   const todos = await Todo.find();
   res.send(todos);
   })

   todoRoutes.route("/:id").get(async function(req,res){
    let id = req.params.id;
    const todoitem = await Todo.findById(id);
    res.send(todoitem);
   })

   todoRoutes.route("/update/:id").post( async function(req,res){
   const  todo=await Todo.findById(req.params.id);
        if(!todo){
            res.status(404).send("data is not available")
        }
        else{
            todo.todo_description =req.body.todo_description;
            todo.todo_responsible =req.body.todo_responsible;
            todo.todo_priority =req.body.todo_priority;
            todo.todo_completed =req.body.todo_completed;

            todo.save().then(todo => {
                res.json("Todo Updated")
            }).catch(err => {
                res.status(400).send("update not possible")
            })

        }
    
   })

   todoRoutes.route("/add").post(function(req,res){
    let todo = new  Todo (req.body);
    todo.save().then(todo =>{
        res.status(200).json({'todo':'todo added succesfully'});
    })
    .catch(err => {
        res.status(400).send('adding new todo failed');
    })
   })

//    todoRoutes.route("/delete/:id").post(function(req,res){
//     const id = req.query.id;
//     Todo.deleteOne({_id:id}).then(result => {
//         res.status(200).json({'result': 'todo item deleted sucessully'})
//     })
//     .catch (err=> {
//         res.status(400).send('cannot delete item')
//     })
   
//    })

todoRoutes.route("/delete/:id").delete(async function (req,res){
    const id = req.params.id;
    console.log("id is:",id);
    const result =await Todo.deleteOne({_id:id});
    console.log(result);
    res.send(result);
})
   app.use (cors());

   app.use(bodyParser.json());

   app.use('/todos',todoRoutes);
   app.listen(PORT,function(){
    connectToMongodb();
    console.log("Server started on PORT:",PORT)
   });