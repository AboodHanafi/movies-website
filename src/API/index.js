import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const CRUDRequsests = {
  get: async (url) => {
    return await baseApi.get(url);
  },
  //post , delete , put
};

export default CRUDRequsests;
