
//Q1

let nome = prompt('Qual seu nome?')

const nome_place = document.createElement('h1')
nome_place.innerHTML= nome
 nome_place.style.textAlign= "center"
 document.querySelector('body').appendChild( nome_place)

const bem_vindo = document.getElementsByClassName('bem-vindo')

 


 //Q2
 const ligar = document.getElementById('#ligar')
 const desligar = document.getElementById('#desligar')
 const lamp = document.getElementById('#lamp')
 
 function lampLigada(){
    lamp.src = './imgs/lamp.lig.png';

 }
 function lampDesligada(){
    lamp.src = './imgs/pic_bulboff.gif';
   

 }

 ligar.addEventListener('click', lampLigada );
 desligar.addEventListener('click', lampDesligada);


 //Q3

 