const btnFiltrar = document.querySelector('.filtrar');

btnFiltrar.addEventListener('click',(e)=>{
  const botoes =  document.querySelectorAll('.btn-pet');
  for(let btn of botoes){
    btn.classList.toggle('btn-flex');
  }
  const div = document.querySelector('.div');
  div.classList.toggle('responsive')

})

const btnCat= document.querySelector('.cat');
const itens = document.querySelectorAll('.img-content');


function filtraItens(){
const array  = [];

itens.forEach((e)=>{
   array.push(e);
})
array.map((e)=>{
    if(e.classList.contains('cat'))e.classList.toggle('active');
    if(e.classList.contains('cat'))e.classList.remove('inative');
    if(!e.classList.contains('cat'))e.classList.add('inative');

})
}

btnCat.addEventListener('click',(e)=>{
 filtraItens()
});

function Filtraitens2(){
  const array  = [];
  itens.forEach((e)=>{
     array.push(e);
  })
  array.map((e)=>{
    if(e.classList.contains('cat'))e.classList.toggle('inative');
    if(!e.classList.contains('cat'))e.classList.remove('inative');
    if(!e.classList.contains('cat'))e.classList.add('active');

})
}







const btnDog =  document.querySelector('.dog');
btnDog.addEventListener('click',(e)=>{
 Filtraitens2()
})

const btnReset = document.querySelector('.reset');
btnReset.addEventListener('click',(e)=>{
  reset()
})

function reset(){
  const array  = [];
  itens.forEach((e)=>{
     array.push(e);
  });
array.map((e)=>{
 
    if(e.classList.contains('inative'))e.classList.add('active');
    if(e.classList.contains('inative'))e.classList.remove('inative');

  })
}

document.addEventListener('scroll',(e)=>{
  console.log(window.pageYOffset)
})
