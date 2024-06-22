import axios from "../axios";

class ReportService {
    getInfoByMonth = async (month, year) => {
        const response = await axios.get(`report/genre-month?month=${month}&year=${year}`);
        return response;
    }
    getLateReturnBook = async (ngaybaocao) => {
        const response = axios.get(`late-return-book?ngaybaocao=${ngaybaocao}`);
        return response;
    }
    downloadInfoByMonth = async (month, year) => {
        const response = await axios.get(`report/download-genre-month?month=${month}&year=${year}`);
        return response;
    }
    dowloadLateReturnBook = async (ngaybaocao) => {
        const response = axios.get(`report/download-late-return-book?ngaybaocao=${ngaybaocao}`);
        return response;
    }
}

const ApiReport = new ReportService();
export default ApiReport;