let contas = [];
let numeroContas = 0;

function criarContas(){
    let conta = {
        nome: '',
        telefone: '',
        dataNascimento: '',
        numeroDaConta: ++numeroContas,
        saldo: 1000,
    };

    conta.nome = prompt("Digite seu nome:");
    conta.telefone = prompt("Digite seu Telefone (xx) xxxxx-xxxx:");
    conta.dataNascimento = prompt("Digite sua data de Nascimento (dd/mm/aaaa):");

    contas.push(conta);
    console.log('contas', contas);
}

criarContas();
