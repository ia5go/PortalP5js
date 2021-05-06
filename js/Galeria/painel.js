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
    this.titulo.parent(painel);
    
    //descrição
    this.desc = createP(obj.Descricao);
    this.desc.parent(painel);
    //autor
    this.autor = createElement('h3', obj.Autor);
    this.autor.parent(painel);
    //createElement(tag, [content]) (pro caso de precisar criar um elemento que ainda não tem dentro das funções prontas da p5js) https://p5js.org/reference/#/p5/createElement
  }
}

class Pagina{
  constructor(obj){
    for(let i=0; i<5; i++){
      this.paineis[i] = new Painel(obj[i]);
    }
  }
}