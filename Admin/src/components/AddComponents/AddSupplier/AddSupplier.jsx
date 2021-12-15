/* eslint-disable jsx-a11y/alt-text */
import Fade from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { addSupplier } from '../../../app/ApiResult';
import './styles.scss';
function AddSupplier(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [valueData, setValueData] = useState({
    Name: '',
    Description: '',
    Address: '',
    City: '',
    Country: '',
    Phone: '',
    Url: '',
  });
  const handleChangeData = (event) => {
    setValueData({
      ...valueData,
      [event.target.name]:event.target.value
    });
  };
  const HandleUpload = async () => {
    const res = await addSupplier(valueData)
    if(res?.success)
      enqueueSnackbar('Tải lên thành công', { variant: 'success' });
    else
      enqueueSnackbar('Tải lên thất bại', { variant: 'error' });
  };
  return (
    <div className='AddSupplier'>
      <Fade in={true} timeout={200} style={{ height: '100%' }}>
        <Paper>
          <h2 className='text-center pt-4'>Thêm nhà cung cấp mới</h2>

          <div className='dataAdd'>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Name'
                color='warning'
                value={valueData?.Name}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Tên nhà cung cấp</label>
            </div>

            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control'
                name='Description'
                color='warning'
                value={valueData?.Description}
                onChange={handleChangeData}
              />

              <label htmlFor='floatingInput'>Mô tả nhà </label>
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

              <label htmlFor='floatingInput'>Địa chỉ</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='City'
                color='warning'
                value={valueData?.City}
                onChange={handleChangeData}
              />

              <label htmlFor='floatingInput'>Thành phố </label>
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

              <label htmlFor='floatingInput'>Quốc gia</label>
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

              <label htmlFor='floatingInput'>Số điện thoại</label>
            </div>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Url'
                color='warning'
                value={valueData?.Url}
                onChange={handleChangeData}
              />
               <label htmlFor='floatingInput'>Website</label>
            </div>
            <div className='inputData'>
              <button
                type='submit'
                className='btn btn-success inputData'
                style={{ width: '100%', margin: '0 auto' }}
                onClick={HandleUpload}>
                Thêm nhà cung cấp mới
              </button>
            </div>
          </div>
        </Paper>
      </Fade>
    </div>
  );
}

export default AddSupplier;
