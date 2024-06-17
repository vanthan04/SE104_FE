import { createContext, useContext, useState, useEffect } from "react";
import ApiReader from '../untils/api/Reader';

const ReaderContext = createContext();

export const useReaderContext = () => {
     return useContext(ReaderContext);
}

export const ReaderProvider = ({ children }) => {
     const [data, setData] = useState([]);
     const [hotenList, setHotenList] = useState([]);

     useEffect(() => {
          fetchData();
     }, []);

     const fetchData = async () => {
          try {
               const response = await ApiReader.getAllReader();
               if (response.data && Array.isArray(response.data)) {
                    setData(response.data);
                    const hotenArray = response.data.map(item => item.hoten);
                    setHotenList(hotenArray);
               } else {
                    setData([]);
                    setHotenList([]);
               }
          } catch (error) {
               console.error("Failed to fetch reader data:", error);
               setData([]);
               setHotenList([]);
          }
     };

     const handleDataSuccess = async () => {
          await fetchData();
     };

     return (
          <ReaderContext.Provider value={{ data, hotenList, handleDataSuccess }}>
               {children}
          </ReaderContext.Provider>
     );
}
