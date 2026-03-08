// 1. MAPEAMENTO DO DOM (Pegando os elementos do HTML)
const campoTarefa = document.getElementById('tarefa');       // O campo do nome
const campoCategoria = document.getElementById('categoria'); // O campo da categoria
const campoDescricao = document.getElementById('descricao'); // O campo do bloco de notas
const botaoAdicionar = document.getElementById('adicionar'); // O botão de salvar
const listaPendencias = document.getElementById('lista-pendencias'); // A lista (ul)

// 2. ESCUTADOR DE EVENTOS (Ouvindo o clique no botão)
botaoAdicionar.addEventListener('click', function() {
    
    // Pegando o que você digitou no momento do clique
    const tarefa = campoTarefa.value;
    const categoria = campoCategoria.value;
    const nota = campoDescricao.value;

    // VALIDAÇÃO: Se o nome da tarefa estiver vazio, ele para aqui
    if (tarefa === "") {
        alert("Fabio, digite o nome da tarefa primeiro!");
        return;
    }

    // 3. CRIAÇÃO DE ELEMENTOS NO DOM (Fabricando a LI)
    const li = document.createElement('li'); // Cria o item da lista

    // Montando o conteúdo visual da tarefa (usando crases `` para facilitar)
    li.innerHTML = `
        <strong>[${categoria.toUpperCase()}] ${tarefa}</strong>
        <p style="margin: 10px 0; font-size: 0.9rem; color: #666;">Nota: ${nota}</p>
        
        <pre><code>// Bloco Técnico FVN TECH:\n${nota}</code></pre>
        
        <button onclick="removerItem(this)" style="margin-top:10px; color:red; cursor:pointer; background:none; border:none; font-size:0.8rem;">[Excluir Tarefa]</button>
    `;

    // 4. INJETANDO NO SITE
    listaPendencias.appendChild(li); // "Pendura" a tarefa na lista

    // 5. LIMPEZA DOS CAMPOS
    campoTarefa.value = "";
    campoDescricao.value = "";
    campoTarefa.focus(); // Coloca o cursor pronto para a próxima
});

// FUNÇÃO PARA REMOVER (O DOM identifica quem foi clicado)
function removerItem(botao) {
    const item = botao.parentElement; // Acha a 'li' que é "pai" do botão
    item.remove(); // Remove o item inteiro da tela
}