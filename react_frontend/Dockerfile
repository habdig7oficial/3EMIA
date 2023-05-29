#docker build -t ac-node-front . && docker run -p 7778:7778 ac-node-front

FROM node:latest 

WORKDIR /usr/src/app

COPY . . 


RUN npm i 

EXPOSE 7778


CMD ["npm", "run", "dev"]