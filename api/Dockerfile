FROM node:13.12.0-alpine 
WORKDIR /app 
ENV PATH /app/node_modules/.bin:$PATH 
COPY . /app 
RUN npm ci --loglevel verbose 
EXPOSE 80 
CMD [ "node", "index.js" ]
