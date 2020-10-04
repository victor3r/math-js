<h1 align="center">
Math API
</h1>

<p align="center">A Math API disponibiliza uma API REST que permite realizar operações matemáticas de somar e calcular a média aritmética de um vetor de inteiros.</p>

## Tecnologias utilizadas

- **Node Js** — Um interpretador Javascript assíncrono, de código aberto e orientado à eventos
- **Express** - Um micro framework para o Node Js
- **ESlint** - Uma ferramenta de análise de código para identificar problemas de padronização
- **Typescript** - Um superconjunto Javascript que adiciona tipagem a linguagem
- **Jest** — Um framework de testes para Javascript

## Iniciando o servidor

1. Clone esse repositório utilizando `git clone https://github.com/victor3r/math-js.git`
2. Vá para o diretório correto: `cd math-js`
3. Execute `yarn` para instalar as dependências
4. Execute `yarn start` para inicializar o servidor

## Rotas da API

<br>
<div align="center">
<a href="https://insomnia.rest/run/?label=Math&uri=https%3A%2F%2Fgist.github.com%2Fvictor3r%2F322177ed5c4493cc9f113e421f177318" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</div>
<br>

### Somando um vetor de inteiros [POST]

Envie um vetor de inteiros e retorna a soma de todos os elementos do vetor.

#### Dados para envio no POST
| Parâmetro | Descrição |
|---|---|
| `numbers` | String separada por vírgula representando o vetor |

+ Request (application/json)

    + Body

            {
              "numbers": "1,2,3,4"
            }

+ Response 200 (application/json)

    + Body

            {
                "sum": 10
            }

### Calculando a média aritmética de um vetor de inteiros [POST]

Envie um vetor de inteiros e retorna a média aritmética dos elementos do vetor.

#### Dados para envio no POST
| Parâmetro | Descrição |
|---|---|
| `numbers` | String separada por vírgula representando o vetor |

+ Request (application/json)

    + Body

            {
              "numbers": "1,2,3,4"
            }

+ Response 200 (application/json)

    + Body

            {
                "average": 2.5
            }
