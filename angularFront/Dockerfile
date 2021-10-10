FROM node:14

RUN mkdir /frontend 
 
WORKDIR /frontend

RUN npm install -g @angular/cli 

COPY ./frontend /frontend 

RUN npm install 