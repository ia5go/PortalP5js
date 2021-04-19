# PortalP5js

Projeto de TCC, criação de um portal de divulgação da biblioteca e projetos P5js.

## Criação de protótipo de nível médio

Nesta etapa do projeto estou criando o layout sem dependencias de fonte de dado e com o conteúdo limitado.

### Fontes e cores

- Decidi que vou seguir o padrão do site oficial da biblioteca https://p5js.org/

  - Para descobrir a fonte usada no site utilizei as ferramentas de desenvolvedor do navegador. Ao dar inspecionar no texto do site é possível visualizar os atributos do css dos elementos.

  - Para as, me interessei no tom de rosa utilizado nos links, botões e na logo do site. Utilizando as mesmas ferramentas de desenvolvimento do navegador, achei a informação de cor de uma ancora.

- Informações coletadas:

  - Fonte:
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

  - Cor:
    a.disabled {
    color: #ed225d;
    }

### Execuação do Layout

#### Geral

- Para o layout do decidi utilizar o css grid como ferramenta principal. Por ser uma ferramenta versátil, moderna e combinar com a forma que estou pensando esse portal.
- NOTE: Falta definir a aparencia dos links e botões:
  - Os links provavelemnte serão consistentes entre todas as págnias, então talvez eu faço um css exclusivo para eles, botões talvez entrem na mesma situação.
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

## Ref

- Execuação do Layout

  - Geral
    https://wordpress.tv/2017/06/30/morten-rand-hendriksen-css-grid-changes-everything-about-web-layouts/ (como referenciar esse link?)
    https://developer.mozilla.org/pt-BR/docs/Web/CSS/grid

- Fontes e cores
  https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/
  https://developer.chrome.com/docs/devtools/
