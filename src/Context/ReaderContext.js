import React, { createContext, useContext, useState, useEffect } from "react";
import ApiReader from '../untils/api/Reader';

const ReaderContext = createContext();

export const useReaderContext = () => {
     return useContext(ReaderContext);
}

export const ReaderProvider = ({ children }) => {
     const [data, setData] = useState([]);
     const [hotenList, setHotenList] = useState([]);
     const [MaDGList, setMaDGList] = useState([])

     useEffect(() => {
          fetchData();
     }, []);

     const fetchData = async () => {
          try {
               const response = await ApiReader.getAllReader();
               if (response.data && Array.isArray(response.data)) {
                    const filteredData = response.data.filter(item => !item.isLocked); // Example filter condition
                    setData(response.data);
                    const hotenArray = filteredData.map(item => item.hoten); // Extracting 'hoten' from filtered data
                    setHotenList(hotenArray);
                    const MaDGArray = filteredData.map(item => item.MaDG); // Extracting 'MaDG' from filtered data
                    setMaDGList(MaDGArray)
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
          <ReaderContext.Provider value={{ data, hotenList, MaDGList, handleDataSuccess }}>
               {children}
          </ReaderContext.Provider>
     );
}
