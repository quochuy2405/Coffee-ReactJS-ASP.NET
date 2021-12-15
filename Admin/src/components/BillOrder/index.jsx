/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react';
import { getBill } from '../../app/ApiResult';
import TableBill from '../Table/TableBill';
function BillOrder() {
  const [data, setData] = useState();
  const [flag, setFlag] = useState();
  const [loading, setLoading] = useState(false);
  const [paginate, setPaginate] = useState({
    page: 1,
    size: 10,
    count: 0,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await getBill(paginate, '/bill');
    setData(res?.data);
    setPaginate({
      ...paginate,
      count: res?.totalPages,
    });
    setFlag(false);
    setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);
  return (
    <>
      {loading ? (
        <TableBill
          List={data}
          paginate={paginate}
          setFlag={setFlag}
          setPaginate={setPaginate}
        />
      ) : (
        <div className='spinner-border text-success' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      )}
    </>
  );
}

export default BillOrder;
