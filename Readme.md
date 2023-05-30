# Processo de uso 


- Instale o [Elixir](https://elixir-lang.org/install.html) ou o [Docker](https://www.docker.com/) 

- Va até a pasta do backend

- Build o docker com o comando docker build -t ac-elixir-back . && docker run -p 7777:7777 ac-elixir-back

- Ou manualmente com o elixir

*mix local.hex --force*

*mix deps.get* 

*mix run --no-halt*

- Va para pasta do Front e rode o npm 

*npm run dev*

- Por padrão o app estará disponível na porta 7778 e o backend em 7777