import { useSnackbar } from 'notistack';
import React, { memo, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { context } from '../../app/Context';
import { AuthContext } from './../../app/AuthContext';
import './styles.scss';
function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  let history=useHistory()
  const [dataFrom, setDataform] = useState({
    Username: '',
    Password: '',
  });
  const { Username, Password } = dataFrom;
  const OnchangedataForm = (event) =>
    setDataform({ ...dataFrom, [event.target.name]: event.target.value });
  const { loginUser } = useContext(AuthContext);
  const { setCheckToken } = useContext(context);
  const Login = async (event) => {
    event.preventDefault();
      const {success,data } = await loginUser(dataFrom);
      if(success && data?.Token){
        setCheckToken(  localStorage.getItem('accessToken')||false)
        enqueueSnackbar("Đăng nhập thành công", { variant: 'success' });
        history.push("")
      }
      else{
        enqueueSnackbar("Đăng nhập thất bại", { variant: 'error' });
      }
  };

  return (
    <div className='body_Page'>
      <div className='Login'>
        {' '}
        <div className='loginFrom'>
          <div className='img_group'>
            <i className='content'>Cùng thưởng thức một tách cà phê nào !!!</i>
            <img
              src='https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=2260&h=2750&dpr=1'
              alt=''
            />
          </div>
          <div className='login'>
            <form onSubmit={Login}>
              <h2 className='title'>Đăng nhập</h2>
              <div className='input_login input_username'>
                <i className='fas fa-user-astronaut'></i>
                <input
                  type='text'
                  id='Username'
                  name='Username'
                  placeholder='Tên đăng nhập'
                  onChange={OnchangedataForm}
                  value={Username}
                  required
                />
              </div>

              <div className='input_login input_password'>
                <i className='fal fa-lock-alt'></i>
                <input
                  type='Password'
                  className='input_password'
                  name='Password'
                  placeholder='Mật khẩu'
                  value={Password}
                  onChange={OnchangedataForm}
                  required
                />
              </div>

              <button type='submit' className='btn btn-success'>
                <b>Đăng nhập</b>
              </button>
            </form>
            <Link href='#' className='forgot_pass'>
              {' '}
              Quên mật khẩu ?
            </Link>
          </div>

          <div className='dot'></div>
        </div>
      </div>
    </div>
  );
}
export default memo(Login);
