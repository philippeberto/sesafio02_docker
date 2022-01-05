const express = require('express')
//const cors = require('cors')
const port = process.env.PORT || 3000
const path = require('path');
const ejs = require('ejs');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const app = express()

//app.use(cors())
//app.options('*', cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const allPeople = await prisma.people.findMany()
  console.log(allPeople)
  const params = []
  params.peoples = allPeople

  res.render('index', params)
})

app.post('/submit', async (req, res) => {
  console.log(req.body)
  try {
    const newUser = await prisma.people.create({
      data: {
        name: req.body.name,
      },
    })
    console.log(newUser.name, 'successfully created!')
    res.redirect('back')
  } catch (error) {
    console.log(error)
    res.redirect('back')
  }
})

app.get('/delete/:id', async (req, res) => {
  try {
    await prisma.people.delete({where : { id: parseInt(req.params.id) }})
    res.redirect('back')
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => { 
    console.log(`listening on ${port}...`) 
})