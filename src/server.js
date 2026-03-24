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

app.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;

  const index = tarefas.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  const tarefaRemovida = tarefas.splice(index, 1);
  console.log(`✓ Tarefa ${id} removida`);
  res.status(200).json({ mensagem: "Tarefa removida com sucesso!", tarefa: tarefaRemovida[0] });
});

app.put("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, concluida } = req.body || {};

  const tarefa = tarefas.find(t => t.id === parseInt(id));

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  console.log(`✓ Tarefa ${id} atualizada`);
  res.status(200).json({ mensagem: "Tarefa atualizada com sucesso!", tarefa });
});

 

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});



