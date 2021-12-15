import { Tooltip, Zoom } from '@mui/material';
import Fade from '@mui/material/Grow';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DeleteId } from '../../../app/ApiResult';
import { context } from '../../../app/Context';
import '../stylesTable.scss';
import UpdateSupplier from './../../UpdateComponent/UpdateSupplier';
TableSupplier.propTypes = {
  List: PropTypes.array,
};
TableSupplier.defaultProps = {
  List: [],
};

export default function TableSupplier(props) {
  const Context = useContext(context);
  const { List, paginate, setPaginate, setFlag } = props;
  const { enqueueSnackbar } = useSnackbar();
  const { setBodyAdmin } = Context;
  const ListTitleHead = [
    { Name: 'Mã số' },
    { Name: 'Tiêu đề' },
    { Name: 'Mô tả' },
    { Name: 'Quận' },
    { Name: 'Thành phố' },
    { Name: 'Số điện thoại' },
    { Name: 'Website' },
    { Name: 'Xóa' },
    { Name: 'Cập nhật' },
  ];

  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      const response = await DeleteId(id, '/supplier/delete');
      if (response.status === 200) {
        setFlag(true);
        enqueueSnackbar('Xóa thành công', { variant: 'success' });
      } else {
        enqueueSnackbar('Xóa thất bại', { variant: 'warning' });
      }
    }
  };
  function changePage(page) {
    setFlag(true);
    setPaginate({
      ...paginate,
      page: page,
    });
  }
  function HandelUpdate(id) {
    setBodyAdmin(<UpdateSupplier id={id} />);
  }
  return (
    <>
      <Stack className='mt-4' spacing={2}>
        <Pagination
          color='primary'
          count={paginate?.count}
          onChange={(e, value) => changePage(value)}
        />
      </Stack>
      <Fade in={true} timeout={400} className='body_page'>
        <Paper>
          <div>
            <table className='itemTable'>
              <thead className='headerTable'>
                <tr>
                  <th>STT</th>
                  {ListTitleHead?.map((item, index) => (
                    <th key={index}>{item?.Name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {List?.map((item, index) => (
                  <tr key={index} id={item?.Id}>
                    <td>{index + 1}</td>
                    <td>{item?.Id}</td>
                    <td>
                      <Tooltip
                        TransitionComponent={Zoom}
                        title={item?.Name}
                        placement='right-start'
                        arrow>
                        <p className='text_over'>{item?.Name}</p>
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip
                        TransitionComponent={Zoom}
                        title={item?.Description}
                        placement='right-start'
                        arrow>
                        <p className='text_over'>{item?.Description}</p>
                      </Tooltip>
                    </td>
                    <td>
                      <p>{item?.Address}</p>
                    </td>
                    <td>
                      <p>{item?.City}</p>
                    </td>
                    <td>
                      <p>{item?.Phone}</p>
                    </td>
                    <td>
                      <p>{item?.Url}</p>
                    </td>

                    <td>
                      <button
                        type='button'
                        className='btn btn-outline-danger'
                        data-set={item?.Id}
                        onClick={() => HandleDelete(item?.Id)}>
                        Xóa
                      </button>
                    </td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-outline-success'
                        onClick={() => HandelUpdate(item?.Id)}
                        data-set={item?.Id}>
                        Cập nhật
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Paper>
      </Fade>
    </>
  );
}
