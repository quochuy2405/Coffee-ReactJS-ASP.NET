import { useEffect, useState } from 'react';
import { getRole } from '../../app/ApiResult';
import TableRole from '../Table/Role/Role';
function Role() {
  const [flag, setFlag] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [paginate, setPaginate] = useState({
    page: 1,
    size: 10,
    count: 0,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await getRole(paginate, '/role');
    setData(res?.data);
    setPaginate({
      ...paginate,
      count: res?.totalPages,
    });
    setFlag(false);
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <>
      {loading ? (
           <div className='spinner-border text-success' role='status'>
           <span className='visually-hidden'>Loading...</span>
         </div>
       
       
      ) : (
        <TableRole
        List={data}
        paginate={paginate}
        setPaginate={setPaginate}
        setFlag={setFlag}
        Type='ROLE' />
      )}
    </>
  );
}
export default Role;
