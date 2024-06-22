import React, { useState } from 'react';
import { Box } from '@mui/material';
import TableLoan from './InfoReturnBook';
import { ReaderProvider } from '../../../../../Context';
import { SearchReturnBookAppBar } from '../../../components';

export const ReturnBookManagementPage = () => {
     const [dataSearch, setDataSearch] = useState({})
     return (
          <ReaderProvider>
               <Box sx={{ height: "100%", width: '100%', mt: 5 }}>
                    <SearchReturnBookAppBar
                         title={"Libary Management - Return Book"}
                         setDataSearch={setDataSearch}
                    />
                    <TableLoan
                         data={dataSearch}
                    />
               </Box>
          </ReaderProvider>
     );
}
