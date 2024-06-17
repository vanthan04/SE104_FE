import { createContext, useContext, useState, useEffect } from "react";
import ApiBook from "../untils/api/Book";
import ApiReg from "../untils/api/Regulation";

const BookContext = createContext()

export const useBookContext = () => {
     return useContext(BookContext)
}

export const BookProvider = ({ children }) => {
     const [data, setData] = useState([]);
     const [bookGenres, setBookGenres] = useState([])

     useEffect(() => {
          fetchData();
          fetchBoookGeners()
     }, []);

     const fetchData = async () => {
          try {
               const response = await ApiBook.getAllBooks();
               if (response.data && Array.isArray(response.data)) {
                    setData(response.data);
               } else {
                    setData([]);
               }
          } catch (error) {
               console.error("Failed to fetch books data:", error);
               setData([]);
          }
     };
     const fetchBoookGeners = async () => {
          try {
               const response = await ApiReg.getGenres();
               if (response.success && response.data) {
                    setBookGenres(response.data)
               }
               else {
                    setData([])
               }
          }
          catch (error) {
               console.error("Failed to fetch bookGenres data:", error);
               setData([]);
          }
     }
     //fetch lại data table khi thực hiện thành công 1 chức năng
     const handleDataSuccess = async () => {
          await fetchData();
          await fetchBoookGeners()
     };

     return (
          <BookContext.Provider value={{ data, handleDataSuccess, bookGenres }}>
               {children}
          </BookContext.Provider>
     )
}