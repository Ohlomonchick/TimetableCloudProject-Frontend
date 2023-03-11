FROM node:19-alpine3.16

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json .

RUN npm install

# install project dependencies

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

RUN chmod +x entrypoint.sh
EXPOSE 8080
RUN npm run build
CMD [ "npm", "run", "serve" ]