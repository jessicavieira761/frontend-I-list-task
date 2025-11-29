// 1. Selecionar os elementos do DOM
const form = document.getElementById('form-nova-tarefa');
const inputTarefa = document.getElementById('input-nova-tarefa');
const listaDeTarefas = document.getElementById('lista-de-tarefas');

// 2. Adicionar um 'listener' ao evento de submissão do formulário
form.addEventListener('submit', function(event) {
    // Prevenir o comportamento padrão de recarregamento da página
    event.preventDefault();

    // 3. Obter o texto do campo de entrada, removendo espaços em branco
    const textoDaTarefa = inputTarefa.value.trim();

    // 4. Validar se o campo não está vazio
    if (textoDaTarefa !== '') {
        // Se houver texto, invocar a função para adicionar a tarefa
        adicionarTarefa(textoDaTarefa);
    } else {
        // Se vazio, notificar o usuário
        alert('Por favor, insira a descrição da tarefa.');
    }
});

// 5. Definir a função responsável por criar e adicionar a tarefa à lista
function adicionarTarefa(texto) {
    // a. Criar um novo elemento de lista (<li>)
    const novoItem = document.createElement('li');

    const spanTexto = document.createElement('span');
    spanTexto.textContent = texto;

//  b. botão de remoção
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('botao-remover');

// Funcionalidade - marcar tarefa como concluída
    spanTexto.addEventListener('click', function() {
    novoItem.classList.toggle('tarefa-concluida');
});

    // c. Definir o conteúdo textual do novo item
   // novoItem.textContent = texto;

    //d. Anexar o texto e o botão ao novo item
    novoItem.append(spanTexto);
    novoItem.append(botaoRemover);

    // e. Anexar o novo item à lista de tarefas (<ul>)
    listaDeTarefas.append(novoItem);

    // f. Limpar o campo de entrada para a próxima inserção
    inputTarefa.value = '';

    // g. Devolver o foco ao campo de entrada
    inputTarefa.focus();
}