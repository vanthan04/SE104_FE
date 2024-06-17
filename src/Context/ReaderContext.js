import { createContext, useContext, useState, useEffect } from "react";
import ApiReader from '../untils/api/Reader';

const ReaderContext = createContext();

export const useReaderContext = () => {
     return useContext(ReaderContext);
}

export const ReaderProvider = ({ children }) => {
     const [data, setData] = useState([]);
     const [maDGList, setMaDGList] = useState([]);

     useEffect(() => {
          fetchData();
     }, []);

     const fetchData = async () => {
          try {
               const response = await ApiReader.getAllReader();
               if (response.data && Array.isArray(response.data)) {
                    setData(response.data);
                    const maDGArray = response.data.map(item => item.MaDG);
                    setMaDGList(maDGArray);
               } else {
                    setData([]);
                    setMaDGList([]);
               }
          } catch (error) {
               console.error("Failed to fetch reader data:", error);
               setData([]);
               setMaDGList([]);
          }
     };

     const handleDataSuccess = async () => {
          await fetchData();
     };

     return (
          <ReaderContext.Provider value={{ data, maDGList, handleDataSuccess }}>
               {children}
          </ReaderContext.Provider>
     );
}
