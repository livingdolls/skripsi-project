FROM node:18

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install


EXPOSE 3000
CMD ["npm", "run", "dev"]