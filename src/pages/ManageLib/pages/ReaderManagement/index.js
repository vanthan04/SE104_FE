//React
import { useState } from 'react';
//Components
import { Box } from '@mui/material';
//Local
import Popup from '../../../../components/controls/Popup';
import FormAddReader from './FormAddReader';
import { TableReaders } from './TableReaders';
import { StyledAppBar } from '../../components';
import { ReaderProvider } from '../../../../Context';
import SearchReader from './SearchReader';
import RegReader from './RegReader';




export const ReaderManagementPage = () => {
  const [openPopupAdd, setOpenPopupAdd] = useState(false)
  const [openPopupSearch, setOpenPopupSearch] = useState(false)
  const [openPopupReg, setOpenPopupReg] = useState(false)

  return (
    <ReaderProvider>
      <Box sx={{ height: "100%", width: '100%', mt: 5 }}>
        <StyledAppBar
          setOpenPopupAdd={() => setOpenPopupAdd(true)}
          setOpenPopupSearch={() => setOpenPopupSearch(true)}
          setOpenPopupReg={() => setOpenPopupReg(true)}
          title={'Libary Management - Table Reader'}
        />
        <TableReaders />
        <Popup
          title='Đăng kí độc giả mới'
          openPopup={openPopupAdd}
          setOpenPopup={setOpenPopupAdd}
        >
          <FormAddReader />
        </Popup>
        <Popup
          title="Tìm kiếm độc giả theo ..."
          openPopup={openPopupSearch}
          setOpenPopup={setOpenPopupSearch}
        >
          <SearchReader
            closePopup={() => setOpenPopupSearch(false)}
          />
        </Popup>
        <Popup
          title="Quy định của độc giả"
          openPopup={openPopupReg}
          setOpenPopup={setOpenPopupReg}
        >
          <RegReader
            closePopup={() => setOpenPopupReg(false)}
          />
        </Popup>

      </Box>
    </ReaderProvider>
  );
}