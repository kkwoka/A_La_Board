import axios from "axios";
const express = require("express");
var app = express();


export default {
  getBoardGame: async function(query) {
    // app.get("/", function(req, res) {
      return (
        await axios.get(`https://www.boardgamegeek.com/xmlapi/search?search=${query}`)
        // .then(response => {
            // res.set('Content-Type', 'text/xml');
            // res.send(response.data);
        // });
      // });
      )
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveGame: function(gameData) {
    console.log('running saveGame function!!!');
    return axios.post("/api/games", gameData);
  }
};






// -----------------
// axios.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", 'https://www.boardgamegeek.com/xmlapi/'); 
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// axios.get('/api/games', (req, res) => {

// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// }).finally(function (){

// });

// module.exports = axios;
// export default getBoardGame;