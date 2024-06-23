import React, { useState } from 'react';
import { Box } from '@mui/material';
import TableLoan from './InfoReturnBook';
import { ReaderProvider } from '../../../../../Context';
import { SearchReturnBookAppBar } from '../../../components';
import { Popup } from '../../../../../components/controls';
import RegulsBorrowReturnBook from '../RegulsBorrowReturnBook';
import ApiBorrowReturn from '../../../../../untils/api/BorrowReturn';
import { toast } from 'react-toastify';

export const ReturnBookManagementPage = () => {
     const [dataSearch, setDataSearch] = useState({});
     const [openPopup, setOpenPopup] = useState(false);

     const refetchData = async (selectedMaDG) => {
          try {
               const response = await ApiBorrowReturn.getBookBorrowReturn(selectedMaDG)
               if (response.success) {
                    setDataSearch(response.data);
               } else {
                    toast.error('Thất bại');
               }
          } catch (error) {
               console.error('Error fetching data:', error);
               toast.error('Failed to fetch data. Please try again later.');
          }
     };

     return (
          <ReaderProvider>
               <Box sx={{ height: "100%", width: '100%', mt: 5 }}>
                    <SearchReturnBookAppBar
                         title={"QUẢN LÝ THƯ VIỆN - TRẢ SÁCH"}
                         setDataSearch={setDataSearch}
                         setopenPopup={setOpenPopup}
                         refetchData={refetchData}
                    />
                    <TableLoan
                         data={dataSearch}
                         refetchData={refetchData}
                    />
               </Box>
               <Popup
                    title={'Quy định mượn trả sách'}
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
               >
                    <RegulsBorrowReturnBook
                         closePopup={setOpenPopup}
                    />
               </Popup>
          </ReaderProvider>
     );
}
