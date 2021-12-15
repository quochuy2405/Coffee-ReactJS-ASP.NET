import React, { memo, useEffect } from 'react';
function NotFound() {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const click= async()=> axios({
    //     method: 'post',
    //     url: '/news/add',
    //     data: {
    //       Title: 'Thu6',
    //       Content: 'Flintqwqwstone dsadadadda dadadasda dadsadad',
    //       Thumbnail:"https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg"
    //     }
    //   });

    useEffect( () => {
      
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="body_Page">
          <button type="button" className="btn btn-primary"></button>
        </div>
    );
}

export default memo(NotFound);