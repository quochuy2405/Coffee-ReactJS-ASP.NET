/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useEffect, useState } from 'react';
import { getNews, getProducts } from '../../app/ApiResult';
import { context } from '../../app/Context';
import TableBooks from '../Table/TableProduct/Book';
import TableCoffees from '../Table/TableProduct/Coffees';
import TableNews from '../Table/TableProduct/News';

function ProductList(props) {
  const [body, setBody] = useState();
  const [flag, setFlag] = useState();
  const Context = useContext(context);
  const { TypeDataPro, setTypeDataPro } = Context;
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [paginate, setPaginate] = useState({
    page: 1,
    size: 10,
    count: 0,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    switch (TypeDataPro) {
      case 'COFFEES': {
        const Products = await getProducts(paginate, '/products');
        setPaginate({
          ...paginate,
          count: Products.totalPages,
        });
        setBody(
          <TableCoffees
            List={Products.data}
            paginate={paginate}
            setPaginate={setPaginate}
            setFlag={setFlag}
          />
        );
        setLoading(true);
        setFlag(false);
        break;
      }
      case 'BOOKS': {
        const Books = await getProducts(paginate, '/products');
        setPaginate({ paginate });
        setBody(
          <TableBooks
            List={Books?.data}
            paginate={paginate}
            setPaginate={setPaginate}
            setFlag={setFlag}
          />
        );
        setLoading(true);
        setFlag(false);
        break;
      }
      case 'NEWS': {
        const News = await getNews(paginate, '/news');
        setPaginate({ paginate });
        setBody(
          <TableNews
            List={News.data}
            paginate={paginate}
            setPaginate={setPaginate}
            setFlag={setFlag}
          />
        );
        setLoading(true);
        setFlag(false);
        break;
      }
      default: {
        const Products = await getProducts(paginate, '/products');
        setPaginate({ paginate });
        setBody(
          <TableCoffees
            List={Products.data}
            paginate={paginate}
            setPaginate={setPaginate}
            setFlag={setFlag}
          />
        );
        setFlag(false);
        break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TypeDataPro, flag, paginate.count]);
  return (
    <>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item' role='presentation'>
          <button
            onClick={() => setTypeDataPro('COFFEES')}
            className={`nav-link ${TypeDataPro === 'COFFEES' && 'active'}`}
            id='home-tab'
            data-bs-toggle='tab'
            data-bs-target='#home'
            type='button'
            role='tab'
            label={'Show'}
            aria-controls='home'
            aria-selected='true'>
            Coffees
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            onClick={() => setTypeDataPro('BOOKS')}
            className={`nav-link ${TypeDataPro === 'BOOKS' && 'active'}`}
            id='profile-tab'
            data-bs-toggle='tab'
            data-bs-target='#profile'
            type='button'
            role='tab'
            aria-controls='profile'
            aria-selected='false'>
            Books
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            onClick={() => setTypeDataPro('NEWS')}
            className={`nav-link ${TypeDataPro === 'NEWS' && 'active'}`}
            id='contact-tab'
            data-bs-toggle='tab'
            data-bs-target='#contact'
            type='button'
            role='tab'
            aria-controls='contact'
            aria-selected='false'>
            News
          </button>
        </li>
      </ul>
      {loading ? (
        body
      ) : (
        <div className='spinner-border text-success' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      )}
    </>
  );
}

export default ProductList;
