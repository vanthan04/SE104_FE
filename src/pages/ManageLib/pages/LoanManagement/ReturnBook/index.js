import React, { useState } from 'react';
import { Box } from '@mui/material';
import TableLoan from './InfoReturnBook';
import { ReaderProvider } from '../../../../../Context';
import { SearchReturnBookAppBar } from '../../../components';
import { Popup } from '../../../../../components/controls';
import RegulsBorrowReturnBook from '../RegulsBorrowReturnBook';

export const ReturnBookManagementPage = () => {
     const [dataSearch, setDataSearch] = useState({})
     const [openPopup, setOpenPopup] = useState(false)
     return (
          <ReaderProvider>
               <Box sx={{ height: "100%", width: '100%', mt: 5 }}>
                    <SearchReturnBookAppBar
                         title={"QUẢN LÝ THƯ VIỆN - TRẢ SÁCH"}
                         setDataSearch={setDataSearch}
                         setopenPopup={setOpenPopup}
                    />
                    <TableLoan
                         data={dataSearch}
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
