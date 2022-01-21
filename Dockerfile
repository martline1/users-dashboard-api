FROM node:16
COPY . /app
# WORKDIR /app
CMD node /app/build/index.js
