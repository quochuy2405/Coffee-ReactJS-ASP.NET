import Fade from '@mui/material/Grow';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import '../stylesTable.scss';
import UpdateSale from '../../UpdateComponent/UpdateSale';
import { context } from '../../../app/Context';
import AddSale from './../../AddComponents/AddSales/AddSales';
import { Tooltip, Zoom } from '@mui/material';
import { useSnackbar } from 'notistack';
import { DeleteId } from '../../../app/ApiResult';
TableSales.propTypes = {
  List: PropTypes.array,
};
TableSales.defaultProps = {
  List: [],
};
export default function TableSales(props) {
  const { List, paginate, setPaginate, setFlag } = props;
  const Context = useContext(context);
  const { setBodyAdmin } = Context;
  const { enqueueSnackbar } = useSnackbar();
  const ListTitleHead = [
    { Name: 'Mã số' },
    { Name: 'Họ tên' },
    { Name: 'Tuổi' },
    { Name: 'Giới tính' },
    { Name: 'Email' },
    { Name: 'Số điện thoại' },
    { Name: 'Địa chỉ' },
    { Name: 'Lương' },
    { Name: 'Mã cửa hàng' },
    { Name: 'Xóa' },
    { Name: 'Cập nhật' },
  ];
  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      const response = await DeleteId(id, '/employee/delete');
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
    setBodyAdmin(<UpdateSale id={id} />);
  }
  function HandelAddSale() {
    setBodyAdmin(<AddSale />);
  }
  return (
    <>
      <button
        type='button'
        onClick={() => HandelAddSale()}
        className='btn btn-outline-success'
        style={{ position: 'absolute', right: '5%', top: '2%' }}>
        Thêm nhân viên mới
      </button>
      <Stack className='mt-4' spacing={2}>
        <Pagination
          count={paginate?.count}
          color='primary'
          onChange={(e, value) => changePage(value)}
        />
      </Stack>{' '}
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
                  <tr key={index} id={index}>
                    <td>{index + 1}</td>
                    <td>{item?.Id}</td>
                    <Tooltip
                      TransitionComponent={Zoom}
                      title={item?.Name}
                      placement='right-start'
                      arrow>
                      <td className='text_over'>{item?.Name}</td>
                    </Tooltip>
                    <td>{item?.Age}</td>
                    <td>{item?.Gender ? 'Nam' : 'Nữ'}</td>
                    <Tooltip
                      TransitionComponent={Zoom}
                      title={item?.Email}
                      placement='right-start'
                      arrow>
                      <td className='text_over'>{item?.Email}</td>
                    </Tooltip>
                    <td>{item?.Phone}</td>
                    <Tooltip
                      TransitionComponent={Zoom}
                      title={item?.Address}
                      placement='right-start'
                      arrow>
                      <td className='text_over'>{item?.Address}</td>
                    </Tooltip>
                    <td>{item?.Salary}</td>
                    <td>{item?.StoreId}</td>

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
                        onClick={() => HandelUpdate(item?.Id)}
                        className='btn btn-outline-success'
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
