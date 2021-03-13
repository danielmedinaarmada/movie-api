FROM node:10-alpine
COPY [".", "/srv/app"]
WORKDIR /srv/app
RUN npm install
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "index.js"]
