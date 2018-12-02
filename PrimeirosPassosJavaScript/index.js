var nome = 'marco'
var idade = 29
var peso = 75
var maiorIdade = true
maiorIdade = 'altrando tipo var'

var compraRefrigerante = false
var compraCerveja = false
var compraSuco = false

var convidado = {
    nome: 'Marco',
    idade: '15',
    bebeCerveja: false,
    bebeSuco:true
}

var peso = 75
var altura = 1.74

var imc = peso / (altura * altura)

imc += 10
imc++

var vector = [
    'carlos',
    'joao',
    'maria'
]

var Pessoa = {
    nome: 'Marco',
    amigos :[
        'Maria',
        'Selda',
        'Jorge'
    ]
}

if(convidado.bebeCerveja){
    compraCerveja = false
}else if(convidado.bebeCerveja && convidado.idade>=18){
    compraCerveja = false
}else{
    compraCerveja = true
}

console.log(imc)

console.log(Pessoa.amigos)

console.log(Pessoa.vector)

console.log(Pessoa.nome)

console.log(vector[0])

console.log(name, typeof nome)

console.log(compraCerveja)