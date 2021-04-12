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

## Ref

- Execuação do Layout
  https://developer.mozilla.org/pt-BR/docs/Web/CSS/grid

- Fontes e cores
  https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/
  https://developer.chrome.com/docs/devtools/
