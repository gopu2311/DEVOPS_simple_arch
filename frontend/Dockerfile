FROM node:18-alpine AS builder
WORKDIR /app
COPY package*json ./
RUN npm install
COPY . .
COPY .env.docker .env.local

RUN npm run build 

FROM node:18-alpine 
COPY --from=builder  /app ./
EXPOSE 3000
CMD [ "npm" ,"start" ]