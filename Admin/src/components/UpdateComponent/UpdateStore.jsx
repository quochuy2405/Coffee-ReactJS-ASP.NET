/* eslint-disable jsx-a11y/alt-text */
import Fade from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { getManager, getStoreId, updateStore } from '../../app/ApiResult';
import { context } from '../../app/Context';
import Store from '../Store/index.';
import './stylesUpdateComponent/UpdateStore.scss';
function UpdateStore(props) {
  const { id } = props;
  const Context = useContext(context);
  const { setBodyAdmin, setFillerAdmin } = Context;
  const [manager, setManager] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [valueData, setValueData] = useState({
    Id: '',
    StoreName: '',
    Description: '',
    Address: '',
    Country: '',
    Phone: '',
    ManagerId: '',
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const result = await getStoreId(id, '/store');
    const listManager = await getManager();
    setManager(listManager);

    if (result) {
      setValueData({
        ...valueData,
        Id: result?.Id,
        StoreName: result?.StoreName,
        Description: result?.Description,
        Address: result?.Address,
        Country: result?.Country,
        Phone: result?.Phone,
        ManagerId: result?.ManagerId,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const handleChangeData = (event) => {
    setValueData({ ...valueData, [event.target.name]: event.target.value });
  };
  const HandleUpload = async () => {
    const res = await updateStore(valueData);
    if (res?.success && res?.message === 'Yes') {
      enqueueSnackbar('Đa xac nhan', { variant: 'success' });
    } else {
      enqueueSnackbar('Loi ', { variant: 'warning' });
    }
  };
  function Prev() {
    setBodyAdmin(<Store />);
    setFillerAdmin('STORE');
  }
  return (
    <div className='UpdateStore'>
      <Fade in={true} timeout={200} style={{ height: '100%' }}>
        <Paper>
          <button
            type='button'
            className='btn btn-success d-flex gap-2'
            style={{ position: 'absolute' }}
            onClick={() => Prev()}>
            <i
              style={{ fontSize: '1.5rem' }}
              className='fad fa-chevron-circle-left'></i>
            <p className> Quay lại</p>
          </button>
          <h2 className='text-center pt-4 '>Cập nhật cửa hàng </h2>
          <p style={{ width: '60%', margin: '0 auto' }}>Mã cửa hàng:{id}</p>
          <div className='dataAdd'>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='StoreName'
                color='warning'
                value={valueData?.StoreName}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>StoreName</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <select
                className='form-control '
                name='ManagerId'
                color='warning'
                value={valueData.ManagerId}
                onChange={handleChangeData}>
                {manager?.map((item, index) => (
                  <option key={index} value={item.Id}>
                    {item.Name}
                  </option>
                ))}
              </select>

              <label htmlFor='floatingInput'>Quản lý</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Phone'
                color='warning'
                value={valueData?.Phone}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Phone</label>
            </div>

            <div className='form-floating inputData'>
              <textarea
                className='form-control'
                placeholder='Leave a comment here'
                id='floatingTextarea2'
                name='Description'
                color='warning'
                value={valueData?.Description}
                onChange={handleChangeData}
                style={{ height: '170px' }}></textarea>
              <label className='description' htmlFor='floatingTextarea2'>
                Nội dung
              </label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Address'
                color='warning'
                value={valueData?.Address}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Address</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Country'
                color='warning'
                value={valueData?.Country}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Country</label>
            </div>

            <div className='button__submit'>
              <button
                type='submit'
                className='btn btn-success'
                style={{ minWidth: '200px', width: '100%' }}
                onClick={HandleUpload}>
                Cập nhật
              </button>
            </div>
          </div>
        </Paper>
      </Fade>
    </div>
  );
}

export default UpdateStore;
