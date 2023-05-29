# docker build -t ac-elixir-back . && docker run -p 7777:7777 ac-elixir-back

FROM elixir:latest 

WORKDIR /usr/src/app 

COPY . . 

RUN mix local.hex --force

RUN mix local.rebar --force

RUN mix deps.get


EXPOSE 7777


CMD ["mix", "run", "--no-halt"]