
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World,  Dhuro bhai bangladesh! automatic restart')
})


const users = [
    { id: 1, name: "shabana", email: "mahadi@gmail.com" },
    { id: 2, name: "salaya", email: "mahadi@gmail.com" },
    { id: 3, name: "alyena", email: "mahadi@gmail.com" },
    { id: 4, name: "balye", email: "mahadi@gmail.com" },
    { id: 5, name: "kalaye", email: "mahadi@gmail.com" }
]
//user quary parameter
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {

    }
    res.send(users)
});


//app.METHOD

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)

    console.log('hitting the post', req.body)
    res.json(newUser)
})


//user dynamic parameter
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send('"DHur bhai kotha bolis nato"')
})
app.get('/about', (req, res) => {
    res.send({ name: "abul" })
})

app.listen(port, () => {
    console.log('listening to port', port)
});