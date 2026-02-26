import express from "express"
import { tarefas} from "./dados.js"

const app = express();

const PORT = 3000;

app.use(express.json());

// GET /tarefas lista o array inteiro
app.get("/tarefas", (req, res) => {
res.status(200).json(tarefas);
});
// POST /tarefas cria uma nova tarefa
app.post("/tarefas", (req, res) => {
const { titulo } = req.body;
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
