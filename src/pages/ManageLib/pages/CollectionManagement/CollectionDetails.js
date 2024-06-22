import React, { useEffect, useState } from 'react';
import CollectionTable from './CollectionTables'
import CollectionSelector from './CollectionSelector';
import ApiCollection from '../../../../untils/api/Collection';

const CollectionDetails = () => {
     const [data, setData] = useState(null);
     const [dataSelect, setDataSelect] = useState({
          MaDG: '',
     });

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await ApiCollection.getCollectionListByReaderID(dataSelect.MaDG); // Adjust the API endpoint as needed
                    setData(response.data);
               } catch (error) {
                    console.error('Failed to fetch data:', error);
               }
          };

          fetchData();
     }, [dataSelect]);

     return (
          <div>
               <CollectionSelector dataSelect={dataSelect} setDataSelect={setDataSelect} />
               {data ? <CollectionTable data={data} /> : <div>Loading...</div>}
          </div>
     );
};

export default CollectionDetails;
