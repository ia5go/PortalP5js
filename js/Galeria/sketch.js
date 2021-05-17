let entrada;
let paginas = [];
let index = 0; //indice pra controlar ql página é mostrada por vez
let proxima;
let anterior;

function preload(){
  //carregando o json
  entrada=loadJSON('../json/base.json');
}

function setup(){
  noCanvas();
  //criando e populando as páginas
  let n=0;
  while(entrada[n]){
    let paineis = [];
    //o 2 abaixo define qnts itens por página
    for(let i = 0; i < 2 && entrada[n]; i++){
      paineis[i] = entrada[n];
      n++;
    }
    paginas[index] = new Pagina(paineis);
    if(index != 0){ //escondendo páginas exceto a 0 
      paginas[index].hide();
    }
    index++; //vira prara a próxima página a ser inicializada
  }
  index = 0; //volta o indice pra 0
  //criando os botões
  anterior = createButton('<< Voltar');
  anterior.mousePressed(voltarPagina);
  anterior.parent('ctrlPg');
  proxima = createButton('Próxima >>');
  proxima.mousePressed(proxPagina);
  proxima.parent('ctrlPg');
}

function proxPagina(){
  if(paginas[index+1]){
    paginas[index].hide();
    index++;
    paginas[index].show();
  }
}

function voltarPagina(){
  if(paginas[index-1]){
    paginas[index].hide();
    index--;
    paginas[index].show();
  }
}

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
    this.autor.parent(this.painel);
  }

  hide(){
    this.painel.hide();
  }
  show(){
    this.painel.style('display', 'grid');
  }
}

class Pagina{
  constructor(obj){
    this.paineis = [];
    for(let i=0; i<obj.length; i++){
      this.paineis[i] = new Painel(obj[i]);
    }
  }

  hide(){
    for(let i=0; i<this.paineis.length; i++){
      this.paineis[i].hide();
    }
  }

  show(){
    for(let i=0; i<this.paineis.length; i++){
      this.paineis[i].show();
    }
  }
}
