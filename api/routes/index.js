import bodyParser from "body-parser";

let app = app =>{
    app.use(bodyParser.json())
    app.get('/', (req, res) => res.send('Olá!'))
}

export default app;