import React, { useState } from 'react';
import { Box } from '@mui/material';
import TableLoan from './TableLoan';
import { ReaderProvider } from '../../../../../Context';
import { SearchAppBar } from '../../../components';

export const BorrowManagementPage = () => {
     const [dataSearch, setDataSearch] = useState({})
     return (
          <ReaderProvider>
               <Box sx={{ height: "100%", width: '100%', mt: 5 }}>
                    <SearchAppBar
                         title={"Libary Management - Borrow Book Table"}
                         setDataSearch={setDataSearch}
                    />
                    <TableLoan
                         data={dataSearch}
                    />
               </Box>
          </ReaderProvider>
     );
}
