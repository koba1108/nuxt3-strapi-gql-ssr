FROM node:18-bullseye-slim

WORKDIR /strapi
COPY . .
RUN yarn install

EXPOSE 1337
CMD ["yarn", "dev"]
