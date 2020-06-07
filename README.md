<p align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://user-images.githubusercontent.com/39415174/83923322-5f890f80-a758-11ea-88fa-9df8c50630b9.png" width="160px" />
</p>

# Ecoleta
![logo](https://user-images.githubusercontent.com/35976070/83960377-8c274f00-a85e-11ea-9081-deb8becc8c1f.jpg)

Projeto desenvolvido durante a primeira [NextLevelWeek](https://nextlevelweek.com/) da [Rocketseat](https://rocketseat.com.br) para aplicar os conceitos de `typescript`, `Node.js`, `ReactJS` e `React Native`.

Trata-se de uma aplicação completa (backend, frontend e mobile) para atender a demanda de logistica da coleta de resíduos. Em outras palavras , em homenagem à semana internacional do meio ambiente que coincidiu com o período da realização da Next Level Week 1.0.

## Recursos Disponíveis
### Backend
* Cadastro de novos pontos de coleta
* Listar pontos de coleta baseado em um filtro
* Listar detalhes de um ponto de coleta específico
* Listar itens recicláveis disponíveis para coleta

### Aplicação Web
* Cadastro de um novo ponto de coleta contendo
  * Nome
  * Email
  * Whatsapp
  * Posição no mapa
  * Cidade/Estato
  * Itens recicláveis coletados
  * Foto do estabelecimento

### Aplicação mobile
* Consulta de pontos de coleta através de filtro por cidade/estado
* Contato via Whatsapp ou E-mail
* Localização do estabelecimento diretamente no mapa
  
[Começando](#começando)&nbsp;&nbsp;|&nbsp;&nbsp;
[Instalação](#instalação)&nbsp;&nbsp;|&nbsp;&nbsp;
[Execução](#execução)&nbsp;&nbsp;|&nbsp;&nbsp;
[Tecnologias](#tecnologias)&nbsp;&nbsp;|&nbsp;&nbsp;
[Preview](#preview)&nbsp;&nbsp;|&nbsp;&nbsp;
[Licença](#licença)  

## Começando
As instruções a seguir são para fornecer uma cópia deste projeto que poderá ser executada na sua máquina local para fins de desenvolvimento e teste.

### Pré Requisitos

* É necessário que você tenha o `Node.js` instalado em sua máquina. 
* Para a aplicação Mobile é necessário instalar o pacote `expo` em sua máquia

## Instalação

Clonando este repositório em sua máquina local e acessaando a pasta do projeto:

```bash
git clone https://github.com/doli82/nlw-01.git
cd nlw-01
```

### Backend
Instalando as dependências do backend da aplicação:

```bash
cd server
npm install
```
### Frontend

Instalando as dependências do frontend da aplicação:

```bash
cd ../web
npm install
```
### Mobile

Instalando as dependências da aplicação mobile:

```bash
cd ../mobile
npm install
```

## Execução
Toda a aplicação pode ser inicializada em ambiente de desenvolvimento com facilidade, seguindo as instruções abaixo:

### Backend
A primeira parte que deve ser executada no ambiente de desenvolvimento é o servidor `node.js`. 

Certifique-se de que está dentro da pasta `server` do projeto em seu terminal e que você já configurou as [variáveis de ambiente](./server/README.md) corretamente, em seguida execute o comando abaixo para inicializá-lo:

```bash
npm run dev
```

### Frontend
Este é o site `ReactJS` onde os pontos de coleta são cadastrados. É necessário que o backend já esteja operacional. 

Certifique-se de que está dentro da pasta `web` do projeto em seu terminal e que você já configurou as [variáveis de ambiente](./web/README.md) corretamente, em seguida execute o comando abaixo para inicializá-lo:

```bash
npm start
```
### Mobile
Nesta parte você irá inicializar a aplicação mobile, escrita com `React Native` onde os pontos de coleta podem ser consultados por cidade. Esta parte funciona independente do Frontend, porém é necessário que o backend já esteja operacional. 

Certifique-se de que está dentro da pasta `mobile` do projeto em seu terminal e que você já configurou as [variáveis de ambiente](./mobile/README.md) corretamente, em seguida execute o comando abaixo para inicializá-lo:

```bash
npm start
```
Após o projeto mobile inicializar, será exibido um `QRCode` no terminal e uma aba dos eu navegador irá carregar o `Metro Bundler`. Neste momento você precisará instalar em seu dispositivo móvel, um aplicativoo chamado `Expo`.
Ele está disponível nas APP Stores:

- [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) na Google Play
- [Expo Client](https://apps.apple.com/br/app/expo-client/id982107779) na Apple Store

Abra em seu smartphone o aplicativo Expo e escaneie o código de barras exibido na inicialização do projeto.

## Tecnologias

* [Node.js](https://nodejs.org/) - Usado para construir o backend (webservice REST) do projeto
* [express](https://expressjs.com/) - Framework Web utilizado no backend
* [knex.js](http://knexjs.org/) - ORM usado no backend para auxiliar no versionamento do banco de dados
* [salite3](https://www.sqlite.org/) - Banco de dados utilisado no backend para peristência dos dados
* [React](https://reactjs.org/) - Usado para construir o frontend (website)
* [React Native](https://reactnative.dev/) - Usado para construir a aplicação Mobile multiplataforma
* [expo](https://expo.io/) - Usado para facilitar o desenvolvimento com `React Native`
* [typescript](https://www.typescriptlang.org/) - Usado para melhorar a integridade do código final e auxiliar o desenvolvimento em equipe

Confira a lista completa de tecnologias utilizadas no arquivo `package.json`, presente na pasta raiz de cada parte do projeto.

Feito com ♥ por [Davilson Junior](https://www.linkedin.com/in/davilson-paulino-da-cunha-junior-23029315a/)
