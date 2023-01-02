FROM node:16 AS build-env-fe

WORKDIR /fe-app

COPY frontend/package*.json .

RUN npm install

COPY frontend/ .

RUN npm run build

FROM node:16 AS build-env-be

WORKDIR /be-app

COPY backend/package*.json ./

RUN npm install

COPY backend/. .

RUN npm run build

RUN rm -rf public && mkdir public

FROM gcr.io/distroless/nodejs16-debian11

COPY --from=build-env-be /be-app/dist /app/dist

COPY --from=build-env-be /be-app/node_modules /app/node_modules

COPY --from=build-env-fe /fe-app/build /app/public

WORKDIR /app

CMD ["dist/main"]