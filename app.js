import express from 'express'
import * as url from 'url';
import hbs from 'hbs'
import dotenv from 'dotenv';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
//const __filename = url.fileURLToPath(import.meta.url);

dotenv.config();
const app = express()
const port = process.env.PORT

//servir contenido estático
app.use(express.static("public"))
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`)


app.get('/', (req, res) => {
  res.render("home", {
    nombre: "Julián",
    titulo: "Curso Node"
  });
})

app.get('/generic.html', (req, res) => {
  res.render("generic", {
    nombre: "Julián",
    titulo: "Curso Node"
  });
})

// app.get('/elements.html', (req, res) => {
//   res.render("elements", {
//     nombre: "Julián",
//     titulo: "Curso Node"
//   });
// })


app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/404.html`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})