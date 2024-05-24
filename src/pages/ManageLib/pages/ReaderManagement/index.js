//React
import { useEffect, useState } from 'react';
//Icon
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
//Components
import { Box, AppBar, Button, InputBase, Typography } from '@mui/material';
//Local
import Popup from '../../../../components/controls/Popup';
import FormAddReader from './FormAddReader';
import ApiUser from '../../../../untils/api/user';
import { TableReaders } from './TableReaders';
import { StyledToolbar, Search } from '../../components';
import { ReaderProvider } from '../../../../Context/ReaderContext';




export const ReaderManagementPage = () => {
  const [openPopupAdd, setOpenPopupAdd] = useState(false)

  return (
    <ReaderProvider>
      <Box sx={{ height: 400, width: '100%', mt: 5 }}>
        <AppBar position='static'>
          <StyledToolbar>
            <Typography variant='h6'>Libary Management - Table Reader</Typography>
            <Search><InputBase placeholder='seacrh reader...' sx={{ width: "100%" }} /></Search>
            <Button
              color='success'
              variant='contained'
              startIcon={<PersonAddAlt1OutlinedIcon />}
              onClick={() => setOpenPopupAdd(true)}
            >
              Add
            </Button>
          </StyledToolbar>
        </AppBar>
        <TableReaders/>
        <Popup
          title='Form Add Reader'
          openPopup={openPopupAdd}
          setOpenPopup={setOpenPopupAdd}
        >
          <FormAddReader/>
        </Popup>
      </Box>
    </ReaderProvider>
  );
}