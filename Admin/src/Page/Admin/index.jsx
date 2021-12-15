/* eslint-disable react/jsx-pascal-case */
import 'bootstrap';
import React, { useContext, useEffect } from 'react';
import { context } from '../../app/Context';
import Account from '../../components/Account/index';
import ProductUpload from '../../components/AddComponents/ProductUpload/index';
import BillOrder from '../../components/BillOrder';
import Customers from '../../components/Customers/index';
import Product from '../../components/Product/index';
import ProductType from '../../components/Product/ProductType/index.';
import Store from '../../components/Store/index.';
import Supplier from '../../components/Supplier/index.';
import Revenue from './../../components/Revenue/index';
import Role from './../../components/Role/index';
import Sales from './../../components/Sales/index';
import './styles.scss';
import AddSupplier from './../../components/AddComponents/AddSupplier/AddSupplier';
import {useDetectClickOutside} from 'react-detect-click-outside'
function Admin() {
  const ListContext = useContext(context);
  const HidenMainBar=()=>{
    if(document.getElementById('nav_admin').checked)
    document.getElementById('nav_X_admin').click()
  };
  const ref = useDetectClickOutside({ onTriggered: HidenMainBar });
  const { fitterAdmin, setFillerAdmin, bodyAdmin, setBodyAdmin } = ListContext;
  useEffect(() => {
    const ListTag = document.querySelectorAll('.tag_menu');
    ListTag.forEach((item) => {
      item.addEventListener('click', () => {
        document.getElementById('nav_X_admin').click();
        const valueData = item.getAttribute('data-set');
        setFillerAdmin(valueData);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ListTag = document.querySelectorAll('.tag_menu');
    ListTag.forEach((item) => {
      const valueData = item.getAttribute('data-set');
      if (fitterAdmin === valueData) {
        item.classList.add('active');
      } else {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        }
      }
    });
    var handleBody = () => {
      switch (fitterAdmin) {
        case 'BILLORDER': {
          return <BillOrder />;
        }
        case 'CUSTOMERS': {
          return <Customers />;
        }
        case 'SALES': {
          return <Sales />;
        }
        case 'ROLE': {
          return <Role />;
        }
        case 'PRODUCTTYPE': {
          return <ProductType />;
        }
        case 'ACCOUNT': {
          return <Account />;
        }
        case 'REVENUE': {
          return <Revenue />;
        }
        case 'PRODUCT': {
          return <Product />;
        }
        case 'PRODUCTUPLOAD': {
          return <ProductUpload />;
        }
        case 'SUPPLIER': {
          return <Supplier />;
        }
        case 'ADDSUPPLIER': {
          return <AddSupplier />;
        }
        case 'STORE': {
          return <Store />;
        }
        default: {
          return <BillOrder />;
        }
      }
    };
    setBodyAdmin(handleBody);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fitterAdmin]);

  return (
    <div className='Admin'>
      <div className='header'>
        <div className='nav-top'>
          <div className='logo' style={{ transform: 'scale(0.455)' }}>
            <svg
              width='260'
              height='147.16953620795795'
              viewBox='0 0 260 147.16953620795795'
              className='css-1j8o68f'>
              <defs id='SvgjsDefs1324'>
                <linearGradient id='SvgjsLinearGradient1331'>
                  <stop id='SvgjsStop1332' offset='0'></stop>
                  <stop id='SvgjsStop1333' offset='1'></stop>
                </linearGradient>
                <linearGradient id='SvgjsLinearGradient1334'>
                  <stop id='SvgjsStop1335' offset='0'></stop>
                  <stop id='SvgjsStop1336' offset='1'></stop>
                </linearGradient>
                <linearGradient id='SvgjsLinearGradient1337'>
                  <stop id='SvgjsStop1338' offset='0'></stop>
                  <stop id='SvgjsStop1339' offset='1'></stop>
                </linearGradient>
              </defs>
              <g
                id='SvgjsG1325'
                featurekey='monogramFeature-0'
                transform='matrix(1.35,0,0,1.35,105.02024981975555,-0.2999974250793471)'
                fill='url(#SvgjsLinearGradient1331)'>
                <path d='M20.7 60 c-8.22 0 -17.82 -3.54 -19.86 -13.56 c-1.14 -5.28 -1.14 -9.66 0 -14.94 c1.8 -8.22 9.54 -13.5 19.62 -13.5 c7.8 0 12.06 2.4 15.24 5.58 c3.24 3.24 2.16 7.56 -1.38 10.92 c-3.66 3.42 -6.72 3.18 -10.56 0.72 c-2.28 -1.44 -6.3 -1.14 -7.62 1.92 c-0.54 1.38 -0.6 2.88 0.06 4.26 c0.9 1.92 2.46 2.16 4.56 2.22 c3.54 0.3 4.92 -2.58 8.28 -2.58 c1.68 0 3.48 0.9 5.46 2.64 c4.5 4.14 4.5 8.22 -0.12 12.24 c-2.94 2.58 -8.16 4.08 -13.68 4.08 z M20.46 22.14 c-6.42 0 -13.98 2.76 -15.6 10.26 c-0.96 4.62 -0.96 8.58 0 13.2 c1.62 7.56 9.3 10.26 15.84 10.26 c4.56 0 8.76 -1.2 10.92 -3.06 c2.58 -2.4 2.76 -3.54 0.06 -6.06 c-2.4 -2.04 -3 -1.68 -4.62 -0.72 c-1.44 0.78 -3.42 1.92 -6.54 1.74 c-8.46 -0.18 -10.14 -7.56 -8.22 -12.18 c2.22 -5.58 9.42 -6.72 13.74 -3.84 c2.34 1.62 3.36 1.68 5.46 -0.3 c1.62 -1.44 2.88 -3.48 1.26 -4.92 c-2.52 -2.52 -4.86 -3.72 -9.18 -4.2 c-1.02 -0.12 -2.1 -0.18 -3.12 -0.18 z'></path>
              </g>
              <g
                id='SvgjsG1326'
                featurekey='nameFeature-0'
                transform='matrix(0.604951744410501,0,0,0.604951744410501,-1.0393073461296793,98.11163943713517)'
                fill='url(#SvgjsLinearGradient1334)'>
                <path d='M16.152 40.39063 c-8.3008 0 -14.434 -5.6445 -14.434 -14.512 s6.1328 -14.492 14.434 -14.492 c6.2891 0 11.328 3.2227 13.34 8.5742 l-5.4688 1.9922 c-1.25 -3.2813 -4.2383 -5.1758 -7.8711 -5.1758 c-4.8633 0 -8.5938 3.3984 -8.5938 9.1016 s3.7305 9.1211 8.5938 9.1211 c3.6328 0 6.6211 -1.9141 7.8711 -5.1953 l5.4688 1.9922 c-2.0117 5.3516 -7.0508 8.5938 -13.34 8.5938 z M50.42934375 40.39063 c-8.3008 0 -14.434 -5.6641 -14.434 -14.512 c0 -8.8672 6.1328 -14.492 14.434 -14.492 c8.2813 0 14.414 5.625 14.414 14.492 c0 8.8477 -6.1328 14.512 -14.414 14.512 z M50.42934375 35.0195 c4.8633 0 8.5938 -3.418 8.5938 -9.1406 c0 -5.7031 -3.7305 -9.1016 -8.5938 -9.1016 s-8.5938 3.3984 -8.5938 9.1016 c0 5.7227 3.7305 9.1406 8.5938 9.1406 z M90.50784375 16.934 l-10.742 0 l0 6.4063 l9.2773 0 l0 5.0977 l-9.2773 0 l0 11.563 l-5.8984 0 l0 -28.223 l16.641 0 l0 5.1563 z M115.78128125 16.934 l-10.742 0 l0 6.4063 l9.2773 0 l0 5.0977 l-9.2773 0 l0 11.563 l-5.8984 0 l0 -28.223 l16.641 0 l0 5.1563 z M140.78171875 16.934 l-10.469 0 l0 6.4063 l9.2773 0 l0 5.0977 l-9.2773 0 l0 6.3867 l10.469 0 l0 5.1758 l-16.367 0 l0 -28.223 l16.367 0 l0 5.1563 z M166.816875 16.934 l-10.469 0 l0 6.4063 l9.2773 0 l0 5.0977 l-9.2773 0 l0 6.3867 l10.469 0 l0 5.1758 l-16.367 0 l0 -28.223 l16.367 0 l0 5.1563 z M209.39446875 40 l-2.0508 -5.8203 l-11.855 0 l-2.0508 5.8203 l-5.9961 0 l10.391 -28.223 l7.168 0 l10.391 28.223 l-5.9961 0 z M197.20746875 29.277 l8.418 0 l-4.1992 -11.973 z M242.539375 11.777000000000001 l5.8398 0 l0 28.223 l-6.7773 0 l-12.5 -20.176 l0 20.176 l-5.8398 0 l0 -28.223 l6.6992 0 l12.578 20.059 l0 -20.059 z M259.3163625 40 l0 -28.223 l10.215 0 c9.0039 0 13.457 5.6641 13.457 14.102 c0 8.457 -4.4531 14.121 -13.457 14.121 l-10.215 0 z M265.1757625 34.8242 l4.0625 0 c5.1953 0 7.5781 -3.2422 7.5781 -8.9453 s-2.3828 -8.9453 -7.5781 -8.9453 l-4.0625 0 l0 17.891 z M321.28946875 25.098 c3.1836 0.87891 5.3125 2.9688 5.3125 6.9922 c0 4.7656 -2.8906 7.9102 -8.8477 7.9102 l-11.621 0 l0 -28.223 l9.1406 0 c6.0938 0 9.2969 2.9297 9.2969 7.7344 c0 2.4805 -1.0742 4.5117 -3.2813 5.5859 z M315.33246875 16.641 l-3.5547 0 l0 6.6406 l3.8086 0 c2.5 0 3.5938 -1.4844 3.5938 -3.3984 c0 -1.875 -1.2305 -3.2422 -3.8477 -3.2422 z M316.66046875 34.9805 c3.1641 0 4.2578 -1.6992 4.2578 -3.5352 c0 -1.875 -1.0742 -3.6523 -4.375 -3.6523 l-4.7656 0 l0 7.1875 l4.8828 0 z M347.948875 40.39063 c-8.3008 0 -14.434 -5.6641 -14.434 -14.512 c0 -8.8672 6.1328 -14.492 14.434 -14.492 c8.2813 0 14.414 5.625 14.414 14.492 c0 8.8477 -6.1328 14.512 -14.414 14.512 z M347.948875 35.0195 c4.8633 0 8.5938 -3.418 8.5938 -9.1406 c0 -5.7031 -3.7305 -9.1016 -8.5938 -9.1016 s-8.5938 3.3984 -8.5938 9.1016 c0 5.7227 3.7305 9.1406 8.5938 9.1406 z M383.886375 40.39063 c-8.3008 0 -14.434 -5.6641 -14.434 -14.512 c0 -8.8672 6.1328 -14.492 14.434 -14.492 c8.2813 0 14.414 5.625 14.414 14.492 c0 8.8477 -6.1328 14.512 -14.414 14.512 z M383.886375 35.0195 c4.8633 0 8.5938 -3.418 8.5938 -9.1406 c0 -5.7031 -3.7305 -9.1016 -8.5938 -9.1016 s-8.5938 3.3984 -8.5938 9.1016 c0 5.7227 3.7305 9.1406 8.5938 9.1406 z M424.023875 40 l-8.7695 -11.992 l-2.0703 0 l0 11.992 l-5.8594 0 l0 -28.223 l5.8594 0 l0 11.094 l1.9922 0 l8.8477 -11.094 l7.1484 0 l-10.938 13.496 l11.27 14.727 l-7.4805 0 z'></path>
              </g>
              <g
                id='SvgjsG1327'
                featurekey='sloganFeature-0'
                transform='matrix(0.6322946422988266,0,0,0.6322946422988266,48.84517718976527,134.40014982216533)'
                fill='url(#SvgjsLinearGradient1337)'>
                <path d='M10.01 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z M27.6612890625 5.888999999999999 l2.9199 0 l0 14.111 l-3.3887 0 l-6.25 -10.088 l0 10.088 l-2.9199 0 l0 -14.111 l3.3496 0 l6.2891 10.029 l0 -10.029 z M41.37694375 20.19531 c-1.0938 0 -2.4219 -0.29297 -3.7305 -0.97656 l1.2402 -2.4121 c0.69336 0.48828 1.3672 0.75195 2.1387 0.75195 c1.1523 0 1.7383 -0.69336 1.7383 -2.3438 l0 -9.3262 l2.9297 0 l0 9.873 c0 2.8906 -1.7578 4.4336 -4.3164 4.4336 z M60.3662390625 20.19531 c-4.1504 0 -7.2168 -2.832 -7.2168 -7.2559 c0 -4.4336 3.0664 -7.2461 7.2168 -7.2461 c4.1406 0 7.207 2.8125 7.207 7.2461 c0 4.4238 -3.0664 7.2559 -7.207 7.2559 z M60.3662390625 17.5098 c2.4316 0 4.2969 -1.709 4.2969 -4.5703 c0 -2.8516 -1.8652 -4.5508 -4.2969 -4.5508 s-4.2969 1.6992 -4.2969 4.5508 c0 2.8613 1.8652 4.5703 4.2969 4.5703 z M85.8495 5.888999999999999 l-4.6387 7.3535 l0 6.7578 l-2.9395 0 l0 -6.6895 l-4.668 -7.4219 l3.2422 0 l2.8809 4.8047 l2.8906 -4.8047 l3.2324 0 z M112.46140625 20 l-1.0254 -2.9102 l-5.9277 0 l-1.0254 2.9102 l-2.998 0 l5.1953 -14.111 l3.584 0 l5.1953 14.111 l-2.998 0 z M106.36720625 14.6387 l4.209 0 l-2.0996 -5.9863 z M132.2120703125 5.888999999999999 l2.9199 0 l0 14.111 l-3.3887 0 l-6.25 -10.088 l0 10.088 l-2.9199 0 l0 -14.111 l3.3496 0 l6.2891 10.029 l0 -10.029 z M143.779325 20 l0 -14.111 l5.1074 0 c4.502 0 6.7285 2.832 6.7285 7.0508 c0 4.2285 -2.2266 7.0605 -6.7285 7.0605 l-5.1074 0 z M146.709025 17.4121 l2.0313 0 c2.5977 0 3.7891 -1.6211 3.7891 -4.4727 s-1.1914 -4.4727 -3.7891 -4.4727 l-2.0313 0 l0 8.9453 z M180.99605 20 l-3.6719 -6.2109 l-0.84961 0 l0 6.2109 l-2.9297 0 l0 -14.111 l5.1172 0 c3.1934 0 4.541 1.8848 4.541 4.2188 c0 1.8945 -1.0742 3.125 -2.9883 3.5352 l4.248 6.3574 l-3.4668 0 z M176.47465 8.32 l0 3.3691 l1.7285 0 c1.5625 0 2.1973 -0.66406 2.1973 -1.6797 c0 -1.0059 -0.63477 -1.6895 -2.1973 -1.6895 l-1.7285 0 z M199.7902734375 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z M210.7324625 17.4121 l4.4238 0 l0 2.5879 l-7.3535 0 l0 -14.111 l2.9297 0 l0 11.523 z M231.8315234375 20 l-1.0254 -2.9102 l-5.9277 0 l-1.0254 2.9102 l-2.998 0 l5.1953 -14.111 l3.584 0 l5.1953 14.111 l-2.998 0 z M225.7373234375 14.6387 l4.209 0 l-2.0996 -5.9863 z M240.4003875 20 l5.498 -7.3633 l-5.3418 -6.748 l3.5645 0 l3.5156 4.6289 l3.5156 -4.6289 l3.5645 0 l-5.3418 6.748 l5.498 7.3633 l-3.7305 0 l-3.5059 -4.9902 l-3.5059 4.9902 l-3.7305 0 z'></path>
              </g>
            </svg>
          </div>

          <div className='img_user'>
            <img
              src='https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/208927547_306774221147382_3866266535058989464_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qsfFEmSzDSkAX_58-Ut&tn=FLKH1yZIfYV-yRh0&_nc_ht=scontent.fdad3-4.fna&oh=fcd815652fc447fa7d15056b8f515420&oe=61AA5C0B'
              alt=''
            />
            <span>Bùi Quốc Huy</span>
          </div>
        </div>
      </div>
      <div className='Admin_main'>
        <input type='checkbox' id='nav_admin' />
        <div className='bar_admin'>
          <label htmlFor='nav_admin'>
            <i className='fad fa-bars'></i>
          </label>
        </div>

        <div className='main_menu' ref={ref}>
          <label htmlFor='nav_admin' className='close_admin'>
            <p id='nav_X_admin'>&#x2715;</p>
          </label>
          <div>
            <div
              className='Title_Section'
              data-toggle='collapse'
              data-target='#dashboard'
              aria-expanded='true'
              aria-controls='dashboard'>
              <i className='icon fad fa-rocket'></i>Bảng điều khiển
              <i className='fas fa-chevron-right'></i>
            </div>
            <ul className='collapse show' id='dashboard'>
              <li className='tag_menu active' data-set='BILLORDER'>
                Đơn hàng
              </li>
              <li className='tag_menu' data-set='CUSTOMERS'>
                Khách hàng
              </li>
              <li className='tag_menu' data-set='SALES'>
                Nhân viên
              </li>
              <li className='tag_menu' data-set='ACCOUNT'>
                Tài Khoản
              </li>
              <li className='tag_menu' data-set='STORE'>
                Cửa hàng
              </li>
            </ul>
          </div>
          <div>
            <div
              className='Title_Section'
              data-toggle='collapse'
              data-target='#details'
              aria-expanded='false'
              aria-controls='details'>
              <i className='icon fad fa-calendar-week'></i>Chi tiết kho
              <i className='fas fa-chevron-right'></i>
            </div>
            <ul className='collapse' id='details'>
              <li className='tag_menu' data-set='4'>
                Thông tin kho
              </li>
              <li className='tag_menu' data-set='REVENUE'>
                Doanh thu
              </li>
            </ul>
          </div>
          <div>
            <div
              className='Title_Section'
              data-toggle='collapse'
              data-target='#products'
              aria-expanded='false'
              aria-controls='products'>
              <i className='icon fad fa-store-alt'></i>Sản phẩm - Bài báo
              <i className=' fas fa-chevron-right'></i>
            </div>
            <ul className='collapse' id='products'>
              <li className='tag_menu' data-set='PRODUCT'>
                Danh sách
              </li>
              <li className='tag_menu' data-set='PRODUCTUPLOAD'>
                Thêm sản phẩm
              </li>
            </ul>
          </div>
          <div>
            <div
              className='Title_Section'
              data-toggle='collapse'
              data-target='#suplier'
              aria-expanded='false'
              aria-controls='suplier'>
              <i className='fad fa-memory icon'></i>Nhà cung cấp
              <i className=' fas fa-chevron-right'></i>
            </div>
            <ul className='collapse' id='suplier'>
              <li className='tag_menu' data-set='SUPPLIER'>
                Danh sách nhà cung cấp
              </li>
              <li className='tag_menu' data-set='ADDSUPPLIER'>
                Thêm nhà cung cấp
              </li>
            </ul>
          </div>
          <div>
            <div
              className='Title_Section'
              data-toggle='collapse'
              data-target='#setting'
              aria-expanded='false'
              aria-controls='setting'>
              <i className='fad fa-cog icon'></i>Cài đặt
              <i className=' fas fa-chevron-right'></i>
            </div>
            <ul className='collapse' id='setting'>
              <li className='tag_menu' data-set='ROLE'>
                Nhóm quyền
              </li>
              <li className='tag_menu' data-set='PRODUCTTYPE'>
                Loại sản phẩm
              </li>
            </ul>
          </div>
        </div>
        <div className='body_render'>{bodyAdmin}</div>
      </div>
    </div>
  );
}

export default Admin;
