# PortalP5js

Projeto de TCC, criação de um portal de divulgação da biblioteca e projetos P5js.

## Cronograma

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

02-08/05

- [ ] Colocar a primeira dependencia JSON na galeria:
  - [x] Criar o JSON base;
  - [x] Fazer recuperar o json com p5js e criar os elementos html dinâmicamente;
  - [x] Escrever sobre os elementos criados dinamicamente no reademe;
  - [x] Montar esquema de classes que vão controlar essa criação dinâmica:
    - [x] Definir as classes necessárias (acredito que vou precisar criar 3, uma instanciando a outra paginação(pra controlar ql página que aparece e os controles do carroceu), uma pra montar as páginas em si, e uma pra controlar cada painel (paginacao(pagina(painel))));
    - [x] Criar a UML;
- [ ] Codar as classes:
  - [x] Painel;
  - [ ] Página;
  - [ ] Paginação;
- [ ] Colocar tudo que arquivo principal;
- [ ] Enviar relatório ao professor;

09-15/05

- [ ] Fazer a ligação com FireBase:
  - [ ] Criar e pupular projeto no firebase;
  - [ ] Integrar ao portal;
- [ ] Colocar tudo que arquivo principal;
- [ ] Enviar relatório ao professor;

16-22/05

## Criação de protótipo de nível médio

Nesta etapa do projeto estou criando o layout sem dependencias de fonte de dado e com o conteúdo limitado.

### Fontes e cores

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

### Execuação do Layout

#### Geral

- Para o layout do decidi utilizar o css grid como ferramenta principal. Por ser uma ferramenta versátil, moderna e combinar com a forma que estou pensando esse portal.
- NOTE: Esse é na vdd um modelo de alto nível sem dependencias (conversar sobre isso com o orientador);

#### Footer

- Como o footer segue o msm padrão em todas as páginas decidi separar o css dele.

#### Home

- Executado seguindo o que foi defino no protótipo de baixa fidelidade;
- Quero adicionar uma canvas com animação no header.

#### Galeria

- Executado seguindo o que foi defino no protótipo de baixa fidelidade;
- Percebi que não defini a aplicação de uma nav, mas adicionei nessa versão por motivos de precisar de um caminho para home e outras coisas que talvez eu ainda não tenha pensado;
- Ainda tenho que decidir como será o controle de paginação;
- Falta um fundo para o header;

## Adicionando dependências de dados

A ideia agora é a desenvolver uma base de dados para onde guardar os projetos que serão mostrados na galeria. Decidi fazer isso por partes, começando com uma dependencia JSON que vai ser a principal, já que é com ela que vou tornar funcional o dinamismo da galeria. Depois que estiver funcionando bem o próximo passo será trabalhar com o Firebase.

### Dependencia JSON

- A primeira dependência json conta com um array com alguns objetos que contam com Título, Descrição, Embed e Autor. Estes são os campos necessários para criação de um painel de projeto.

- A conexão e recebimento do json é feita utilizando a própria p5js, atraves da função loadJSON() que recebe um caminho como parâmetro e retorna um objeto json. A biblioteca p5js ainda nos dá uma função de ambiente, chamada preload(), que garante que algo seja carregado antes de executar o resante do código javascript.

## Galeria criada dinâmicamente

Na galeria, estou usando a p5js e seus métodos para criar dinamicamente os paineis que mostram os projetos. Para isso é necessário a criação de um arquivo sketch.js, mas nenhuma canvas será criada, apenas a execução da montagem dos elementos HTML na página.

A biblioteca p5js conta com uma série de métodos para criação de elementos HTML, estes elementos seguem a classe base p5.Elemente, que já tras consigo alguns de métodos que permitem organização dos elementos dentro da página.

## Considerações

- Gostaria de controlar a execução das canvas na galeria pra evitar gasto de recursos;

## Ref

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

- Galeria criada dinâmicamente
  https://p5js.org/reference/#/p5.Element
  https://p5js.org/reference/#group-DOM
