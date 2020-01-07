import axios from "axios";

export default {
  
  getRocks: function() {
    return axios.get("/api/rocks");
  },
 
  getRock: function(id) {
    return axios.get("/api/rocks/" + id);
  },

  deleteRock: function(id) {
    return axios.delete("/api/rocks/" + id);
  },

  saveRock: function(bookData) {
    return axios.post("/api/rocks", bookData);
  }
};