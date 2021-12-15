/* eslint-disable react/jsx-pascal-case */

import React, { useEffect, useState } from 'react';
import { getCustomers } from '../../app/ApiResult';
import TableCustomes from '../Table/TablePeople/Customes';

function Customers(props) {


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
    const res = await getCustomers(paginate);
    setData(res?.data);
    setPaginate({
      ...paginate,
      count: res?.totalPages,
    });
    setFlag(false)
    setLoading(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);
  return (
    <>
    {loading ? (
      <TableCustomes
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

export default Customers;
