const express = require('express')
const app = express()
const model = require('./models')
const bodyParser = require('body-parser')

const User = model.User
const Task = model.Task
const Item = model.Item

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('OK')
})

// GET /users nampilin semua user
app.get('/users', (req, res) => {
  User.findAll().then(users => {
    res.send(users)
  })
})

// POST /user bikin data user baru
app.post('/user', (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName

  User.create({
    firstName,
    lastName
  }).then(user => {
    res.send(user)
  })
})

// POST /update-user/:id update data user
app.post('/update-user/:id', (req, res) => {
  const id = req.params.id
  User.findById(id).then(user => {
    // user.firstName = 'update'
    // user.lastName = 'update2'

    // user.save()

    user
      .update({
        firstName: 'Marry',
        lastName: 'Doe'
      })
      .then(user => {
        res.send(user)
      })
    // res.send(user)
  })
})

// post /delete-user/:id delete user

app.post('/delete-user/:id', (req, res) => {
  User.destroy({where: {id: req.params.id}}).then(function() {
    console.log(this)
    res.send('a')
  })
})

// bikin user baru barengan dengan task baru

app.get('/bikin-user-baru-dan-task-baru', (req, res) => {
  User.create(
    {
      firstName: 'John',
      lastName: 'Doe',
      Tasks: [
        {
          name: 'Belajar Express',
          dueDate: new Date()
        }
      ]
    },
    {
      include: [Task]
    }
  ).then(user => {
    res.send(user)
  })
})

app.get('/user-lama-ke-task-baru', (req, res) => {
  User.findById(11).then(user => {
    Task.create({
      name: 'Belajar React',
      dueDate: new Date()
    }).then(task => {
      user.addTask(task)

      res.send('ok')
    })
  })
})

app.get('/user-lama-ke-task-baru-2', (req, res) => {
  User.findById(11).then(user => {
    Task.findById(8).then(task => {
      user.setTasks([task, task2, task3])
      res.send()
    })

    // Task.create({
    //   name: 'Belajar React',
    //   dueDate: new Date
    // }).then(task => {
    //   user.setTasks([ task, task2, task3 ])
    //   res.send('ok')
    // })
  })
})

app.get('/semua-user-dan-tasks-nya', (req, res) => {
  User.findAll({
    include: [Task]
  }).then(userWithTask => {
    res.send(userWithTask)
  })
})

app.get('/semua-user-dan-tasks-nya', (req, res) => {
  User.findAll().then(users => {
    users.forEach(user => {
      user.getTasks().then(task => {
        res.send(task)
      })
    })
  })
})

app.get('/many-to-many', (req, res) => {
  User.create({
    firstName: 'Asrul',
    lastName: 'Vinksmoker',
    Items: [{ nama: 'baju', harga: 1000000, quantity: 1}]
  }, {
      include: [Item ]
  }).then(userWithItem => {
    res.send(userWithItem)
  })
})


app.get('/user-get-all-items', (req, res) => {

  // User.findById(15, {include: [ Item ]}).then(userWithItem => {
  //   res.send(userWithItem)
  // })

  console.log('haiii')
  User.findById(15).then(user => {
    console.log('aaaaa')
    user.getItems().then(item => {
      res.send(item)
    })
  })
});

app.listen(3000, () => {
  console.log('running at port 3000')
})
