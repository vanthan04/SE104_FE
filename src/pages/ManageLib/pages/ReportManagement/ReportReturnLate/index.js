import React, { useState } from 'react';
import DateSelectorReturnLate from './DataSelectorReturnLate';
import ReportReturnLateTable from './ReportReturnLateTable';

const ReportReturnLatePage = () => {
     const [data, setData] = useState([]);

     return (
          <div>
               <h2>Report Return Late</h2>
               <DateSelectorReturnLate setData={setData} />
               <ReportReturnLateTable data={data} />
          </div>
     );
};

export default ReportReturnLatePage;
