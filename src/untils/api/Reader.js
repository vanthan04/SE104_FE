import axios from "../axios";

class ReaderService  {
    createNewReader = async (path, options = {}) => {
        const response = await axios.post(path, options);
        return response;
    }
    getAllReader = async (path) => {
        const response = await axios.get(path);
        return response;
    }
} 
const ReaderApi = new ReaderService();
export default ReaderApi;