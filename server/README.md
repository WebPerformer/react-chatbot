# VacBot
Um chatbot informativo para te manter atualizado sobre vacinas e quando toma-las.

## Para começar siga os passos abaixo:

### 1. Instalação dos Pacotes:

* Python 3.6
* PyCharm 2021.2.3
* JDK 17.0.1

### 2. Instalação das dependências

**Após instalar os pacotes vamos criar uma virtual env para trabalhar com o nosso projeto, e para isso precisamos que o pip esteja instalado em sua maquina.**

* Entre no seu CMD e cole o seguinte código: pip install virtualenv virtualenvwrapper-win
* Crie uma variável de ambiente com com seguinte nome: WORKON_HOME
* No valor da variável coloque o seguinte caminho: C:\Users\(nome do seu usuario)\Envs
* De volta ao CMD vamos criar a nossa virtualenv usando o código a seguir: mkvirtualenv chatbotenv(nome da virtual env que você quer)

**Nessa etapa vamos criar um novo projeto usando o Pycharm. Uma observação, na hora de escolher o interpretador, escolha aquele que tenha o nome da virtualenv que você criou anteriormente.**

* Antes de criar o projeto certifique que saiba onde a pasta no projeto se localiza.
* Com o projeto criado, baixe os nossos arquivos que estão aqui no nosso Github e cole na pasta do projeto que criou agora.
* E então vamos para a parte da instalação de dependências.

**Agora vamos instalar as bibliotecas que fazem o projeto funcionar.**

* Abra o terminal na parte inferior do Pycharm e digite os códigos abaixo:
* pip install nltk
* pip install numpy
* pip install keras
* pip install tensorflow
* pip install flask

### 3. Inicialização do projeto

**Para iniciar o projeto devera ter o arquivo app.py dentro do arquivo do projeto que criou.**

* Aperte com o botão direito do mouse em app.py e clique em Run 'app' * Espere executar tudo no terminal
* Abra a porta em que Flask criou para você
* Bom teste!
