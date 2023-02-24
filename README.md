# Jigsaw

## Develop & Deploy

yarn && yarn start && yarn deploy

## The API

### Get Answer(s)

Http Method: GET

Request /resolve

| query | type   | mandatory | comment          | default |
|-------|--------|-----------|------------------|---------|
| month | number | N         | 0-11, 0 is Jan   | 0       |
| day   | number | N         | 0-30, 0 is 1st   | 0       |
| week  | number | N         | 0-6, 0 is Sunday | 0       |
| count | number | N         | answer(s) count  | 0       |

Response application/json

common filed

| field   | type   | comment |
|---------|--------|---------|
| code    | number | 0 is ok |
| message | string | -       |
| data    | object | -       |

data of GET /resolve

| field  | type         | comment |
|--------|--------------|---------|
| month  | number       | -       |
| day    | number       | -       |
| week   | number       | -       |
| count  | number       | -       |
| result | list[object] | -       |

data.result[*] of GET /resolve

| field  | type           | comment               |
|--------|----------------|-----------------------|
| matrix | string\[8]\[7] | represents the result |
