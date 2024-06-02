import axios from "../axios";

class ReaderService {
    postAddReader = async (options = {}) => {
        const response = await axios.post('readerManage/createNewReader', options);
        return response;
    }
    getAllReader = async () => {
        const response = await axios.get('readerManage/getAllReaders');
        return response;
    }
    putUpdateReader = async (options = {}) => {
        const response = await axios.put('readerManage/updateReader', options)
        return response;
    }
    postDeleteReader = async (options = {}) => {
        const response = await axios.post('readerManage/deleteReader', options)
        return response;
    }
    getSearchHoten = async (fullname) => {
        const response = await axios.get(`readerManage/findReaderByFullname?hoten=${fullname}`)
        return response
    }
    getSearchMaDG = async (MaDG) => {
        const response = await axios.get(`/readerManage/findReaderByMaDG?MaDG=${MaDG}`)
        return response;
    }
    getSearchEmail = async (email) => {
        const response = await axios.get(`/readerManage/findReaderByEmail?email=${email}`)
        return response;
    }
}

const ApiReader = new ReaderService();
export default ApiReader;