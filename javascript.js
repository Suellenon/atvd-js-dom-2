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
    ponto.style.color="blue"
    

      


    

    
     
     
       
     
    } else{
       ponto.innerHTML="Senhas diferentes"
        ponto.style.color="red"
    }


   
    
       

        
  
}
//Q5



// const menos=document.getElementById('subtrair')
// var somar= document.getElementById('somar')
// const multiplicar =document.getElementById('vezes')
// const dividir= document.getElementById('dividir')
   
 

   



   








