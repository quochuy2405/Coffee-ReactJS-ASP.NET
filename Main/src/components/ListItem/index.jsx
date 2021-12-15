import React, { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { getProducts } from '../../app/ApiResult';
import Iteam from '../Item';
import './styles.scss';
function ListItem(props) {
  const { check, numList,filter } = props;
  const [listFillter, SetListFillter] = useState([]);
  const [list, SetList] = useState([]);
 // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
   const response=await getProducts()
    SetList(response);
  }, []);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const Temp = [];
    list?.forEach((item) => {
      if (item?.ProductTypeId === filter) {
        Temp.push(item);
      }
    });
    SetListFillter(Temp);
  }, [filter, list]);
  return (
    <Row>
      <div className='ListItems'>
        {check ? (
          !list?.length ? (
            <div className='NoIteams'>
              {' '}
              <b>Không có sản phẩm</b>{' '}
            </div>
          ) : (
            list?.slice(0, numList).map((item, index) => (
              <Col
                key={index}
                className='Center_Item'
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}>
                {' '}
                <Iteam Item={item} />
              </Col>
            ))
          )
        ) : !listFillter.length ? (
          <div className='NoIteams'>
            {' '}
            <b>Không có sản phẩm</b>{' '}
          </div>
        ) : (
          listFillter?.slice(0, numList).map((item, index) =>
            item?.ProductTypeId === filter ? (
              <Col
                key={index}
                className='Center_Item'
                xs={6}
                md={6}
                lg={3}
                xl={2}>
                {' '}
                <Iteam Item={item} />
              </Col>
            ) : (
              <div key={index}></div>
            )
          )
        )}
      </div>
    </Row>
  );
}

export default memo(ListItem);
