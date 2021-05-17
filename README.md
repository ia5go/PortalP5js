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

A base de dado é carregada a com a função preload() que já da p5js.

```
function preload(){
  entrada=loadJSON('../json/base.json');
}
```

## Galeria criada dinâmicamente

Na galeria, estou usando a p5js e seus métodos para criar dinamicamente os paineis que mostram os projetos. Para isso é necessário a criação de um arquivo sketch.js, mas nenhuma canvas será criada, apenas a execução da montagem dos elementos HTML na página.

A biblioteca p5js conta com uma série de métodos para criação de elementos HTML, estes elementos seguem a classe base p5.Elemente, que já tras consigo alguns de métodos que permitem organização dos elementos dentro da página.

### Mudando de plano

Meu primeiro plano era criar uma classe página para agrupar os paineis da galeria, cada página ocuparia uma posição em um array da classe paginação. A classe paginação iria controlar o atributo css, display, de cada página e apenas uma página estaria visível por vez, seguindo o modelo de carroceu simples que encontramos em diversos sites da internet. Seria necessário que a classe paginação fizesse a distribuição dos paineis para as páginas, e pensando em como fazer isso percebi que a classe página fica sendo um desperdício.

Primeiro, se a paginação vai controlar qual pagina aparece por vez e a distribuição dos conteúdos dentro delas, eu posso deixar isso direto com a classe paginação, controlando apenas os grupos de conteúdo a serem exibidos por vez.

Segundo, uma preocupação que eu tinha era sobre o peso que a página teria por ter tantas canvas funcioando ao mesmo tempo e ainda ter mais carregadas no navegador esperando apenas uma troca de página. Controlando tudo em na classe paginação eu posso, ao invez de tirar esconder e mostrar conteúdos, modificar o que cada painel vai estar mostrando.

### Mudando de plano novamente

A paginação não faz sentido como uma classe pois os botões que ela cria não tem acesso aos métodos que são necessários para funcionar. O botão proxima página precisa receber o ponteiro pro método que modifica qual página está sendo mestrada, mas não pode receber parâmetros, e não encherga os atributos da própria página.

Resolvi isso modificando a estrutura, assim agora as páginas serão conjuntos de paineis, mas a paginação em si será controlada pelo script principal de forma global.

### Execução

#### Classes

Entre planos e replanejamentos, acabei com a criação de duas classes:

##### Painel

Essa classe está preparada para receber um objeto do tipo projeto e transformar os campos em elementos HTML. Ela cria uma section onde aloca o embed que está no objeto, e cria os elementos HTML:

- <h2> para o título;
- <p> para a descrição;
- <h3> para o nome do autor.

O próprio construtuor dessa classe já mostra os conteúdos que ela recebe. E conta com um método hide(), para ser capaz desaparecer da tela, que apenas chama o metodo hide() que todos os elementos DOM recebem na p5js.
NOTE: Necessário falar sobre o método .show(), depois de adicionar na classe.

##### Página

Eu pensei em não utilizar essa classe quando tinha intenção de ter uma classe responsável por toda a paginação. Mas encontrei utilidade por essa página com a ultima mudança que fiz, pois é mais fácil controlar os grupos de paineis se não precisar recontar cada bloco toda vez que for mudar de página.

Essa classe recebe um conjunto de objetos que vão ser usados para criar os paineis com os projetos. Esses objetos serão organizados em um array cujo tanho depende da quantidade de objetos que a janela recebe.

Ela também conta com um metodo hide(), que é responsável chamar o método hide() de cada um dos paineis que ela ordena. Sendo assim, uma página, esconde ou mostra todo um conjunto de paineis com apenas um comando.

NOTE: Necessário falar sobre o método .show(), depois de adicionar na classe.

#### Global

O script que controla a paginação conta com variáveis globais que vão permitir que a página seja controlada.

```
let entrada;      //gardará o retorno do bd
let paginas = []; //array de páginas
let index = 0;    //indice pra controlar qual página aparece por vez
```

Como dito anteriormente (dependencia json), o script carrega a base de dados antes de rodar qualquer instrução atravez da função preload(). Neste momento a variável entrada recebe as informações que vem da base de dados.

Logo depois, na função setup(), temos o bloco de instruções que cria as páginas.

## Considerações

- Gostaria de controlar a execução das canvas na galeria pra evitar gasto de recursos;
- Gostaria de fazer as páginas serem criadas só quando vão ser mostradas ao invez de criar todas de uma vez;

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
