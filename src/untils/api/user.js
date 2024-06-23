import axios from "../axios";

class UserService {
    postRegister = async (options = {}) => {
        const response = await axios.post('user/register', options);
        return response;
    };
    postLogin = async (options = {}) => {
        const response = await axios.post('user/login', options);
        return response;
    }
    getRefreshToken = async () => {
        const response = await axios.get('user/get-refresh-token');
        return response;
    }
    getLogout = async () => {
        await axios.get('/user/logout');
    }
}

const ApiUser = new UserService();
export default ApiUser;