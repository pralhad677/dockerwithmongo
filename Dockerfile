FROM node:14
WORKDIR /app
COPY package*.json ./

# RUN npm install
# ya ni arg lai docker-compose file ko build ko arg bata data pass agreko ho
ARG NODE_ENV
# this is a condition for production to remove dev dependencies from node_modules
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production ; \
        fi 
        # fi means ending


COPY . .

# ENV NODE_ENV=production PORT=3453
ENV  PORT=3453
# use printenv to check environment in docker conatiner file system 
EXPOSE $PORT
CMD ["npm","start"]

