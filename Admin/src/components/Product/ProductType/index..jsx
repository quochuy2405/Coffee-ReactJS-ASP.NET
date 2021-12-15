import { useEffect, useState } from 'react';
import { getProductTypes } from '../../../app/ApiResult';
import TableProductType from '../../Table/TableProduct/ProductType.';
function ProductType() {
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
    const res = await getProductTypes(paginate, '/ProductTypes');
    setData(res?.data);
    setPaginate({
      ...paginate,
      count: res?.totalPages,
    });
    setFlag(false);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <>
      {loading ? (
        <div className='spinner-border text-success' ProductType='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      ) : (
        <TableProductType
          List={data}
          paginate={paginate}
          setPaginate={setPaginate}
          setFlag={setFlag}
          Type='PRODUCTTYPE'
        />
      )}
    </>
  );
}
export default ProductType;
