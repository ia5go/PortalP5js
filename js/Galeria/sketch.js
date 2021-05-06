let entrada;
let pagina
function preload(){
  //carregando o json
  entrada=loadJSON('https://ia5go.github.io/json/base.json');
  /*o json sempre deve ser carregado no preload pra evitar que algo seja executado antes dele...
  eu havia me esquecido disso e estava tentando rodar carregar o json e usar ele em setup(),
  o retorno ao utilizar ele era sempre undefined mesmo com um log no console mostrando o json funcionando */
}

function setup(){
  noCanvas();
  pagina = new Pagina(entrada);
  
  //console.log(painel);
}

/*Para a classe usada como painel, eu poderia ter apenas criado uma função construtuora, por hábito 
utiloso o modelo "class { cosntructor() }"" */
class Painel{
  constructor(obj){
    //criando elementos html que vão ser preenchidos pelo json
    //painel
    this.painel = createElement('section');
    this.painel.parent('pagina');
    this.painel.class('painel');
    this.painel.html(obj.Embed);
    //titulo
    this.titulo = createElement('h2', obj.Titulo);
    this.titulo.parent(this.painel);
    //descrição
    this.desc = createP(obj.Descricao);
    this.desc.parent(this.painel);
    //autor
    this.autor = createElement('h3', obj.Autor);
    this.autor.parent(this.painel);/*na hora de definir o pai dentro de um objeto é necessário
    indicar this. caso o pai seja um dos elementos do próprio objeto. Quando eu tentei só trazer 
    o código antigo o termo "painel" que era o nome da váriável anterior não funcinou pq agora 
    ela é "this.painel" */

    //createElement(tag, [content]) (pro caso de precisar criar um elemento que ainda não tem dentro das funções prontas da p5js) https://p5js.org/reference/#/p5/createElement
  }
}

/*igualmente ao painel a pagina é simples e poderia ser uma função construtora */
class Pagina{
  constructor(obj){
    this.paines = [];
    for(let i=0; i<5; i++){
      this.paines[i] = new Painel(obj[i]);
    }
  }
}

class Paginacao{
  constructor(obj){

  }
}
