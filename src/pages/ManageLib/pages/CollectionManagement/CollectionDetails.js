import React, { useEffect, useState } from 'react';
import CollectionTable from './CollectionTables'
import CollectionSelector from './CollectionSelector';
import ApiCollection from '../../../../untils/api/Collection';

const CollectionDetails = () => {
     const [data, setData] = useState(null);
     const [dataSelect, setDataSelect] = useState({ MaDG: '' });
     const [loading, setLoading] = useState(false);

     useEffect(() => {
          const fetchData = async () => {
               if (dataSelect.MaDG) {
                    setLoading(true);
                    try {
                         const response = await ApiCollection.getCollectionListByReaderID(dataSelect.MaDG);
                         setData(response.data);
                    } catch (error) {
                         console.error('Failed to fetch data:', error);
                         setData(null);
                    } finally {
                         setLoading(false);
                    }
               }
          };

          fetchData();
     }, [dataSelect]);

     return (
          <div>
               <CollectionSelector dataSelect={dataSelect} setDataSelect={setDataSelect} />
               {
                    !loading && data ? <CollectionTable data={data} /> : <div>Đang tải...</div>
               }
               
          </div>
     );
};

export default CollectionDetails;
