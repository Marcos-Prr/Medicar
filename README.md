# Medicar
APP em DjangoREST e Angular para agendar consultas médicas

Para detalhes do Desafio Segue o link [link](https://github.com/Intmed-Software/desafio).

## Backend - Django REST
#### Requisitos

 - Python 3 
 - Docker (caso nao queira utilizar virtual env)
 - Angular CLI (frontend)
 - npm ou yarn (instalação de dependencias do front)

 
#### Instruções para executar via virtual env
Após clonar o projeto, entre na pasta  e execute os seguintes comandos:

      #cria o ambiente virtual
      python -m venv venv
	  
	  #ativa o ambinente (Windows - Powershell)
	  .\venv\Scripts\activate.ps1
	  
	  #caso o Powershell nao execute o script  abra o powershell com opções de admin e execute o seguinte comando 
	  set executionpolicy unrestricted

	  #seleciona 'S',aperte enter e execute o script activate novamente
	  
	  #instale as dependências (Windows - Powershell)
	  python -m pip install -r requirements.txt
	  
	  #Django - Rodando o projeto (Windows - Powershell)
	  python .\manage.py makemigrations
	  python .\manage.py migrate
	  python .\manage.py runserver
	  
	

#### Instruções para executar via Docker
Após clonar o projeto, vá até a pasta do mesmo e execute os comandos:

	  #Construindo imagem com as dependencias de acordo com o arquivo requirements.txt
	  docker build .

	  #build das imagens que serão utilizadas
	  docker-compose build

	  #iniciando container
	  docker-compose up app

	
### Estrutura 
O projeto foi dividido de forma que cada app seja uma etapa do gerenciamento das consultas, os app's são:

- agenda
- consulta
- medico
- usuario

### Endpoints
Os endpoints estão de acordo com o proposto no desafio, utilizando token authentication onde for necessário e a interface administrativa com suas devidas funcionalidades.

## Frontend - Angular


O frontend segue as especificações listadas neste [link](https://github.com/Intmed-Software/desafio/tree/master/frontend).

## Instalando Angular CLI

Abra seu terminal e execute o seguinte comando:
- 	npm install @angular/cli

### Instruções para executar local

Após realizar o clone do projeto, entre na diretório"frontend/medicar*" e execute os comandos abaixo:

    # yarn
    yarn install
    
    # npm
    npm install
	
	# Após baixar as dependências, execute o projeto
	ng serve --o

O front estará rodando na  porta **4200** e o backend na porta **8000** (porta padrão do Django).

### Ações da aplicação

A aplicação possui as seguintes Ações:
- Login 
- Visualizar consultas
- Criar/excluir consultas
- Registrar novo usuário


O login do usuário só poderá ser utilizado o **username** .
No registro de um novo usuário foram incluídos os campos de "Nome" e "Sobrenome" para serem apresentados na tela de visualizar consultas do usuário.
