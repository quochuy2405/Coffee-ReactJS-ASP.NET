import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='footer_top'>
        <div className='container_'>
          <div className='row'>
            <div className='col-4 col-sm-3 col-lg-2'>
              <div className='footer_logo'>
                <img
                  src='https://www.thecoffeehouse.com/_nuxt/img/logo-footer.72c86fc.png'
                  alt=''
                />
              </div>
            </div>
            <div className='col-8 col-sm-9 col-lg-10'>
              <ul className='footer_nav_list mb-0 row'>
                <li className='col-12 col-md-6 col-lg-3'>
                  <div className='footer_navbar_item'>
                    <div
                      className='changeplus'
                      data-toggle='collapse'
                      data-target='#footer_navbar_1'
                      aria-expanded='false'
                      aria-controls='footer_navbar_1'>
                      <span className='icon mr-1'>
                        <i className='fa fa-plus' aria-hidden='true'></i>
                        <i className='fas fa-minus'></i>
                      </span>
                      <span> Thông tin website</span>
                    </div>
                    <ul
                      id='footer_navbar_1'
                      className='footer_navbar_item_body collapse'>
                      <li>
                        <Link to='#/' href='#'>
                          Trang chủ
                        </Link>
                      </li>
                      <li>
                        <Link to='#/' href='#'>
                          Đặt hàng
                        </Link>
                      </li>
                      <li>
                        <Link to='#/' href='#'>
                          Tin tức
                        </Link>
                      </li>
                      <li>
                        <Link to='#/' href='#'>
                          Tuyển dụng
                        </Link>
                      </li>
                      <li>
                        <Link to='#/' href='#'>
                          Khuyến mãi
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='col-12 col-md-6 col-lg-3'>
                  <div className='footer_navbar_item'>
                    <div
                      data-toggle='collapse'
                      className='changeplus'
                      data-target='#footer_navbar_2'
                      aria-expanded='false'
                      aria-controls='footer_navbar_2'>
                      <span className='icon mr-1'>
                        <i className='fa fa-plus' aria-hidden='true'></i>
                        <i className='fas fa-minus'></i>
                      </span>
                      <span> Điều khoản sử dụng</span>
                    </div>
                    <ul
                      id='footer_navbar_2'
                      className='footer_navbar_item_body collapse'>
                      <li>
                        <Link to='#/' href='#'>
                          Quy chế website
                        </Link>
                      </li>
                      <li>
                        <Link to='#/' href='#'>
                          Bảo mật thông tin
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='col-12 col-md-6 col-lg-3'>
                  <div className='footer_navbar_item'>
                    <div
                      data-toggle='collapse'
                      className='changeplus'
                      data-target='#footer_navbar_3'
                      aria-expanded='false'
                      aria-controls='footer_navbar_3'>
                      <span className='icon mr-1'>
                        <i className='fa fa-plus' aria-hidden='true'></i>
                        <i className='fas fa-minus'></i>
                      </span>
                      <span> Hotline</span>
                    </div>
                    <ul
                      id='footer_navbar_3'
                      className='footer_navbar_item_body collapse'>
                      <li>
                        <Link to='#/' href='#'>
                          Đặt hàng 1800 6936 (07:00-21:00)
                        </Link>
                      </li>
                      <li>
                        <Link to='#/' href='#'>
                          Hỗ trợ 028.71.087.088 (07:00-21:00)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='col-12 col-md-6 col-lg-3'>
                  <div className='footer_navbar_item'>
                    <div
                      data-toggle='collapse'
                      className='changeplus'
                      data-target='#footer_navbar_4'
                      aria-expanded='false'
                      aria-controls='footer_navbar_4'>
                      <span className='icon mr-1'>
                        <i className='fa fa-plus' aria-hidden='true'></i>
                        <i className='fas fa-minus'></i>
                      </span>
                      <span> Liên hệ</span>
                    </div>
                    <ul
                      id='footer_navbar_4'
                      className='footer_navbar_item_body collapse'>
                      <li>
                        <Link to='#/' href='#'>
                          UIT bla bla bla
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_bottom'>
        <div className='row container-lg container-fluid'>
          <div className='col-7 col-lg-4'>
            <p className='footer__bottom__text mb-0'>
              Copyright © 2021 The Coffee House. All rights reserved.
            </p>
          </div>
          <div className='col-lg-6 d-none d-lg-block'></div>
          <div className='col-5 col-lg-2'>
            <div className='footer__bottom-logo ml-auto'>
              <Link
                to='#/'
                href='http://online.gov.vn/Home/WebDetails/48042'
                target='blank'>
                <img
                  src='https://www.thecoffeehouse.com/_nuxt/img/active.4cba64f.png'
                  alt=''
                  className='ml-auto'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
