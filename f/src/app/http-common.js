import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:80801/api",
  headers: {
    "Content-type": "application/json"
  }
});
