//React
import { useEffect, useState } from 'react';
//Icon
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
//Components
import { Box, AppBar, Button, InputBase, Toolbar, Typography, styled } from '@mui/material';
//Local
import Popup from '../../../../components/controls/Popup';
import FormAddReader from './FormAddReader';
import ApiUser from '../../../../untils/api/user';
import { TableReaders } from './TableReaders';



const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
}
)

const Search = styled('div')(({ theme }) => ({
  backgroundColor: "white",
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

export const ReaderManagementPage = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await ApiUser.getAllReader('/readerManage/getAllReaders')
      setData(response.data);
      console.log(response)
    };
    fetchData();
  }, []);


  return (
    <Box sx={{ height: 400, width: '100%', mt: 5 }}>
      <AppBar position='static'>
        <StyledToolbar>
          <Typography variant='h6'>Libary Management - Table Reader</Typography>
          <Search><InputBase placeholder='seacrh reader...' sx={{ width: "100%" }} /></Search>
          <Button
            color='success'
            variant='contained'
            startIcon={<PersonAddAlt1OutlinedIcon />}
            onClick={() => setOpenPopup(!openPopup)}
          >
            Add
          </Button>
        </StyledToolbar>
      </AppBar>
      <TableReaders data={data} />
      <Popup
        title='Form Add Reader'
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FormAddReader closePopup={() => setOpenPopup(!openPopup)} />
      </Popup>
    </Box>
  );
}