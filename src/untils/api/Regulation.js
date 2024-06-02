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
}

const ApiReg = new RegulationService()
export default ApiReg