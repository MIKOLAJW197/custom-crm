## Description

Custom CRM project made for univeristy.

## Installation

### Database
Need to install Docker first!

```bash
$ cd backend
$ docker-compose up -d
```

### Backend
```bash
$ cd backend
$ npm install
```

### Frontend
```bash
$ cd frontend
$ npm install
```

## Running the app
You will need 2 terminals.
### Frontend
```bash
$ cd frontend
$ npm run start
```

Then navigate to http://localhost:4200/

### Backend
Create .env file in /backend dir:
```
DATABASE_USER=postgres
DATABASE_PASSWORD=pass123
DATABASE_NAME=postgres
DATABASE_PORT=5432
DATABASE_HOST=localhost
JWT_SECRET=supertajnyklucz
JWT_EXPIRATION_TIME=300000
```

And later:

```bash
$ cd backend
$ npm run start
```

In browser navgate to http://localhost:3000/ - when you see 'Hello World' backend is working!

## Info

- Author - Mikołaj Wolicki

