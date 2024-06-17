import axios from '../axios'

class BookService {
     createNewBook = async (option = {}) => {
          const response = await axios.post('bookManage/createNewBook', option)
          return response
     }
     updateBook = async (option = {}) => {
          const response = await axios.post('bookManage/updateBook', option)
          return response
     }
     deleteBook = async (MaSach) => {
          const response = await axios.post(`bookManage/deleteBook?MaSach=${MaSach}`)
          return response
     }
     getAllBooks = async () => {
          const response = await axios.get(`bookManage/getAllBooks`)
          return response
     }
     findBookByName = async (tensach) => {
          const response = await axios.get(`bookManage/findBookByName?TenSach=${tensach}`)
          return response
     }
     findBookByBookID = async (MaSach) => {
          const response = await axios.get(`/bookManage/findBookByBookID?MaSach=${MaSach}`)
          return response;
     }
     findBookByGener = async (theloai) => {
          const response = await axios.get(`/bookManage/findBookByGenre?theloai=${theloai}`)
          return response;
     }
}

const ApiBook = new BookService()
export default ApiBook