import axios from "axios";

const API = {
  getArticle: function()
  {
    return axios.get("/api/article");
  },

  addArticle: function(article)
  {
    console.log(article);
    return axios.post("/api/article", article);
  },

  deleteArticle: function(id)
  {
    return axios.delete(`/api/article/${id}`)
  }
};

export default API;
