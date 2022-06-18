FROM node:16.0


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package-lock.json /usr/src/app/
COPY package.json /usr/src/app/

RUN apt-get update

# Add tool which will fix init process
RUN apt-get install dumb-init

# Clean install npm packages
RUN npm install

# Install serve
RUN npm install -g serve 

#install concurrently
RUN npm install -g concurrently



# If you are building your code for production
# change start-dev for start

# Bundle app source
COPY . /usr/src/app

#install react
#RUN npm install --prefix ./src/client ./src/client

# Build server
RUN npm run build

EXPOSE 8000
EXPOSE 3000

#RUN serve -s src/client/build


#CMD npm run start
#CMD ["dumb-init", "node", "dist/server/index.js"]
CMD ["dumb-init", "npm", "run", "docker-client-server"]

# "&&", "serve", "-s", "src/client/build"]
#CMD npm run start
#CMD ["dumb-init", "node", "dist/server/index.js" ]