import axios from "axios";

export const getData = async () => {
  const url = "https://randomuser.me/api/?results=20";

  const { data } = await axios.get(url);
  return data.results;
};
