# PortalP5js

Projeto de TCC, criação de um portal de divulgação da biblioteca e projetos P5js.

# Cronograma

25/04-01/05

- [x] Terminar o layout de auto nível:
  - [x] Colocar os botões que faltam nos paineis na Home;
  - [x] Colocar a canvas no header da Home;
- [x] Colocar tudo que arquivo principal:
  - [x] Colocar os prints das paginas interias;
        https://developers.google.com/web/updates/2016/04/devtools-digest-command-menu
        https://canaltech.com.br/software/como-tirar-print-de-pagina-no-chrome-sem-instalar-programas/
  - [x] Fazer a explicação das coisas escritras nesse readme;
- [x] Enviar relatório ao professor;

02-17/05

- [x] Colocar a primeira dependencia JSON na galeria:
  - [x] Criar o JSON base;
  - [x] Fazer recuperar o json com p5js e criar os elementos html dinâmicamente;
  - [x] Escrever sobre os elementos criados dinamicamente no reademe;
  - [x] Montar esquema de classes que vão controlar essa criação dinâmica:
    - [x] Definir as classes necessárias (acredito que vou precisar criar 3, uma instanciando a outra paginação(pra controlar ql página que aparece e os controles do carroceu), uma pra montar as páginas em si, e uma pra controlar cada painel (paginacao(pagina(painel))));
    - [x] Criar a UML;
- [x] Codar as classes:
  - [x] Painel;
  - [x] Página;
- [x] Colocar tudo que arquivo principal;

18-31/05

- [x] DBaaS - O que é?
- [x] Firebase - O que é?
- [x] Tipos de bd no firebase e qual usarei;
- [ ] Fazer a ligação com FireBase:
  - [ ] Criar e pupular projeto no firebase;
  - [ ] Integrar ao portal;
- [ ] Colocar tudo que arquivo principal;
- [ ] Enviar relatório ao professor;

16-22/05

# Criação de protótipo de nível médio

Nesta etapa do projeto estou criando o layout sem dependencias de fonte de dado e com o conteúdo limitado.

## Fontes e cores

- Decidi que vou seguir o padrão do site oficial da biblioteca https://p5js.org/

  - Para descobrir a fonte usada no site utilizei as ferramentas de desenvolvedor do navegador. Ao dar inspecionar no texto do site é possível visualizar os atributos do css dos elementos.

  - Para as cores, me interessei no tom de rosa utilizado nos links, botões e na logo do site. Utilizando as mesmas ferramentas de desenvolvimento do navegador, achei a informação de cor de uma ancora.

- Informações coletadas:

  - Fonte:

  ```
    html{
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    }

    body {
    font-family: Times;
    font-weight: 400;
    font-size: 1em
    line-height: 1.45;
    }
  ```

  - Cor:

  ```
    a.disabled {
    color: #ed225d;
    }
  ```

## Execuação do Layout

### Geral

- Para o layout do decidi utilizar o css grid como ferramenta principal. Por ser uma ferramenta versátil, moderna e combinar com a forma que estou pensando esse portal.
- NOTE: Esse é na vdd um modelo de alto nível sem dependencias (conversar sobre isso com o orientador);

### Footer

- Como o footer segue o msm padrão em todas as páginas decidi separar o css dele.

### Home

- Executado seguindo o que foi defino no protótipo de baixa fidelidade;
- Quero adicionar uma canvas com animação no header.

### Galeria

- Executado seguindo o que foi defino no protótipo de baixa fidelidade;
- Percebi que não defini a aplicação de uma nav, mas adicionei nessa versão por motivos de precisar de um caminho para home e outras coisas que talvez eu ainda não tenha pensado;
- Ainda tenho que decidir como será o controle de paginação;
- Falta um fundo para o header;

# Adicionando dependências de dados

A ideia agora é a desenvolver uma base de dados para onde guardar os projetos que serão mostrados na galeria. Decidi fazer isso por partes, começando com uma dependencia JSON que vai ser a principal, já que é com ela que vou tornar funcional o dinamismo da galeria. Depois que estiver funcionando bem o próximo passo será trabalhar com o Firebase.

## Dependencia JSON

- A primeira dependência json conta com um array com alguns objetos que contam com Título, Descrição, Embed e Autor. Estes são os campos necessários para criação de um painel de projeto.

- A conexão e recebimento do json é feita utilizando a própria p5js, atraves da função loadJSON() que recebe um caminho como parâmetro e retorna um objeto json. A biblioteca p5js ainda nos dá uma função de ambiente, chamada preload(), que garante que algo seja carregado antes de executar o resante do código javascript.

A base de dado é carregada a com a função preload() que já da p5js.

```
function preload(){
  entrada=loadJSON('../json/base.json');
}
```

## Dependencia Firebase

### Database as a Service

O conceito herda do paradigma de _Software as a Service_ (SaaS), que é basicamente a ideia de implementar softwares em servidores e oferecer ao cliente a utlização por meio de navegadores, assim o cliente não precisa se preocupar com instalação e manutenção de software e hardware para utilizar certo serviço. É seguindo esse paradigma que é possível que um usuário abra seu navegador, entre em um servidor de email (GMail, Outlook, Yahool), e acesse suas mensagens sem se preocupar com o estado da maquina ou a versão do programa que permite acesso aqueles dados.

Levando isso para o campo de bancos de dados, temos _Database as a Service_ (DBaaS), _Banco de adaos como serviço_ em português. Esse tipo de serviço permite que desenvolvedores de software se preocupem menos com a infraestrutura necessária para manter um banco de dados em funcionamento.

Criar e manter um banco de dados é um ponto de alto custo financeiro, com demanda de maquinas de alta performance e captal humano especializado. A mesma infra estrutura também pode acabar não sendo utilizada completamente.

Com um DBaaS um cliente pode pagar pelo que usa, não pelo que poderá ou não usar no futuro. Criando uma aumento mais organico nos custos de um projeto, pois a capacidade do banco de dados segue uma demanda real, e pode ser aumentada facilmente com upgrades em pacotes de serviço.

### Firebase

Firebase é uma plataforma de serviços backend que hoje pertence a Google. Entre os seus serviços estão: Banco de dados, armazenamento em nuvem, autenticação, apremdizado de máquina e outros.

A escolha por usar essa plataforma veio da curiosiade que surgiu quando ouvi sobre ela e do interesse em trabalhar um banco de dados que segue um paradigma diferente do que eu vi até o momento.

O Firebase oferece dois bancos de dados baseados em nuvem:

**Cloud Firestore:** novo banco de dados para desenvolvimetno de aplicativos moveis. Construido sobre o _Realtime Database_ e conta com um novo modelo de dados, baseado em guardar dados em arquivos.

**Realtime Database:** banco de dados original do Firebase, trabalha com modelo de dados em formato JSON.

Ambos serviços oferencem uso gratuito até algum nível, e plano pago por uso. Ou seja, em ambos, o custo segue o uso real da aplicação. Optei por trabalhar com o _Realtime Database_ pois minha aplicação é pequena e um sistema de dados em arvore JSON já vai ser mais simples de controlar.

### Integrando Firebase ao portal P5js

NEXT:

1 Criar o projeto;
2 Alimentar o bd;
3 Integrar o aplicação;

# Galeria Dinâmica

Na galeria, estou usando a p5js e seus métodos para criar dinamicamente os paineis que mostram os projetos. Para isso é necessário a criação de um arquivo sketch.js, mas nenhuma canvas será criada, apenas a execução da montagem dos elementos HTML na página.

A biblioteca p5js conta com uma série de métodos para criação de elementos HTML, estes elementos seguem a classe base p5.Elemente, que já tras consigo alguns de métodos que permitem organização dos elementos dentro da página.

## Mudando de plano

Meu primeiro plano era criar uma classe página para agrupar os paineis da galeria, cada página ocuparia uma posição em um array da classe paginação. A classe paginação iria controlar o atributo css, display, de cada página e apenas uma página estaria visível por vez, seguindo o modelo de carroceu simples que encontramos em diversos sites da internet. Seria necessário que a classe paginação fizesse a distribuição dos paineis para as páginas, e pensando em como fazer isso percebi que a classe página fica sendo um desperdício.

Primeiro, se a paginação vai controlar qual pagina aparece por vez e a distribuição dos conteúdos dentro delas, eu posso deixar isso direto com a classe paginação, controlando apenas os grupos de conteúdo a serem exibidos por vez.

Segundo, uma preocupação que eu tinha era sobre o peso que a página teria por ter tantas canvas funcioando ao mesmo tempo e ainda ter mais carregadas no navegador esperando apenas uma troca de página. Controlando tudo em na classe paginação eu posso, ao invez de tirar esconder e mostrar conteúdos, modificar o que cada painel vai estar mostrando.

## Mudando de plano novamente

A paginação não funciona como uma classe pois os botões que ela cria não tem acesso aos atributos necessários para que os métodos funcionem. O botão proxima página, por exemplo, precisa de acesso ao indice geral que define qual página está sendo mostrada, mas como estava um atributo interno da classe para esse indice o método do botão não conseguia acessá-lo. Também faltou acesso ao objeto que guardava as informações da base de dados. Procurei um pouco sobre como resolver o problema, mas acabei não achando uma forma.

Percebi que o erro poderia ser resolvido colocando a variávei para controle de indice global, já que eu ainda tinha acesso ao array global com os dados para preencher a pagina. Como não faz sentido, para mim, uma classe que depende de uma variável global de um programa resolvi modificar a estrutura e tirar classe paginação, assim terei páginas que são conjuntos de paineis, mas a paginação em si será controlada pelo script principal de forma global.

## Execução

### Classes

Tendo em vista o planejamento e replanejamento anteriores, as seguintes classes serão utilizadas no sistema:

#### Painel

Essa classe está preparada para receber um objeto do tipo projeto e transformar os campos em elementos HTML. Ela cria uma section onde aloca o embed, um iframe que está no objeto, e cria os seguintes elementos HTML:

- h2 para o título;
- p para a descrição;
- h3 para o nome do autor.

O próprio construtuor dessa classe já mostra os conteúdos que recebe quando é instanciada.

Esta classe conta com um método hide(), que permite que um painel seja escondido da tela. Este método chama o metodo hide(), que é implementado na classe base p5.Element que todos os elementos DOM erdam na p5js, para a section alterando seu atributo "display" no css para "none".

A classe painel também conta com um metodo show(), mas este não trabalha com o método show() da p5js pois isso daria o valor "block" ao atributo display da section. O que quero aqui é tornar o section novamente em um grid. Assim o método show() da classe precisa chamar pelo método style() da section e definir redefinir o estilo como desejado.

#### Página

Eu pensei em não utilizar essa classe quando tinha intenção de ter uma classe responsável por toda a paginação. Mas encontrei utilidade por essa página com a ultima mudança que fiz, pois é mais fácil controlar os grupos de paineis se não precisar recalcular cada grupo de paineis cada vez que for mudar de página.

Essa classe recebe um conjunto de objetos que vão ser usados para criar os paineis com os projetos. Esses objetos serão organizados em um array cujo tanho depende do tamanho de arrays de objetos que a janela recebe.

A classe página também conta com um metodo hide(), que é responsável chamar o método hide() de cada um dos paineis que que está dentro dela. Sendo assim, uma página, esconde ou mostra todo um conjunto de paineis com apenas um comando. Já o método show() funciona da mesma forma, chamando o método show() de cada painel da página.

### Global

O script que controla a paginação conta com variáveis globais que vão permitir que a página seja controlada.

```
let entrada;      //guardará o retorno do bd
let paginas = []; //array de páginas
let index = 0;    //indice pra controlar qual página aparece por vez
let proxima;      //botão de avançar
let anterior;     //botão de recuar
```

Como dito anteriormente (Dependencia json), o script carrega a base de dados antes de rodar qualquer instrução atravez da função preload(). Neste momento a variável entrada recebe as informações que vem da base de dados.

Logo depois, na função setup(), temos o bloco de instruções que cria as páginas e os controles de avançar e retornar.
Todas as páginas, exceto a primeira, são escondidas logo depois de criadas com o comando:

```
if(index != 0){
      paginas[index].hide();
}
```

As funções de avançar e voltar página são bem simples, elas verificam se há uma página adiante, ou anterior, se houver a página atual é escondida e a página que deve ser mostrada aparece. Como pode ser visto a seguir:

```
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
```

# Considerações

- Gostaria de controlar a execução das canvas na galeria pra evitar gasto de recursos;
- Gostaria de fazer as páginas serem criadas só quando vão ser mostradas ao invez de criar todas de uma vez;

# Ref

- Execuação do Layout

  - Geral
    https://wordpress.tv/2017/06/30/morten-rand-hendriksen-css-grid-changes-everything-about-web-layouts/ (como referenciar esse link?)
    https://developer.mozilla.org/pt-BR/docs/Web/CSS/grid

  - Fontes e cores
    https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/
    https://developer.chrome.com/docs/devtools/

- Adicionando dependências de dados

  - Dependencia JSON
    MCCARTHY, Lauren; REAS, Casey; FRY, Ben. Getting started with P5. js: Making interactive graphics in JavaScript and processing. Maker Media, Inc., 2015.

  - DBaaS
    LEHNER, Wolfgang; SATTLER, Kai-Uwe. Database as a service (DBaaS). In: 2010 IEEE 26th International Conference on Data Engineering (ICDE 2010). IEEE, 2010. p. 1216-1217.

  - Firebase
    https://flutter.dev/docs/development/data-and-backend/firebase
    https://firebase.google.com/docs/database/rtdb-vs-firestore?authuser=0

- Galeria criada dinâmicamente
  https://p5js.org/reference/#/p5.Element
  https://p5js.org/reference/#group-DOM
