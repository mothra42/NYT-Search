import axios from "axios";

//api key
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions for making API Calls
var helper = {
  //this function runs our query to the new york times and returns article information to be displayed in components.
  runQuery: function(topic, startYear, endYear)
  {
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=";
    var queryURL = queryURLBase + topic;
    if(startYear)
    {
      queryURL = queryURL +"&begin_date"+ startYear;
    }
    if(endYear)
    {
      queryURL = queryURL +"&end_date"+ endYear;
    }

    return axios.get(queryURL).then(response =>
    {
      console.log(response.data.response.docs[0].headline.main);
      if(response.data.response.docs[0])
      {
        return(response.data.response.docs);
      }
      console.log("nothing");
      return "";
    });
  }
};

export default helper;
