import express from "express"

const app = express(); 
const PORTA = 3000;

app.use(express.json());


// GET /tarefas lista o array inteiro 
app.get("/tarefas", (req, res) => { 
res.status(200).json(tarefas); 
}); 
// POST /tarefas cria uma nova tarefa 
app.post("/tarefas", (req, res) => { 
const { titulo } = req.body; 

});
