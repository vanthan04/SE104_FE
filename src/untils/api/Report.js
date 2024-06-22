import axios from "../axios";

class ReportService {
    getInfoByMonth = async (data) => {
        const response = await axios.get('/report/genre-month', { params: data }); // Sử dụng params để gửi query parameters
        return response;
    }
    getLateReturnBook = async (data) => {
        const response = await axios.get('/report/late-return-book', { params: data })
        return response
    }
    downloadInfoByMonth = async (data) => {
        const response = await axios.get('/report/download-genre-month', { params: data })
        return response
    }
    dowloadLateReturnBook = async (data) => {
        const response = await axios.get('/report/download-late-return-book', { params: data});
        return response;
    }
}

const ApiReport = new ReportService();
export default ApiReport;