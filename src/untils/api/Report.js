import axios from "../axios";

class ReportService {
    getInfoByMonth = async (month, year) => {
        return axios.get('genre-month', {month, year})
    }
    getLateReturnBook = async (ngaybaocao) => {
        return axios.get('late-return-book', {ngaybaocao})
    }
    downloadInfoByMonth = async (month, year) => {
        return axios.get('download-genre-month', {month, year})
    }
    dowloadLateReturnBook = async (ngaybaocao) => {
        return axios.get('download-late-return-book', {ngaybaocao})
    }
}

const ApiReport = new ReportService();
export default ApiReport;