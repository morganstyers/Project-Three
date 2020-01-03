import axios from "axios";

// The getData method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getData: function(query) {
    return axios.get("/api/recipes", { params: { q: query } });
  }
};
