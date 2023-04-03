import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f731ef0f5b5f48e386a76722f7ce322e",
  },
});
