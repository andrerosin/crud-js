let pessoas = [];

function gerarId() {
    return Math.floor(Math.random() * 1000);
}

function cadastrarPessoa(nome, idade, cidade) {
    const pessoa = {
        id: gerarId(),
        nome: nome,
        idade: idade,
        cidade: cidade
    };
    pessoas.push(pessoa);
}

function atualizarPessoa(id, novosCampos) {
    const pessoaIndex = pessoas.findIndex(p => p.id === id);
    if (pessoaIndex !== -1) {
        pessoas[pessoaIndex] = { ...pessoas[pessoaIndex], ...novosCampos };
    }
}

function deletarPessoa(id) {
    pessoas = pessoas.filter(p => p.id !== id);
}

function listarPessoas() {
    return pessoas;
}

cadastrarPessoa('André Rosin', 19, 'São Jorge');
cadastrarPessoa('Rafael Borré', 28, 'Porto Alegre');

atualizarPessoa(pessoas[0].id, { idade: 22 });

deletarPessoa(pessoas[1].id);

const resultado = listarPessoas();
console.log(resultado);
