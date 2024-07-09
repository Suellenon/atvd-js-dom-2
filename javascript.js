//Q1
 let nome = prompt("Qual seu nome?")
 let bem_vindo = document.getElementById('boas-vindas')
 bem_vindo.innerHTML =`Bem-vindo, ${nome}`

// var nome = prompt("Qual seu nome?")

// nome.document.write(`Bem vindoo,  ${nome}`)


//Q2





function ligar() {


    const lamp = document.getElementById("lamp")

    lamp.src = "./imgs/lamp.lig.png"
    const tela = document.getElementById('Fundo')
    tela.style.backgroundColor = "white"
    tela.style.width = "20%"

}
function desligar() {

    const lamp = document.getElementById("lamp")
    lamp.src = "./imgs/pic_bulboff.gif";
    const tela = document.getElementById('Fundo')
    tela.style.backgroundColor = "black"
    tela.style.width = "20%"
}




//q3

function mostrarSenha() {
    const senha = document.getElementById('senha')
    if (senha.type === 'password') {
        senha.setAttribute('type', 'text')
        const olho = document.getElementById('olho')
        olho.src = './imgs/olhofechado.png'


    } else {
        senha.setAttribute('type', 'password')
        olho.src = './imgs/olhoaberto.png'

    }




}

//Q4
 function confirmarSenha() {
    const Senha = document.getElementById('Senha')
    const confirmacao = document.getElementById('confirmacao')
    const ponto = document.getElementById('ponto')
    if (confirmacao.value === Senha.value ) {
      ponto.innerHTML="Ok"
      ponto.style.color="#666666"
      
       
     
    } else{
       ponto.innerHTML="Senhas diferentes"
       ponto.style.color="red"

    }


   
    
       

        
  
}
//Q5




const numero1=document.getElementById('numero1')
const numero2=document.getElementById('numero2')
const resultado = document.getElementById('resultado')

function somar(){
   n1 = Number(numero1.value)
   n2= Number(numero2.value)
    let r = n1 + n2
   resultado.innerHTML= `Resultado: A soma de ${n1} + ${n2} é igual a ${r}`
}
function subtrair(){
    n1 = Number(numero1.value)
    n2= Number(numero2.value)
     let r = n1 - n2
    resultado.innerHTML= `Resultado: A subtração de ${n1} - ${n2} é igual a ${r}`
 }
 function multiplicar(){
    n1 = Number(numero1.value)
    n2= Number(numero2.value)
     let r= n1 * n2
    resultado.innerHTML= `Resultado: A multiplicação de ${n1} x ${n2} é igual a ${r}`
 }
 function dividir(){
    n1 = Number(numero1.value)
    n2= Number(numero2.value)
     let r = n1 / n2
    resultado.innerHTML= `Resultado: A divisão de ${n1} : ${n2} é igual a ${r}`
 }


   








