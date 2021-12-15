/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react';
import { getAccounts } from '../../app/ApiResult';
import TableAccount from '../Table/TableAccount';
function Account() {
 
const [data, setData] = useState()
  const [flag,setFlag]=useState();
  const [loading, setLoading] = useState(false);
  const [paginate, setPaginate] = useState({
    page: 1,
    size: 10,
    count: 0,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
        const res = await getAccounts(paginate,"/account");
        setData(res?.data);
        setPaginate({
          ...paginate,
          count: res?.totalPages,
        });
        setLoading(true)
        setFlag(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [flag]);

return (

<> 

<ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item' role='presentation'>
          <button
        
            className='nav-link active'
            id='home-tab'
            data-bs-toggle='tab'
            data-bs-target='#home'
            type='button'
            role='tab'
            label="Show"
            aria-controls='home'
            aria-selected='true'>
          Khách hàng
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
       
            className='nav-link'
            id='profile-tab'
            data-bs-toggle='tab'
            data-bs-target='#profile'
            type='button'
            role='tab'
            aria-controls='profile'
            aria-selected='false'
                  >
            Nhân viên
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
      
            className='nav-link'
            id='contact-tab'
            data-bs-toggle='tab'
            data-bs-target='#contact'
            type='button'
            role='tab'
            aria-controls='contact'
            aria-selected='false'>
          Admin
          </button>
        </li>
      </ul>
  
      {loading ? (
        <TableAccount
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



export default Account;