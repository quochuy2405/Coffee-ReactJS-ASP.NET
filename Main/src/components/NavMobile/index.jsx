import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import ListTicket from '../listTicket/index';
import { useDispatch, useSelector } from 'react-redux';
import { actionKM } from '../../app/KMOpen';
import { useEffect } from 'react';

function Nav_mobile(props) {
  const KMOpen = useSelector((state) => state.KMOpen);
  const dispatch = useDispatch();
  const handleClickOpenKM = () => {
    dispatch(actionKM(true));
  };
  useEffect(() => {
    const listButton = document.querySelectorAll('.btn.nav');
    listButton.forEach((item) => {
      item.addEventListener('click', () => {
        document.getElementById('nav_X').click();
      });
    });
  }, []);
  return (
    <>
      <input type='checkbox' name='' id='nav_hamber' />
      <div className='main_navhamber'>
        <label htmlFor='nav_hamber' className='close_nav'>
          <p id='nav_X'>&#x2715;</p>
        </label>
        <ul className='nav_hamber-item'>
          <Link to='/product'>
            <button type='button' className='btn nav btn-primary'>
              Đặt Hàng
            </button>
          </Link>
          <Link to='/news'>
            <button type='button' className='btn nav btn-danger'>
              Tin Tức
            </button>
          </Link>
          <Link to='/store'>
            <button type='button' className='btn nav btn-warning'>
              <label htmlFor='nav_hamber' style={{ width: '100%' }}>
                Cửa Hàng
              </label>
            </button>
          </Link>

          <button
            type='button'
            onClick={handleClickOpenKM}
            className='btn nav btn-success'>
            Khuyến Mãi
          </button>

          <ListTicket open={KMOpen} />
        </ul>
      </div>
    </>
  );
}

export default Nav_mobile;
