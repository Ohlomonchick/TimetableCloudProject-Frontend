FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json .

COPY entrypoint.sh .

# install project dependencies

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

RUN npm install

RUN chmod +x entrypoint.sh
EXPOSE 8080
CMD [ "npm run build && npm run serve" ]