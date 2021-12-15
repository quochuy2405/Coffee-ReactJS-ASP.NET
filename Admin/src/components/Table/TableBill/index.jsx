import { Tooltip, Zoom } from '@mui/material';
import Fade from '@mui/material/Grow';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { DeleteId, delivery } from '../../../app/ApiResult';
import '../stylesTable.scss';
TableBill.propTypes = {
  List: PropTypes.array,
};
TableBill.defaultProps = {
  List: [],
};
export default function TableBill(props) {
  const { List, paginate, setPaginate, setFlag } = props;
  const { enqueueSnackbar } = useSnackbar();
  const ListTitleHead = [
    { Name: 'Mã số' },
    { Name: 'Tên khách' },
    { Name: 'Tổng tiền' },
    { Name: 'Địa chỉ' },
    { Name: 'Số điện thoại' },
    { Name: 'Thời gian giao' },
    { Name: 'Yêu cầu thêm' },
    { Name: 'Tình trạng' },
    { Name: 'Hủy giao' },
    { Name: 'Hoàn tất giao' },
  ];
  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      const response = await DeleteId(id,'/bill/delete')
        if (response.status === 200) {
          setFlag(true)
          enqueueSnackbar('Xóa thành công', { variant: 'success' });
        } else {
          enqueueSnackbar('Xóa thất bại', { variant: 'warning' });
        }
    }
  };
  const handleDelivery= async(id)=>{

    if (window.confirm('Xac nhan da giao?')) {
        const res= await delivery(id);
      if(res){
        enqueueSnackbar('Đa xac nhan', { variant: 'success' });
        setFlag(true)
      }
      else{
        enqueueSnackbar('Loi ', { variant: 'warning' });
      }
    
  }
}
  function changePage(page) {
    setFlag(true);
    setPaginate({
      ...paginate,
      page: page,
    });
  }
  return (
    <>
      <Stack className='mt-4' spacing={2}>
        <Pagination
          count={paginate?.count}
          color='primary'
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
                    <Tooltip
                      TransitionComponent={Zoom}
                      title={item?.Name}
                      placement='right-start'
                      arrow>
                      <td className='text_over'>{item?.Name}</td>
                    </Tooltip>
                    <td>{item?.TotalPrice}</td>
                    <Tooltip
                      TransitionComponent={Zoom}
                      title={item?.Address}
                      placement='right-start'
                      arrow>
                      <td className='text_over'>{item?.Address}</td>
                    </Tooltip>
                    <td>{item?.Phone}</td>
                    <td>{item?.Time}</td>
                    <Tooltip
                      TransitionComponent={Zoom}
                      title={item?.Note}
                      placement='right-start'
                      arrow>
                      <td className='text_over'>{item?.Note}</td>
                    </Tooltip>
                    <td className='status status-delivering'>{item?.Status}</td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-outline-danger'
                        data-set={item.Id}
                        onClick={() => HandleDelete(item?.Id)}>
                        Hủy
                      </button>
                    </td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-outline-success'
                        data-set={item.Id}
                        onClick={()=>handleDelivery(item?.Id)}
                        
                        >
                        Hoàn Tất
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
