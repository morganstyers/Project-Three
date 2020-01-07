import axios from "./node_modules/axios";

export default {
  // Gets all rocks
  getRocks: function() {
    return axios.get("/api/rocks");
  },
  // Gets the rock with the given id
  getRock: function(id) {
    return axios.get("/api/rocks/" + id);
  },
  // Deletes the rock with the given id
  deleteRock: function(id) {
    return axios.delete("/api/rocks/" + id);
  },
  // Saves a rock to the database
  saveRock: function(rockData) {
    return axios.post("/api/rocks", rockData);
  }
};
