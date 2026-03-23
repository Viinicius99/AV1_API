export const tarefas = [
  { id: 1, titulo: "Estudar Node", concluida: false },
  { id: 2, titulo: "Fazer telas no Figma", concluida: true }
]

export function criarTarefa(titulo) {
  const novaId = Math.max(...tarefas.map(t => t.id), 0) + 1;
  const novaTarefa = { id: novaId, titulo, concluida: false };
  tarefas.push(novaTarefa);
  return novaTarefa;
}