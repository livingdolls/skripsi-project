FROM node:18-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install


EXPOSE 5173
CMD ["npm", "run", "dev"]