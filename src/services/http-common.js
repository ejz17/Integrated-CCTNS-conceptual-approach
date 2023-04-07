import axios from "axios";

export default axios.create({
    baseURL:"mongodb://localhost:27017",
    headers:{
        "content-type":"application/json"
    }
});