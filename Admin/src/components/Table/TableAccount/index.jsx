import Fade from '@mui/material/Grow';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DeleteId } from '../../../app/ApiResult';
import { context } from '../../../app/Context';
import AddAccount from '../../AddComponents/AddAccount/AddAccount';
import UpdateAccount from '../../UpdateComponent/UpdateAccount';
import '../stylesTable.scss';
TableAccount.propTypes = {
  List: PropTypes.array,
};
TableAccount.defaultProps = {
  List: [],
};
export default function TableAccount(props) {
  const { enqueueSnackbar } = useSnackbar();
  const ListTitleHead = [
    { Name: 'ID' },
    { Name: 'Username' },
    { Name: 'Password' },
    { Name: 'Role' },
    { Name: 'Xóa' },
    { Name: 'Cập nhật' },
  ];
  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      const response = await DeleteId(id, '/account/delete');
      if (response.status === 200) {
        setFlag(true);
        enqueueSnackbar('Xóa thành công', { variant: 'success' });
      } else {
        enqueueSnackbar('Xóa thất bại', { variant: 'warning' });
      }
    }
  };
  const { List, paginate, setPaginate, setFlag } = props;
  const Context = useContext(context);
  const { setBodyAdmin } = Context;
  function changePage(page) {
    setFlag(true);
    setPaginate({
      ...paginate,
      page: page,
    });
  }
  function HandelUpdate(id) {
    setBodyAdmin(<UpdateAccount id={id} />);
  }
  function HandelAddAccount() {
    setBodyAdmin(<AddAccount />);
  }
  return (
    <>
      <button
        type='button'
        onClick={() => HandelAddAccount()}
        className='btn btn-outline-success'
        style={{ position: 'absolute', right: '5%', top: '2%' }}>
        Tạo tài khoản mới
      </button>
      <Stack className='' spacing={2}>
        <Pagination
          count={paginate?.count}
          color='primary'
          onChange={(e, value) => changePage(value)}
        />
      </Stack>
      <Fade direction='up' in={true} timeout={400} className='body_page'>
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
                    <td className='text_over'>{item?.Username}</td>
                    <td className='text_over'>{item?.Password}</td>
                    <td className='text_over'>{item?.RoleId}</td>
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
