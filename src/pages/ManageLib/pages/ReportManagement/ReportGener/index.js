import React, { useState } from 'react';
import DateSelector from './DataSelector';
import ReportTable from './ReportTable'

const ReportGener = () => {
     const [data, setData] = useState(null);

     return (
          <div>
               <h2>THỐNG KÊ THEO THỂ LOẠI</h2>
               <DateSelector setData={setData} />
               <ReportTable data={data} />
          </div>
     );
};

export default ReportGener;
