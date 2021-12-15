/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import Fade from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { getSupplierId, updateSupplier } from '../../app/ApiResult';
import Supplier from '../Supplier/index.';
import { context } from './../../app/Context';
import './stylesUpdateComponent/UpdateSupplier.scss';
function UpdateSupplier(props) {
  const { id } = props; 
  const Context = useContext(context);
  const { setBodyAdmin, setFillerAdmin } = Context;
  const { enqueueSnackbar } = useSnackbar();
  const [valueData, setValueData] = useState({
    Id:'',
    Name: '',
    Description: '',
    Address: '',
    City: '',
    Country: '',
    Phone: '',
    Url: '',
  });
  useEffect(async() => {
    const result = await getSupplierId(id,"/supplier")

  if(result){

    setValueData({
      ...valueData,
      Id:result.Id,
      Name: result.Name,
      Description: result.Description,
      Address: result.Address,
      City: result.City,
      Country: result.Country,
      Phone: result.Phone,
      Url: result.Url
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }},[id])
  const handleChangeData = (event) => {
    setValueData({
      ...valueData,
      [event.target.name]: event.target.value,
    });
  };
  const HandleUpload = async () => {

    const res = await updateSupplier(valueData)
    if(res?.success)
      enqueueSnackbar('Tải lên thành công', { variant: 'success' });
    else 
    enqueueSnackbar('Tải lên thất bại', { variant: 'error' });
  };
  function Prev() {
    setBodyAdmin(<Supplier />);
    setFillerAdmin('SUPPLIER');
  }
  return (
    <div className='UpdateSupplier'>
      <Fade in={true} timeout={200} style={{ height: '100%' }}>
        <Paper>
        <button
           style={{width:'fit-content', position:'absolute'}}
            type='button'
            className='btn btn-success d-flex gap-2'
            onClick={() => Prev()}>
            <i
              style={{ fontSize: '1.5rem'}}
              className='fad fa-chevron-circle-left'></i>
            <p className> Quay lại</p>
          </button>
          <h2 className='text-center pt-4'>Cập nhật nhà cung cấp </h2>
          <p  style={{width:'60%',margin:'0 auto'}}>Mã nhà cung cấp:{id}</p>
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

              <label htmlFor='floatingInput'>Địa chỉ </label>
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

              <label htmlFor='floatingInput'>Thành phố / Tỉnh </label>
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
                Cập nhật nhà cung cấp 
              </button>
            </div>
          </div>
        </Paper>
      </Fade>
    </div>
  );
}

export default UpdateSupplier;
