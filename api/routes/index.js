const bodyParser = require("body-parser");

let app = app =>{
    app.use(bodyParser.json())
    app.get('/', (req, res) => res.send('Olá!'))
}

module.exports = app;