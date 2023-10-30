# QOppa Challenge - Solução

**Objetivo do desafio**: Implementar uma página de cadastro de usuários e enviar
os dados de cadastro por meio de um JSON em uma requisição HTTP do tipo POST no
body da requisição.

### Preview

![Hero Image](gitub/hero.png 'a title')

### Ponto de atenção

Ao tentar realizar a submissão do formulário via POST HTTP no recurso `/singUp`
ocorreu o erro de bloqueio **Redirect has been blocked by CORS policy**, logo
foi necessário realizar o tratamento disto no backend/na api com adição do
pacote <a href="https://www.npmjs.com/package/cors" target="_blank">cors</a>
para permitir solicitações de origem da solução

### Ferramentas utilizadas

- <a href="https://axios-http.com/" target="_blank">Axios</a>
- <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
- <a href="https://react.dev/" target="_blank">ReactJS</a>
- <a href="https://tanstack.com/" target="_blank">React Query</a>
- <a href="https://www.react-hook-form.com/" target="_blank">React Hook Form</a>
- <a href="https://zod.dev/" target="_blank">Zod</a>

### O porquê das ferramentas?

- **Validação de formulário**: o casamento do **zod + react hook form** nos
  ajuda a ter um controle melhor das validações de nossos campos de formulário,
  proporcionando uma experiência de desenvolvimento mais robusta e segura
  garantindo a integridade dos dados, reduzindo erros e tornando o código mais
  confiável e fácil de manter.
- **Estilização personalizável**: a boa relação **Shadcn UI + O Tailwind css**
  facilita a personalização e a manutenção de estilos, permitindo ajustes do
  design por meio de configurações e classes predefinidas.
- **Gerenciamento simples**: o **react query** simplifica o gerenciamento de
  dados em aplicativos web, tornando a integração com APIs e o cache de dados
  mais eficiente e fácil de manter. Oferecendo um controle declarativo e
  escalável sobre os dados, melhorando a experiência de desenvolvimento.
- **Consumo de APIs**: com o axios realizamos requisições HTTP em aplicativos
  web, oferecendo recursos avançados para uma comunicação eficiente com
  servidores.

### Como executar?

> Necessário possuir o gerenciador de pacotes/dependências
> <a href="https://pnpm.io/pt/" target="_blank">pnpm</a> em sua máquina

- Navegar até a pasta /web na raiz do projeto
- Instale as dependências com `pnpm install`
- Execute o projeto com `pnpm dev`
- Abra a url exibida `http://localhost:5173` em seu navegador preferido.
