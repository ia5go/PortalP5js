let entrada;
function preload(){
  //carregando o json
  entrada=loadJSON('../json/base.json');
  /*o json sempre deve ser carregado no preload pra evitar que algo seja executado antes dele...
  eu havia me esquecido disso e estava tentando rodar carregar o json e usar ele em setup(),
  o retorno ao utilizar ele era sempre undefined mesmo com um log no console mostrando o json funcionando */
}

function setup(){
  noCanvas();

  //criando elementos html que vão ser preenchidos pelo json
  //painel
  let painel = createElement('section');
  painel.parent('pagina');
  painel.class('painel');
  painel.html(entrada[0].Embed);
  //titulo
  let titulo = createElement('h2', entrada[0].Titulo);
  titulo.parent(painel);
  //descrição
  let desc = createP(entrada[0].Descricao);
  desc.parent(painel);
  //autor
  let autor = createElement('h3', entrada[0].Autor);
  autor.parent(painel);

  //createElement(tag, [content]) (pro caso de precisar criar um elemento que ainda não tem dentro das funções prontas da p5js) https://p5js.org/reference/#/p5/createElement
}