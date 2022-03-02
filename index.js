const express = require("express")
const exphbs = require('express-handlebars')
const bodyParser = require("body-parser")


const mainRoutes = require("./routes/mainRoutes")



const port = process.env.PORT || 3000
const app = express()



//HandleBars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static("public"))



app.use('/', mainRoutes)


module.exports = app;

// app.listen(port, ()=>{
//     console.log(`App running on port ${port}`)
// })