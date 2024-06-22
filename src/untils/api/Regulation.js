import axios from "../axios";

class RegulationService {
     getReaderRule = async () => {
          const response = await axios.get('ruleManage/getReaderRule')
          return response
     }
     updateReaderRule = async (option = {}) => {
          const response = await axios.put('ruleManage/updateReaderRule', option)
          return response
     }
     getGenres = async () => {
          const response = await axios.get('ruleManage/getGenres')
          return response
     }
     updateGenres = async (option = {}) => {
          const response = await axios.put('ruleManage/updateGenre', option)
          return response
     }
     getBookRule = async () => {
          const response = await axios.get('ruleManage/getBookRule')
          return response
     }
     updatePulishYearDistance = async (option = {}) => {
          const response = await axios.put('ruleManage/updatePulishYearDistance', option)
          return response
     }
     getBorrowReturnRule = async () => {
          const response = await axios.get('ruleManage/get-book-borrow-return-rule')
          return response
     }
     putUpdateBorrowReturnRule = async (option = {}) => {
          const response = await axios.put('ruleManage/update-book-borrow-return-rule', option)
          return response
     }

}

const ApiReg = new RegulationService()
export default ApiReg