import React from 'react'
import CollectionDetails from './CollectionDetails';
import { Container } from '@mui/material';
import { ReaderProvider } from '../../../../Context';

const CollectionManagementPage = () => {
     return (
          <ReaderProvider>
               <Container>
                    <CollectionDetails />
               </Container>
          </ReaderProvider>
     );
}

export default CollectionManagementPage