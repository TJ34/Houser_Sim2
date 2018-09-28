require('dotenv').config()

const express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3001,
    massive = require('massive');
const controller = require('./controller');
    

    const app = express();
    app.use(bodyParser.json());
    massive(process.env.CONNECTION_STRING).then(dbInstance => {
        app.set('db', dbInstance)
    }).catch(err => console.log(err));

    app.get('/api/houses', controller.getHouses);
    app.post('/api/house', controller.addHouse);
    app.delete('/api/houses/:id', controller.deleteHouse);
    app.put('/api/houses/:id', controller.updateHouse);

app.listen(port, () => console.log(`Server listening on port ${port}.`))