let entrada;
let paginas = [];
let index = 0; //indice pra controlar ql página é mostrada por vez
let proxima;
let anterior;
let db;

function preload() {
  /*NOTE: add os valores do arquivo json dentro do firebase... fiz isso pelo js
  pq o firebase coloca um valor de chave diferente nos objetos salvos dentro do bd
  logo não posso me acostumar com indices crescentes simples... 
  Also */

  // entrada = loadJSON('../json/base.json');
  // let i = 0;
  // while(entrada[i]){
  //   base.push(entrada[i]); 
  //   i++;
  // }
}


function setup() {
  noCanvas();
  // NOTE: Firebase configuration
  var firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    databaseURL: DATABASEURL,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID,
    measurementId: MEASUREMENTID
  };
  // NOTE: Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // NOTE: Pegando o obj db completo (database service)
  //ref: https://firebase.google.com/docs/reference/js/firebase.database
  dbService = firebase.database();
  // NOTE: Pegando o nó 'projs'
  base = dbService.ref('projs');
  // NOTE: Resgata os valores do servidor para montar a página
  base.once('value', gotData, gotErr);
  //criando os botões de paginação 
  anterior = createButton('<< Voltar');
  anterior.mousePressed(voltarPagina);
  anterior.parent('ctrlPg');
  proxima = createButton('Próxima >>');
  proxima.mousePressed(proxPagina);
  proxima.parent('ctrlPg');
}

function gotData(data) {
  //entrada recebe uma cópia dos dados
  entrada = data.val();
  //keys é um array recebe chaves de identificação para cada instancia dentro de entrada
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  let keys = Object.keys(entrada);

  for (let n = 0; n < keys.length;) {
    let paineis = [];
    //o 2 abaixo define qnts itens por página
    for (let i = 0; i < 2 && keys[n]; i++) {
      let k = keys[n];
      paineis[i] = entrada[k];
      n++;
    }
    paginas[index] = new Pagina(paineis);
    if (index != 0) { //escondendo páginas exceto a 0 
      paginas[index].hide();
    }
    index++;
  }
  index = 0; //volta o indice pra 0
}

function gotErr(err) {
  console.log('Error!');
  console.log(err);
}

function proxPagina() {
  if (paginas[index + 1]) {
    paginas[index].hide();
    index++;
    paginas[index].show();
  }
}

function voltarPagina() {
  if (paginas[index - 1]) {
    paginas[index].hide();
    index--;
    paginas[index].show();
  }
}

class Painel {
  constructor(obj) {
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

  hide() {
    this.painel.hide();
  }
  show() {
    this.painel.style('display', 'grid');
  }
}

class Pagina {
  constructor(obj) {
    this.paineis = [];
    for (let i = 0; i < obj.length; i++) {
      this.paineis[i] = new Painel(obj[i]);
    }
  }

  hide() {
    for (let i = 0; i < this.paineis.length; i++) {
      this.paineis[i].hide();
    }
  }

  show() {
    for (let i = 0; i < this.paineis.length; i++) {
      this.paineis[i].show();
    }
  }
}
