import { Checkbox, Radio } from '@mui/material';
import jwt_decode from "jwt-decode";
import { useSnackbar } from 'notistack';
import React, { memo, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CheckoutData, getCustomerById } from '../../app/ApiResult';
import { context } from '../../app/Context';
import { decreaseBill, reset } from '../../app/CounterBill';
import { actionKM } from '../../app/KMOpen';
import './styles.scss';

function Checkout(props) {
  const [get, SetGet] = useState(JSON.parse(localStorage.getItem('LISTBILL') || '[]'));
  const {checkToken ,address} = useContext(context);
  const [pay, setPay] = useState('tienmat');
  const { enqueueSnackbar } = useSnackbar();
  const [total, setTotal] = useState(0);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const KMOpen = useSelector((state) => state.KMOpen);
  const dispatch = useDispatch();
  const [dataUser,setDataUser]=useState({

    Address:'',
    Time:'',
    Name:'',
    Phone:'',
    Note:'',
    PayBy:'',
    listBill:get,
    CustomerId:'',
    TotalPrice:0
  });

  
  useEffect(() => {
    var Total = get.reduce((total, item) => {
      return total + item.price;
    }, 0);
    setDataUser({...dataUser,TotalPrice:Total});
    setTotal(Total)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[get])
 
 
  function removeItem(index) {
    SetGet(JSON.parse(localStorage.getItem('LISTBILL')) || []);
    if (get.length) {
      SetGet(get.splice(index, 1));
      localStorage.setItem('LISTBILL', JSON.stringify(get));
      SetGet(JSON.parse(localStorage.getItem('LISTBILL')));
      dispatch(decreaseBill());
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async ()=>{
    if(checkToken){
      var decoded = jwt_decode(checkToken);
 
      if(decoded?.Id)
      {
       const res= await getCustomerById(decoded?.Id)
       if(res)
   
       setDataUser({...dataUser,
        Name:res?.Name,
        Phone:res?.Phone,
        CustomerId:res?.Id})
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[checkToken])

  const handleChange = (event) => {
    setPay(event.target.value);

  };
  const handleOnChange = (e) => {
    setDataUser({...dataUser,[e.target.name]:e.target.value});
  };
  const controlProps = (item) => ({
    checked: pay === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
   const OnSubmit = async ()=>{
     if(dataUser?.CustomerId)
     {
      const response = await CheckoutData({...dataUser,PayBy:pay})
      if(response?.status===200){
       enqueueSnackbar('?????t h??ng th??nh c??ng', { variant: 'success' });
      }else{
       enqueueSnackbar('?????t h??ng th???t b???i', { variant: 'error' });
      }
     }
     else{
      enqueueSnackbar('?????t h??ng th???t b???i', { variant: 'error' });
     }
  
  }

  return (
    <div className='Checkout_com'>
      <div className='Checkout_com_Title'>
      <i className="fad fa-file"></i>
        <h3>X??c nh???n ????n h??ng</h3>
      </div>
      <div className='checkout__body'>
        <div className='body__Pay'>
          <div className='type_buy'>
            <div className='type'>
              <p className='type_Name'>{address?.TitleDelivery}</p>
              <div className='change_type'>
                <label htmlFor='check_choose'>
                  {' '}
                  <p>?????i ph????ng th???c</p>
                </label>
              </div>
            </div>
            <div className='info_type'>
              <div className='info_imgType'>
                <img
                  src={address?.Photo}
                  alt=''
                />
              </div>
              <div className='info_des'>
                <div className='location d-flex justify-content-between'>
                  <div>
                    <b>?????a ch??? giao h??ng t???i </b>
                    <p>
                   
                      { address?.Address|| <div style={{color:'red',fontWeight:'550'}}> 
                      B???n ch??a nh???p ?????a ch??? giao h??ng:  <br/>
                      C?? ph??p: <br/> S??? nh?? - T??n ???????ng - Qu???n - Th??nh ph??? </div>}
                    </p>
                  </div>{' '}
                  <div className='d-flex flex-column justify-content-center'>
                    <i className='fa fa-chevron-right'></i>
                  </div>
                </div>

                <div className='time d-flex justify-content-between'>
                  <div>
                    <b>Nh???n h??ng trong ng??y 15-30 ph??t</b>
                    <p>V??o l??c: C??ng s???m c??ng t???t</p>
                  </div>
                  <div className='d-flex flex-column justify-content-center'>
                    <i className='fa fa-chevron-right '></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form action='' method='post'>
            <div className='input_address'>
              <div className='input_info'>
                <input
                  type='text'
                  name='Name'
                  id='Name'
                  onChange={e=>handleOnChange(e)}
                  value={dataUser?.Name}
                  placeholder='T??n ng?????i nh???n'
                  required
                />
              </div>
              <div className='input_info'>
                <input type='text' name='Phone' id='Phone' required 
                  value={dataUser?.Phone} 
                       onChange={e=>handleOnChange(e)}
                placeholder="S??? ??i???n tho???i"/>
              </div>
              <div className='input_info'>
                <input
                  type='text'
                  name='Note'
                  id='Note'
                  value={dataUser?.Note} 
                  onChange={e=>handleOnChange(e)}
                  placeholder='Th??m h?????ng d???n ?????t h??ng'
                />
              </div>
            </div>

            <div className='pay_for'>
              <p className='type_Name'>Ph????ng th???c thanh to??n</p>
              <div className='checkpay'>
       
            
                <label htmlFor='tienmat'>
                <Radio {...controlProps('tienmat')} color="default" name='pay' id='tienmat' />
                  <img
                    src='https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg'
                    alt=''
                  />
                  <span>Ti???n m???t</span>
                </label>
              </div>
              <div className='checkpay'>
              
            
                <label htmlFor='momo'>
                <Radio {...controlProps('momo')} color="default" name='pay' id='momo' />
                  <img
                    src='https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png'
                    alt=''
                  />
                  <span>MoMo</span>
                </label>
              </div>

              <div className='checkpay'>
             
            
                <label htmlFor='zalopay'>
                <Radio {...controlProps('zalopay')} color="default" name='pay' id='zalopay' />
                  <img
                    src='https://minio.thecoffeehouse.com/image/tchmobileapp/388_ic_zalo@3x.png'
                    alt=''
                  />
                  <span>ZaloPay</span>
                </label>
              </div>

              <div className='checkpay'>
            
                <label htmlFor='shopeepay'>
                <Radio {...controlProps('shopeepay')} color="default"  name='pay' id='shopeepay'/>
            
                  <img
                    src='https://minio.thecoffeehouse.com/image/tchmobileapp/1120_1119_ShopeePay-Horizontal2_O.png'
                    alt=''
                  />
                  <span>ShopeePay</span>
                </label>
              </div>
            </div>
            <div className='agree'>
            <Checkbox {...label}  color="secondary"   name='agree' />
              <span>
                {' '}
                ?????ng ?? v???i c??c ??i???u kho???n v??{' '}
                <span>
                  <Link to='#/'> ??i???u ki???n mua h??ng </Link>
                </span>{' '}
                c???a The Coffee House
              </span>
            </div>
          </form>
        </div>
        <div className='body__bill'>
          <div className='bill'>
            <p className='bill_Name'>C??c m??n ???? ch???n</p>
            <div className='add_item'>
              <Link to='/Product'>
                <p>Th??m m??n</p>
              </Link>
            </div>
          </div>
          <ul className='list__bill'>
            {get.map((item, index) => (
              <li key={index} className='list__bill-Iteam'>
                <div className='list_fix'>
                <i className="fad fa-acorn"></i>
                </div>
                <div className='list_text'>
                  <b className='tilte_item'>{item.title} </b>

                  <p className='size'>{item.TitleSize}</p>
                  <p className='btn_delete' onClick={() => removeItem(index)}>
                    X??a
                  </p>
                </div>
                <div className='list_price'>
                  <p>
                    {(item.price*1).toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                    })}
                    ??
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className='Total'>
            <p className='bill_Name'>T???ng c???ng</p>
            <div className='thanhtien'>
              <p>Th??nh ti???n</p>
              <p className='price_total'>
                {total?.toLocaleString(undefined, { minimumFractionDigits: 0 })}??
              </p>
            </div>{' '}
            <div
              className='khuyenmai d-flex justify-content-between'
              onClick={() => dispatch(actionKM(KMOpen))}>
              <p>Khuy???n m??i</p>
              <i className='fa fa-chevron-right'></i>
            </div>{' '}
            <div className='dathang d-flex justify-content-between p-2 lh-3'>
              <div className='thanhtien_main d-flex flex-column justify-content-center'>
                <p>Th??nh ti???n</p>
                <p className='price_total'>
                  {total?.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}
                  ??
                </p>
              </div>
              <div className='btn_dathang d-flex flex-column justify-content-center ' onClick={OnSubmit}>
                <p>?????t h??ng</p>
              </div>
            </div>
          </div>
          <div className='delete_Bill'>
            <p
              onClick={() => {
                localStorage.removeItem('LISTBILL');
                SetGet([]);
                dispatch(reset());
              }}>
              X??a t???t c???
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Checkout);
