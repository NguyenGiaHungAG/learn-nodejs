const express = require('express')
const { response } = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug')
app.set('views', './views')

users = [
  {Name: "Hung", Age: 23},
  {Name: "Thinh", Age: 25}
];
app.get('/', function(req, res){
  res.render('index');
});
app.get('/users', function (req, res) {
    res.render('users/index', {users: users});
  });
app.get('/users/search', function(req, res){
  var q = req.query.q;
  var matchedUsers = users.filter(user => {
    return user.Name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  });
  res.render('users/index', {users: matchedUsers, q:q});
});

app.get('/users/create', function(req, res){
  res.render('users/create');
});

app.post('/users/create', function(req, res){
  users.push(req.body);
  res.render('users/index', {users: users});
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost: ${port}`)
})