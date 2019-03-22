// Express Framework
const express = require("express");
const axios = require("axios");
const app = express();

// Body Parser Library for Post Data
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static Route to Serve the React App
app.use(express.static(__dirname + "/build/"));

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


// RESTFUL ROUTES:

// GET ALL
app.get("/users", (request, response) => {
  axios.get('http://5c953cd2498269001487f228.mockapi.io/users')
    .then((res) => {
      response.json({
        payload: res.data,
        status: true
      })
    })
    .catch((err) => {
      console.log(err);
    });
})

// "/tasks/:id" ===     "/tasks/3"      ==  request.params.id => 3
// "/tasks/:id" ===     "/tasks/hello"  == request.params.id => 'hello'

// // GET 1
// app.get("/tasks/:id", (request, response) => {
//   const note = tasks.find((note) => {
//     console.log(note);
//     console.log(request.params.id)
//     if (note.id == request.params.id) {
//       return note;
//     } else return false;

//   })
//   console.log(note);
//   response.json({
//     status: true,
//     task: note
//   })
// })

// CREATE 1
app.post("/users", (request, response) => {
  console.log('post request mine');
  console.log(request.body);
  let user = request.body.username;
  let score = request.body.score;
  axios.post('http://5c953cd2498269001487f228.mockapi.io/users', { username: user, score: score })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
  response.json({
    status: true,
  })
})

// // DELETE 1
// app.delete("/tasks/:id", (request, response) => {
//   for (var i = 0; i < tasks.length; i++) {
//     if (tasks[i].id == request.params.id) {
//       tasks.splice(i, 1);
//       break;
//     }
//   }
//   response.json({
//     status: true,
//     tasks: tasks
//   })
// })

// // UPDATE 1
// app.put("/tasks/:id", (request, response) => {
//   console.log(request.body);
//   console.log(request.params.id);
//   for (var i = 0; i < tasks.length; i++) {
//     if (tasks[i].id == request.params.id) {
//       tasks[i] = Object.assign({}, tasks[i], request.body);
//     }
//   }
//   response.json({
//     status: true,
//     tasks: tasks
//   })
// })


// SERVER LISTENING
app.listen(1337, () => {
  console.log("Server Listening ... port 1337")
});