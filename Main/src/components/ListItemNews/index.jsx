import React, { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { getNews } from '../../app/ApiResult';
import ItemNews from '../ItemNews';
import './styles.scss';
function ListItemNews({ numList }) {
  const [listNews, setListNews] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await getNews(numList);
    setListNews(response)
  }, [numList]);
  return (
    <div className='ListItemNews'>
      <div className='tiltle_ListNews'>
        <i className='fas fa-newspaper'></i> <h3>Tin Tức</h3>
      </div>

      <Row id='center_item'>
        {listNews?.map((item, index) => {
          return (
            <Col
              key={index}
              className='Center_Item'
              xs={12}
              sm={6}
              lg={4}
              xl={3}>
              <ItemNews Item={item} />{' '}
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default memo(ListItemNews);
