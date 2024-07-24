import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://main.d319k8lxxb3z56.amplifyapp.com/api",
});

export default axiosInstance;
