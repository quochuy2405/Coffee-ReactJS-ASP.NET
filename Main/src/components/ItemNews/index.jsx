import React, { useState } from 'react';
import NewsRender from '../NewsRender';
import './styles.scss';

function ItemNews(props) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('body');
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const { Item } = props;
  return (
    <>
      <div
        data-aos='zoom-in-down'
        data-aos-duration='800'
        data-aos-once='true'
        className='New'>
        <div className='New_img'>
          <img src={Item.Thumbnail} alt='' />
        </div>
        <p className='tilte_new'>{Item.Title}</p>
        <p className='News_des'>{Item.Content}</p>
        <div className='btn_watch'></div>
        <div className='btn_news'>
          <p onClick={handleClickOpen('body')}>Xem</p>
        </div>
      </div>
      <NewsRender open={open} setOpen={setOpen} scroll={scroll} Item={Item} />
    </>
  );
}

export default ItemNews;
