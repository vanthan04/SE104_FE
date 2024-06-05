import { createContext, useContext, useState, useEffect } from "react";
import ApiReader from '../untils/api/Reader';

const ReaderContext = createContext()

export const useReaderContext = () => {
     return useContext(ReaderContext)
}

export const ReaderProvider = ({ children }) => {
     const [data, setData] = useState([]);

     useEffect(() => {
          fetchData();
     }, []);

     const fetchData = async () => {
          try {
               const response = await ApiReader.getAllReader();
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
     //fetch lại data table khi thực hiện thành công 1 chức năng
     const handleDataSuccess = async () => {
          await fetchData();
     };

     return (
          <ReaderContext.Provider value={{ data, handleDataSuccess }}>
               {children}
          </ReaderContext.Provider>
     )
}