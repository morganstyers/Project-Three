import axios from "axios";

export default {
  // Gets all rocks
  getRocks: function() {
    return axios.get("/api/rocks");
  },
  // Gets the book with the given id
  getRock: function(id) {
    return axios.get("/api/rocks/" + id);
  },
  // Deletes the book with the given id
  deleteRockk: function(id) {
    return axios.delete("/api/rocks/" + id);
  },
  // Saves a book to the database
  // saveRock: function(bookData) {
  //   return axios.post("/api/rocks", rockData);
  // }
};
