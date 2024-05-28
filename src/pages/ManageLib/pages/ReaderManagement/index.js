//React
import { useState } from 'react';
//Icon
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import SearchIcon from '@mui/icons-material/Search';
//Components
import { Box, AppBar, Button, InputBase, Typography } from '@mui/material';
//Local
import Popup from '../../../../components/controls/Popup';
import FormAddReader from './FormAddReader';
import { TableReaders } from './TableReaders';
import { StyledToolbar, Search } from '../../components';
import { ReaderProvider } from '../../../../Context/ReaderContext';
import SearchReader from './SearchReader';




export const ReaderManagementPage = () => {
  const [openPopupAdd, setOpenPopupAdd] = useState(false)
  const [openPopupSearch, setOpenPopupSearch] = useState(false)

  return (
    <ReaderProvider>
      <Box sx={{ height: 400, width: '100%', mt: 5 }}>
        <AppBar position='static'>
          <StyledToolbar>
            <Typography variant='h6'>Libary Management - Table Reader</Typography>
            <Box component='div' sx={{ width: '20%', display: 'flex', justifyContent: 'space-around' }}>
              <Button
                color='secondary'
                variant='contained'
                startIcon={<SearchIcon />}
                onClick={() => setOpenPopupSearch(true)}
              >
                Search
              </Button>
              <Button
                color='success'
                variant='contained'
                startIcon={<PersonAddAlt1OutlinedIcon />}
                onClick={() => setOpenPopupAdd(true)}
              >
                Add
              </Button>
            </Box>
          </StyledToolbar>
        </AppBar>
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
      </Box>
    </ReaderProvider>
  );
}