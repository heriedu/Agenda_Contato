const form = document.getElementById('formulario')
const cadastro = []

let linhas = "";





form.addEventListener ('submit',  function(e) {
    e.preventDefault()

    cadatro()
    atualizarTabela()
    
})


function cadatro () {

    const nome = document.getElementById('nome-completo')
    const phone = document.getElementById('telefone')

    const phoneMin = document.getElementById('telefone').value
    const nomeMin = document.getElementById('nome-completo').value
    const minLength = 9;

    if (nomeMin.length < minLength) {
        alert('É necessário seu nome e sobrenome, portanto, necessário ter mais de 9 digitos.')
        return
    }

    if (parseInt(phoneMin.length) !== 11) {
        alert('É necessário 11 digitos')
        return 
    }


    if (cadastro.includes(phone.value)) {
        alert("A atividade já se encontra.")
        return
    }

    cadastro.push(phone.value)

    
    
    let linha =  `<tr>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${phone.value}</td>`
    linha += '</tr>'

    linhas += linha 

    nome.value = ''
    phone.value = ''
}


function atualizarTabela () {
    const resposta = document.querySelector('tbody');
    resposta.innerHTML = linhas
}



