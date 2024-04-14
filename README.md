# Loja Online | Teste Técnico MKS

> Desenvolvido por: **[Henrique Garcia](https://www.linkedin.com/in/henrique-garcia-dev/)** <br/>
> Empresa: **[MKS Sistemas](https://www.mkssistemas.com.br/)** <br/>
> Data de início: **13/04/2024** <br/>
> Data de término: **14/04/2024**

## Overview

**Acesse a aplicação [clicando aqui (Ctrl + Click)](https://store-mks-test.vercel.app/)**

Esta é uma aplicação web desenvolvida como parte do desafio técnico para a empresa MKS Sistemas. O objetivo principal é consumir a API REST de produtos fornecida pela empresa e exibir a lista de produtos em uma loja online. Além disso, a aplicação deve permitir aos usuários adicionar produtos ao carrinho e aumentar a quantidade de cada produto selecionado.

## Funcionalidades

- Exibição da lista de produtos da loja, consumindo a API REST fornecida.
- Utilização de um shimmer/skeleton enquanto os produtos estão em processo de carregamento.
- Carrinho de compras contendo todos os produtos selecionados, com opção de aumentar a quantidade de cada produto.
- Interface responsiva para garantir uma experiência de usuário consistente em diferentes dispositivos.

## Tecnologias e Bibliotecas Utilizadas

- React (Next.js)
- TypeScript
- React-query
- SASS
- Framer-motion
- Jest (com testing-library)

## Instalação e Uso

1. Clone o repositório:

   > `git clone https://github.com/henriquegarcia-web/store-mks-test.git`

2. Navegue até o diretório do projeto:

   > `cd store-mks-test`

3. Para instalar as dependências do cliente (front-end):

   > Na raiz do projeto: `npm install` ou `yarn`

4. Crie um arquivo .env na raiz com os dados:

   > `NEXT_PUBLIC_API_BASE_URL=https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1`

5. Inicie o servidor de desenvolvimento:

   > Dentro da raiz: `npm run dev` ou `yarn dev`

6. Abra seu navegador da web:

   > Acesse `http://localhost:3000` para visualizar a aplicação.

7. Para rodar os testes:

   > Dentro da raiz: `npm run test` ou `yarn test`

## Agradecimentos

- Agradecimento especial à empresa **[MKS Sistemas](https://www.mkssistemas.com.br/)** por disponibilizar o teste.
