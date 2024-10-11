import axios from "axios";

export const fetchNutritionalData = () => {

  return axios.get("http://127.0.0.1:8000/nutrition_info");
};

export const fetchSearchData = (query) => {
  return axios.get(`https://trackapi.nutritionix.com/v2/search/instant/`, {
    headers: {
      "x-app-id": "e475c6ce",
      "x-app-key": "122305c7af14862e9c798ce5380630df",
      "Content-Type": "application/json",
    },
    params: { query },
  });
};


