// Elementos do formulário e da lista
const campoTarefa = document.getElementById("tarefa");
const campoCategoria = document.getElementById("categoria");
const campoDescricao = document.getElementById("descricao");
const botaoAdicionar = document.getElementById("adicionar");
const listaPendencias = document.getElementById("lista-pendencias");

/**
 * Monta o item <li> de uma tarefa
 */
function criarItem(tarefa, categoria, nota) {
  const li = document.createElement("li");

  const titulo = document.createElement("strong");
  titulo.textContent = `[${categoria.toUpperCase()}] ${tarefa}`;
  li.appendChild(titulo);

  if (nota) {
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = `// Bloco Técnico FVN TECH:\n${nota}`;
    pre.appendChild(code);
    li.appendChild(pre);
  }

  const botaoExcluir = document.createElement("button");
  botaoExcluir.className = "btn-excluir";
  botaoExcluir.textContent = "[Excluir Tarefa]";
  botaoExcluir.addEventListener("click", () => li.remove());
  li.appendChild(botaoExcluir);

  return li;
}

/**
 * Lê o formulário, valida e adiciona a tarefa na lista
 */
function adicionarTarefa() {
  const tarefa = campoTarefa.value.trim();
  const categoria = campoCategoria.value;
  const nota = campoDescricao.value.trim();

  if (tarefa === "") {
    alert("Digite o nome da tarefa primeiro!");
    campoTarefa.focus();
    return;
  }

  listaPendencias.appendChild(criarItem(tarefa, categoria, nota));

  campoTarefa.value = "";
  campoDescricao.value = "";
  campoTarefa.focus();
}

botaoAdicionar.addEventListener("click", adicionarTarefa);

campoTarefa.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") adicionarTarefa();
});