FROM node:14
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

ENV NODE_ENV=development PORT=3453
# use printenv to check environment in docker conatiner file system 
EXPOSE $PORT
CMD ["npm","start"]

