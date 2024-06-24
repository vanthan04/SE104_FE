import React, { useState } from 'react';
import DateSelectorReturnLate from './DataSelectorReturnLate';
import ReportReturnLateTable from './ReportReturnLateTable';

const ReportReturnLatePage = () => {
     const [data, setData] = useState([]);

     return (
          <div>
               <h2>THỐNG KÊ SÁCH TRẢ TRỄ</h2>
               <DateSelectorReturnLate setData={setData} />
               <ReportReturnLateTable data={data} />
          </div>
     );
};

export default ReportReturnLatePage;
