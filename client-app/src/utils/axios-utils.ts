import { ActivityType } from "@/types/@types.articles";
import axios from "axios";

export const axiosGet = async (url: string, signal?: any) => {
  return await axios
  .get(url, {
    signal: signal || null
  })
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  })
}

export const axiosDelete = async (url: string) => {
  return await axios
  .delete(url)
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  })
}

export const axiosEdit = async (url: string, body: ActivityType) => {
  return await axios
  .put(url, body)
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  })
}