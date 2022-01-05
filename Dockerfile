FROM node:16.0


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN apt-get update

# Add tool which will fix init process
RUN apt-get install dumb-init


RUN npm install


# If you are building your code for production
# change start-dev for start

# Bundle app source
COPY . .


EXPOSE 8000

CMD npm run start
#CMD ["dumb-init", "node", "server.js" ]