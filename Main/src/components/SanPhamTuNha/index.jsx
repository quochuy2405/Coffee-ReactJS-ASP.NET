import React, { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { getProductType } from '../../app/ApiResult';
import ListItem from '../ListItem';
import './styles.scss';

function SanPhamTuNha(props) {
  const [filter, SetFilter] = useState(1);
  const [ProTypes, SetProTypes] = useState([]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await getProductType();
    SetProTypes(res);
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function ChangeActive(index, filter) {
    const Loaiactive = document.querySelector('.Loai_img.active');
    const listLoai = document.querySelectorAll('.Loai_img');
    if (Loaiactive) {
      Loaiactive.classList.remove('active');
    }
    listLoai[index].classList.add('active');
    SetFilter(filter);
  }
  return (
    <div className='SanPhamTuNha'>
      <div className='Title_Section'>
        <div className='icon'>
          <i className='fad fa-trophy-alt'></i>
        </div>
        <h3>Sản Phẩm Từ Nhà</h3>
      </div>

      <div className='List_Loai'>
        <Row>
          {ProTypes?.map((item, index) => (
            <Col xs={6} md={4} lg={2} key={index}>
              <div
                data-aos='zoom-in'
                data-aos-duration='900'
                data-aos-once='true'
                className='Loai'>
                <div
                  className={`Loai_img ${!index && 'active'}`}
                  onClick={() => ChangeActive(index, item.Id)}>
                  <img
                    src={item?.Photo}
                    alt=''
                  />
                </div>
                <p>{item.Name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className='List_Loai-Item'>{<ListItem filter={filter} />}</div>
    </div>
  );
}

export default memo(SanPhamTuNha);
