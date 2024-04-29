import axios from "axios";

export const axiosGet = async (url: string, signal: any) => {
  return await axios
  .get(url, {
    signal: signal
  })
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  })
}