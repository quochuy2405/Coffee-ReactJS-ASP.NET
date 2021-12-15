/* eslint-disable jsx-a11y/alt-text */
import Fade from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import { useSnackbar } from 'notistack';
import React, { useContext, useState } from 'react';
import { addStore } from '../../../app/ApiResult';
import { context } from '../../../app/Context';
import Store from './../../Store/index.';
import './styles.scss';
function AddStore({manager}) {
  const Context = useContext(context);
  const { setBodyAdmin, setFillerAdmin} = Context;
  const { enqueueSnackbar } = useSnackbar();
  const [valueData, setValueData] = useState({
    StoreName:'',
    Description:'',
    Address:'',
    Country:'',
    Phone:'',
    ManagerId:manager[0]?.Id
  });
  const handleChangeData = (event) => {
    setValueData({ ...valueData, [event.target.name]:event.target.value});
  };
  const HandeladdStore= async ()=>{
    const res = await addStore(valueData)
    if(res?.success)
    enqueueSnackbar('Tải lên thành công', { variant: 'success' });
    else
    enqueueSnackbar('Tải lên thất bại', { variant: 'error' });
  }
  function Prev() {
    setBodyAdmin(<Store />);
    setFillerAdmin('STORE');
  }
  return (
    <div className='AddStore'>
       
      <Fade in={true} timeout={200} style={{ height: '100%' }}>
        <Paper>
        <button
            type='button'
            className='btn btn-success d-flex gap-2'
            style={{position:"absolute" }}
            onClick={() => Prev()}>
            <i
              style={{ fontSize: '1.5rem'}}
              className='fad fa-chevron-circle-left'></i>
            <p className> Quay lại</p>
          </button>
          <h2 className='text-center pt-4 '>Thêm cửa hàng mới</h2>

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
              <label htmlFor='floatingInput'>ManagerId</label>
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
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control'
                name='Description'
                color='warning'
                value= {valueData?.Description}
                onChange={handleChangeData}
              />
             
              <label htmlFor='floatingInput'>Description</label>
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
      
        
            <div className="button__submit">
              <button type="submit" className='btn btn-success' style={{minWidth:"200px",width:'100%'}}  onClick={HandeladdStore}>Thêm cửa hàng</button>
            </div>
          </div>
        </Paper>
      </Fade>
    </div>
  );
}

export default AddStore;
