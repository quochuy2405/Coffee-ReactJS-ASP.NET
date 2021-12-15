import { useEffect, useState } from 'react';
import { getManager, getStore } from '../../app/ApiResult';
import TableStore from '../Table/Store';
function Store() {
  const [flag, setFlag] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [manager,setManager]=useState([])
  const [paginate, setPaginate] = useState({
    page: 1,
    size: 10,
    count: 0,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await getStore(paginate, '/stores');
    const listManager = await getManager();
    setManager(listManager)
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
           <div className='spinner-border text-success' Store='status'>
           <span className='visually-hidden'>Loading...</span>
         </div>
       
       
      ) : (
        <TableStore
        List={data}
        paginate={paginate}
        setPaginate={setPaginate}
        setFlag={setFlag}
        manager={manager}
        Type='STORE' />
      )}
    </>
  );
}
export default Store;
