import axios from "../axios";

class CollectionService {
     postTaoPhieuThuTienPhat = async (option = {}) => {
          const response = await axios.post('/collection/create-collection', option)
          return response
     }
     getCollectionListByReaderID = async (MaDG) => {
          const response = await axios.get(`/collection/get-collection-by-readerID?MaDG=${MaDG}`)
          return response
     }
}

const ApiCollection = new CollectionService();
export default ApiCollection;