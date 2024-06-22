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
import RegBook from './RegBook';


const BookManagementPage = () => {
     const [openPopupAdd, setOpenPopupAdd] = useState(false)
     const [openPopupSearch, setOpenPopupSearch] = useState(false)
     const [openPopupReg, setOpenPopupReg] = useState(false)
     const [dataSearch, setDataSearch] = useState([]);

     return (
          <BookProvider>
               <Box sx={{ height: "100%", width: '100%', mt: 5 }}>
                    <StyledAppBar
                         setOpenPopupAdd={() => setOpenPopupAdd(true)}
                         setOpenPopupSearch={() => setOpenPopupSearch(true)}
                         setOpenPopupReg={() => setOpenPopupReg(true)}
                         title={'Libary Management - Table Book'}
                    />
                    <TableBooks
                         dataSearch={dataSearch}
                    />
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
                         resultSearch={setDataSearch}
                    />
               </Popup>
               <Popup
                    title="Quy định của sách"
                    openPopup={openPopupReg}
                    setOpenPopup={setOpenPopupReg}
               >
                    <RegBook
                         closePopup={() => setOpenPopupReg(false)}
                    />
               </Popup>
          </BookProvider>
     );
}
export default BookManagementPage