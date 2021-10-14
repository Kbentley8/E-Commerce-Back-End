const express = require('express');
const routes = require('./routes');
//import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//Sync Sequelize models to database, then turn on the server
app.listen(PORT, () => {
    console.log(`App listenining on port ${PORT}!`);

});