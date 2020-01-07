import axios from "axios";

export default {
  getData: function(query) {
    return axios.get("/api/recipes", { params: { q: query } });
  }
};
