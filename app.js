const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
const sessionsRouter = require('./src/routers/sessionsRouter');

app.use((morgan('tiny')));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
 res.send("Hello from my app")
}
)

app.get("/index", (req, res) => {
 res.render("index", { title: "Welcome to Globalmantics" })
})

app.get("/index/part2", (req, res) => {
 res.render("indexOriginal", { title: "Welcome to Globalmantics", data: ["a", "b", "c"] })
})

app.get("/template", (req, res) => {
 res.render("index", { title: "Welcome to Globalmantics" })
})


app.use("/sessions", sessionsRouter)


app.listen(PORT, () => {
 debug(`${chalk.green(`Server is running on port ${PORT}`)}`);
})