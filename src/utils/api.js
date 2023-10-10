import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization:
    "bearer " +
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTdmZTZlMDM4MDllOGM1OTBiM2RjNjBmOTU1YzI3OSIsInN1YiI6IjY1MTNkMDEzYTE5OWE2MDExYjIwZmI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0L5OFmbmKquamRY-PkSKjjNKPt_sEb264kmuZ76tmsg",
};
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
