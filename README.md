# Snippets service API
This repository contains the API of my snippets service project.
The client side can be found [here](https://github.com/hecht-a/bin-service-client).
---
## Get the code
```shell
git clone https://github.com/hecht-a/bin-service-api
cd bin-service-api
```

## Usage in development
### Using Yarn
```shell
yarn
node ace migration:run
yarn dev
```

### Using npm
```shell
npm install
node ace migration:run
npm run dev
```

## Usage in production
### Using yarn
```shell
yarn build
cp .env build/.env
cd build/
yarn
node ace migration:run
yarn start
```
---
## Routes
`GET /health`: Get health of the api

---
### Snippet routes
#### Request
`POST /snippet`: Save new snippet
```text
curl -X POST http://localhost:3333/snippet -H "Content-Type: application/x-www-form-urlencoded" -d "code=console.log('snippet saved');&lang=ts"
```
#### Response
```json
{
  "id":"YWNOHD",
  "ext":"ts"
}
```
---
#### Request
`GET /snippet/:id`: Get snippet by its id
```text
curl -X GET http://localhost:3333/snippet/YWNOHD
```
#### Response
```json
{
  "code": 
  {
    "id":29,
    "code":"console.log('snippet saved');",
    "snippet_id":"YWNOHD",
    "created_at":"2021-09-13T00:48:05.000+02:00",
    "updated_at":"2021-09-13T00:48:05.000+02:00"
  },
  "length":1
}
```
