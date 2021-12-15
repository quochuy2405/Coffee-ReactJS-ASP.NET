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
import UpdateCustomer from './../../UpdateComponent/UpdateCustomer';
TableCustomes.propTypes = {
  List: PropTypes.array,
};
TableCustomes.defaultProps = {
  List: [],
};
export default function TableCustomes(props) {
  const { List, paginate, setPaginate, setFlag } = props;
  const Context = useContext(context);
  const { enqueueSnackbar } = useSnackbar();
  const { setBodyAdmin } = Context;
  const ListTitleHead = [
    { Name: 'Mã số' },
    { Name: 'Họ tên' },
    { Name: 'Email' },
    { Name: 'Địa chỉ' },
    { Name: 'Số điện thoại' },
    { Name: 'Giới tính' },
    { Name: 'Xóa' },
    { Name: 'Cập nhật' },
  ];
  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      const response = await DeleteId(id,'/customer/delete')
        if (response.status === 200) {
          setFlag(true)
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
    setBodyAdmin(<UpdateCustomer id={id} />);
  }

  return (
    <>
    
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
                    <Tooltip TransitionComponent={Zoom} title={item?.Name} placement="right-start" arrow>
                    <td className='text_over'>{item?.Name}</td>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title={item?.Email} placement="right-start" arrow>
                    <td className='text_over'>{item?.Email}</td>
                    </Tooltip>
                    <Tooltip TransitionComponent={Zoom} title={item?.Address} placement="right-start" arrow>
                    <td className='text_over'>{item?.Address}</td>
                    </Tooltip>
                    <td>{item?.Phone}</td>
                    <td>{item?.Gender?"Nam":"Nữ"}</td>

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
