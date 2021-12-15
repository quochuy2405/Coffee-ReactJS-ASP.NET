/* eslint-disable jsx-a11y/alt-text */
import Fade from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { addEmployee, getListStore } from '../../../app/ApiResult';
import { context } from './../../../app/Context';
import Sales from './../../Sales/index';
import './styles.scss';
function AddSale(props) {
 
  const Context = useContext(context);
  const { setBodyAdmin, setFillerAdmin} = Context;
  const { enqueueSnackbar } = useSnackbar();
  const [valueData, setValueData] = useState({
    Name: '',
    Age:'',
    Gender:1,
    Phone:'',
    Email:'',
    Address:'',
    City:'',
    Country:'',
    Salary:'',
    StoreId:''
  });
  const [listStoreId, setListStoreId] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{
   const res=await getListStore('/stores');
   setListStoreId(res)
   setValueData({...valueData,StoreId:res[0]?.Id})
  },[valueData])
  const handleChangeData = (event) => {
    setValueData({ ...valueData, [event.target.name]: [event.target.value].toString() });
  };

   const HandleUpload = async() => {


      const res = await addEmployee(valueData);
      if(res.success && res.message ==='Yes' ){
        enqueueSnackbar('thanh cong', { variant: 'success' });
      }
      else{
        enqueueSnackbar('Loi ', { variant: 'warning' });
      }
 
  };
  function Prev() {
    setBodyAdmin(<Sales />);
    setFillerAdmin('SALES');
  }
  return (
    <div className='AddSale'>
       
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
          <h2 className='text-center pt-4 '>Thêm nhân viên mới</h2>

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
              <label htmlFor='floatingInput'>Họ và tên</label>
            </div>

            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control'
                name='Age'
                color='warning'
                value= {valueData?.Age}
                onChange={handleChangeData}
              />
             
              <label htmlFor='floatingInput'>Tuổi</label>
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
                type='Email'
                className='form-control '
                name='Email'
                color='warning'
                value={valueData?.Email}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Email</label>
            </div>
            <div className='form-floating mb-3 inputData' >
              <select  className='form-control '
                name='Gender'
                color='warning'
                value={valueData?.Gender}
                onChange={handleChangeData}>

                  <option value="1">Nam</option>
                  <option value="0">Nữ</option>
                </select>
             
              <label htmlFor='floatingInput'>Giới tính</label>
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
                name='City'
                color='warning'
                value={valueData?.City}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>City</label>
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
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='Salary'
                color='warning'
                value={valueData?.Salary}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>Salary</label>
            </div>
            <div className='form-floating mb-3 inputData'>
            <select
                type='text'
                className='form-control '
                name='StoreId'
                color='warning'
                value={valueData?.StoreId}
                onChange={handleChangeData}>
                  {
                    listStoreId?.map((item,index)=>(
                      <option key={index} value={item?.Id}>{item.StoreName}</option>
                    ))
                  }
           
  
              </select>
              <label htmlFor='floatingInput'>StoreId</label>
            </div>
        
          
            <div className="button__submit">
              <button type="submit" className='btn btn-success' style={{minWidth:"200px",width:'100%'}} onClick={HandleUpload}>Thêm nhân viên</button>
            </div>
          </div>
        </Paper>
      </Fade>
    </div>
  );
}

export default AddSale;
