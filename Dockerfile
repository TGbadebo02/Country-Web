FROM --platform=linux/amd64 node:18.13.0-alpine AS ui-build

WORKDIR /usr/app/client/
COPY frontend/rest-country-app/package*.json ./
RUN npm install
COPY frontend/rest-country-app/src/ ./src
COPY frontend/rest-country-app/public/ ./public

RUN npm run build

FROM --platform=linux/amd64 node:18.13.0-alpine AS server-build

WORKDIR /usr/app/
COPY --from=ui-build /usr/app/client/build/ ./client/build
WORKDIR /usr/app/server/

COPY backend/package*.json ./
RUN npm install

COPY backend/src/express.js ./

ENV NODE_ENV=production

ENV PORT=$PORT

EXPOSE $PORT

CMD ["node","express.js"]
