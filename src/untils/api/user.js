import axios from "../axios";

class UserService {
    postLogin = async (path, options = {}) => {
        const response = await axios.post(path, options);
        return response;
    }
    postAddReader = async (path, options = {}) => {
        const response = await axios.post(path, options);
        return response;
    }
    getAllReader = async (path) => {
        const response = await axios.get(path);
        return response;
    }
    putUpdateReader = async (path, options = {}) => {
        const response = await axios.put(path, options)
        return response;
    }
    postDeleteReader = async (path, options = {}) => {
        const response = await axios.post(path, options)
        return response
    }
    getSearchHoten = async (path) => {
        const response = await axios.get(path)
        return response
    }
    getSearchMaDG = async (path) => {
        const response = await axios.get(path)
        return response
    }
    getSearchEmail = async (path, options = {}) => {
        const response = await axios.get(path)
        return response;
      
    GetRefreshToken = async () => {
        const response = await axios.get('user/get-refresh-token');
        return response;
    }
}

const ApiUser = new UserService();
export default ApiUser;