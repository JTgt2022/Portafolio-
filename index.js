
const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')


app.get('/', (req, res) => {
  //res.send('Página Principal')
  console.log(__dirname)
  res.render('index')
})

app.get('/educacion', (req, res) => {
  res.render('/educacion',{
   titulo:"Sección educación",
   descripcion:"Aqui encotrarás mi formación académica"})
})

app.get('/Laboral', (req, res) => {
  //res.send('Laboral')
  res.render('Laboral',{
    titulo:"sección experiencia laboral",
    descripcion:"Aqui encontrarás mi informacion relacionada cn el ambito laboral"
  })

})

app.get('/Intereses', (req, res) => {
  res.send('intereses')
})

app.get('/Referencias', (req, res) => {
  res.send('contacto')
})

app.use((req,res,next)=>{
  res.status(404).sendFile(__dirname+'/public/404.html')
})



app.listen(port, () => {
  console.log(`Acceda al servidor haciendo click aqui http://localhost:${port}`)
})