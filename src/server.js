import express from "express"
import { tarefas, criarTarefa } from "./dados.js"

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

  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({ erro: "Título é obrigatório" });
  }

  const novaTarefa = criarTarefa(titulo);
  console.log(`✓ Tarefa criada: "${titulo}"`);
  res.status(201).json({ mensagem: "Tarefa criada com sucesso!", tarefa: novaTarefa });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});



