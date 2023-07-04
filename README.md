

### NoemDek

### Introduction

A functional scheduling page for its transport team that allows the manager to be able to see drivers/vehicles schedule at a glance.

### Technology Used

- [Node.js](https://nodejs.org/) - Server Side
- [Express.js](https://expressjs.com/) for routing
- [MongoDB](https://www.cloud.mongodb.com/) for database
- [Render](https://dashboard.render.com/) for deployment and hosting


### How to run locally

```bash
npm install
npm run dev
```

### Adding transport schedule 

#### Adding information

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "vehicleType": "
    "vehicleStatus": "
    "driverName": "
    "clientName": "
    "clientCompany": "
    "service": "
    "startDate": "
    "endDate": "
    "pickUp": "
    "dropOff": "
    "note": "
    }' \
   
```

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `vehicleType`     | `string` | **Required**. vehicleType is required     |
| `vehicleStatus`    | `string` | **Required**. vehicleStatus is required    |
| `driverName` | `string` | **Required**. driverName is required |
| `clientName`    | `string` | **Required**. clientName is required    |
| `clientCompany` | `string` | **Required**. clientCompany is required |
| `startDate` | `string` | **Required**. startDate is required |
| `pickUp`    | `string` | **Required**. pickUp is required    |
| `dropOff` | `string` | **Required**. dropOff is required |
| `note` | `string` | **Required**. note is required |

#### View Schedule

```bash
curl -X GET -H "Content-Type: application/json" -d 

Copyright (c) 2023 Victoria
