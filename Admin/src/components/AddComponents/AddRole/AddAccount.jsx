/* eslint-disable jsx-a11y/alt-text */
import Fade from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import { useSnackbar } from 'notistack';
import React, { useContext, useState } from 'react';
import { addRole } from '../../../app/ApiResult';
import { context } from './../../../app/Context';
import Role from './../../Role/index';
import './styles.scss';
function AddRole(props) {
  const Context = useContext(context);
  const { setBodyAdmin, setFillerAdmin } = Context;
  const { enqueueSnackbar } = useSnackbar();
  const [valueData, setValueData] = useState({
    RoleName: '',
    Description: '',
  });

  const handleChangeData = (event) => {
    setValueData({
      ...valueData,
      [event.target.name]: event.target.value,
    });
  };
  const HandleUpload = async () => {
    const res = await addRole(valueData);
    if(res.success && res.message ==='Yes' ){
      enqueueSnackbar('thanh cong', { variant: 'success' });
    }
    else{
      enqueueSnackbar('Loi ', { variant: 'warning' });
    }
  };
  function Prev() {
    setBodyAdmin(<Role />);
    setFillerAdmin('ROLE');
  }
  return (
    <div className='AddRole'>
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
          <h2 className='text-center pt-4'>Tạo tài khoản mới</h2>

          <div className='dataAdd'>
            <div className='form-floating mb-3 inputData'>
              <input
                type='text'
                className='form-control '
                name='RoleName'
                color='warning'
                value={valueData?.RoleName}
                onChange={handleChangeData}
              />
              <label htmlFor='floatingInput'>RoleName</label>
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

              <label htmlFor='floatingInput'>Description</label>
            </div>
            <div className='inputData'>
              <button
                type='submit'
                className='btn btn-success inputData'
                style={{ width: '100%', margin: '0 auto' }}
                onClick={HandleUpload}>
             Tạo tài khoản
              </button>
            </div>
          </div>
        </Paper>
      </Fade>
    </div>
  );
}

export default AddRole;
