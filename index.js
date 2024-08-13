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

function transferirSaldo(){
    let contaDestino, matchContaDestino, contaOrigem, matchContaOrigem, valorTransferencia;
    
    do {
        contaDestino = prompt("Digite a conta de destino:");
        matchContaDestino = contas.find((conta) => conta.numeroDaConta == contaDestino);
        if (!matchContaDestino) {
            alert("Digite uma conta válida");
        }
    } while (!matchContaDestino);

    do {
        contaOrigem = prompt("Digite a conta de origem:");
        matchContaOrigem = contas.find((conta) => conta.numeroDaConta == contaOrigem);
        if (!matchContaOrigem) {
            alert("Digite uma conta válida");
        }
    } while (!matchContaOrigem);

    do {
        valorTransferencia = parseFloat(prompt("Digite o valor da transferência:"));
        if (valorTransferencia > matchContaOrigem.saldo) {
            alert("Saldo insuficiente");
        }
    } while (valorTransferencia > matchContaOrigem.saldo);

    let indexContaOrigem = contas.findIndex((conta) => conta.numeroDaConta == contaOrigem)
    let indexContaDestino = contas.findIndex((conta) => conta.numeroDaConta == contaDestino)
    
    contas[indexContaOrigem].saldo -= parseInt(valorTransferencia);
    contas[indexContaDestino].saldo += parseInt(valorTransferencia);
    console.log(contas);
}

criarContas();
