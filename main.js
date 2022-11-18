const form = document.getElementById('form-atividade')
const imgAprovado = '<img src = "./images/aprovado.png" alt = "Emoji celebrando" />'
const imgReprovado = '<img src = "./images/reprovado.png" alt = "Emoji decepcionado" />'
const atividades = []
const notas = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {
    
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = `<tr>
                <td>${inputNomeAtividade.value}</td>
                <td>${inputNotaAtividade.value}</td>
                <td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>
                </tr>`

    linhas += linha

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; 1 < notas.length; i++) {
        somaDasNotas += notas[i]
    }


    console.log(somaDasNotas)
}