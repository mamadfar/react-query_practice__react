import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    put: axios.put,
    delete: axios.delete,
}