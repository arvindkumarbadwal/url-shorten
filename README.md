# URL Shorten

## Description

A micro application for Url shorten built with Nest Framework its also has Postgres and Docker.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development mode
$ docker-compose up --build

```

## Request

### Generate Short URL
  POST /url-shorten
  Host: localhost:3000
  Accept: application/json
  Content-Type: application/json
  Request Body
  {
    "longUrl": "any url which you want to get short url"
  }

### Get Detail By Short Code
POST /url-shorten/{shortCode}
Host: localhost:3000
Accept: application/json
