# 🍅 Pomodoro Timer

Um aplicativo móvel simples e funcional, desenvolvido com **React Native** e **Expo**, que implementa a técnica Pomodoro para auxiliar na concentração e produtividade durante os estudos.

![Badge de Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)

## 📖 Descrição do Projeto

Este miniaplicativo de tela unica que foi desenvolvido como parte da **primeira nota da disciplina Programação para Dispositivos Móveis**.  
Seu objetivo é aplicar os conceitos iniciais de **React Native**, **componentização** e **gerenciamento de estado**, através da criação de um cronômetro baseado na técnica Pomodoro.

O **Pomodoro Timer** permite que o usuário inicie, pause e reinicie um contador de tempo de foco.  
Quando o tempo chega a zero, o aplicativo emite um som de alarme e alterna automaticamente para o modo de descanso.

## 📱 Tela do Aplicativo

O aplicativo é composto por uma unica tela principal que alterna entre os dois estados:

* **1. Estado de Foco:** Mostra o tempo restante da sessão de foco, com botões para iniciar, pausar e reiniciar o cronômetro.  
* **2. Estado de Descanso:** Ativada automaticamente após o término do tempo de foco, exibindo o tempo de pausa antes do próximo ciclo.

## ✨ Funcionalidades

Funcionalidades implementadas neste projeto:

* [✔] Contagem regressiva de tempo para o modo de foco.  
* [✔] Alternância automática entre os modos **Foco** e **Descanso**.  
* [✔] Reprodução de som de alarme ao atingir zero.  
* [✔] Botões de **Iniciar**, **Pausar** e **Reiniciar**.  
* [✔] Interface simples e intuitiva.  
* [✔] Organização do código em componentes (`src/components`) e estilos (`src/styles`).  
* [✔] Utilização da biblioteca **expo-audio** para tocar o som de alarme.

## 🛠️ Tecnologias Utilizadas

* **[React Native](https://reactnative.dev/):** Framework principal para o desenvolvimento mobile.  
* **[Expo](https://expo.dev/):** Ferramenta que simplifica o processo de desenvolvimento e execução.  
* **[expo-av](https://docs.expo.dev/versions/latest/sdk/av/):** Biblioteca usada para reprodução do som de alarme.  
* **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Linguagem base utilizada no projeto.

## 🚀 Como Executar o Projeto

1. Clone este repositório:
    ```bash
    git clone https://github.com/Kai0ult/pomodoro-timer.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd pomodoro-timer
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```
    *ou*
    ```bash
    yarn install
    ```

4. Inicie o servidor do Expo:
    ```bash
    npx expo start
    ```

5. Escaneie o QR Code com o aplicativo **Expo Go** no seu celular.

## 👨‍💻 Autor

Feito por **Caio Souza**.  

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Kai0ult)
