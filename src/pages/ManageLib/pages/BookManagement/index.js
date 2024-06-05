//React
import { useState } from 'react';
//Components
import { Box } from '@mui/material';
//Local
import Popup from '../../../../components/controls/Popup';
import { StyledAppBar } from '../../components';

import { BookProvider } from '../../../../Context';
import { TableBooks } from './TableBooks';
import FormAddBook from './FormAddBook';
import SearchBook from './SearchBook';


const BookManagementPage = () => {
     const [openPopupAdd, setOpenPopupAdd] = useState(false)
     const [openPopupSearch, setOpenPopupSearch] = useState(false)
     const [openPopupReg, setOpenPopupReg] = useState(false)
     return (
          <BookProvider>
               <Box sx={{ height: "100%", width: '100%', mt: 5 }}>
                    <StyledAppBar
                         setOpenPopupAdd={() => setOpenPopupAdd(true)}
                         setOpenPopupSearch={() => setOpenPopupSearch(true)}
                         setOpenPopupReg={() => setOpenPopupReg(true)}
                         title={'Libary Management - Table Book'}
                    />
                    <TableBooks />
               </Box>
               <Popup
                    title='Tiếp nhận sách mới'
                    openPopup={openPopupAdd}
                    setOpenPopup={setOpenPopupAdd}
               >
                    <FormAddBook
                         closePopup={() => setOpenPopupAdd(false)}
                    />
               </Popup>
               <Popup
                    title="Tìm kiếm sách theo ..."
                    openPopup={openPopupSearch}
                    setOpenPopup={setOpenPopupSearch}
               >
                    <SearchBook
                         closePopup={() => setOpenPopupSearch(false)}
                    />
               </Popup>
               <Popup
                    title="Quy định của độc giả"
                    openPopup={openPopupReg}
                    setOpenPopup={setOpenPopupReg}
               >
                    <h1>Quy định về sách</h1>
               </Popup>
          </BookProvider>
     );
}
export default BookManagementPage