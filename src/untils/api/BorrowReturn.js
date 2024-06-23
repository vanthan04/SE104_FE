import axios from '../axios'

class BorrowReturnService {
     postBookBorrow = async (option = {}) => {
          const response = await axios.post('/book-borrow-return/book-borrow', option)
          return response
     }
     postBookReturn = async (option = {}) => {
          const response = await axios.post('/book-borrow-return/book-return', option)
          return response
     }
     getBookBorrowReturn = async (MaDG) => {
          const response = await axios.get(`/book-borrow-return/book-borrow-return?MaDG=${MaDG}`)
          return response
     }

}

const ApiBorrowReturn = new BorrowReturnService()
export default ApiBorrowReturn