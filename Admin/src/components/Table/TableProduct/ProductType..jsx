import { Tooltip, Zoom } from '@mui/material';
import Fade from '@mui/material/Grow';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { DeleteId } from '../../../app/ApiResult';
import { context } from '../../../app/Context';
import ProDetails from '../../ProDetails';
import '../stylesTable.scss';
import AddProductType from './../../AddComponents/AddProductType/AddProductType';
import UpdateProductType from './../../UpdateComponent/UpdateProductType';
TableProductType.propTypes = {
  List: PropTypes.array,
};
TableProductType.defaultProps = {
  List: [],
};

export default function TableProductType(props) {
  const Context = useContext(context);
  const { List, paginate, setPaginate,setFlag} = props;
  const { enqueueSnackbar } = useSnackbar();
  const { setBodyAdmin} = Context;
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const ListTitleHead = [
    { Name: 'Mã số' },
    { Name: 'Tên loại' },
    { Name: 'Mô tả' },
    { Name: 'Ảnh' },
    { Name: 'Xóa' },
    { Name: 'Cập nhật' },
    { Name: 'Chi tiết' },
  ];

  function handleDetaits(params) {
    setOpen(true);
    setDetails(params);
  }
  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      const response = await DeleteId(id,'/ProductType/delete')
        if (response.status === 200) {
          setFlag(true)
          enqueueSnackbar('Xóa thành công', { variant: 'success' });
        } else {
          enqueueSnackbar('Xóa thất bại', { variant: 'warning' });
        }
    }
  };
  function changePage(page) {
    setFlag(true)
    setPaginate({
      ...paginate,
      page: page,
    });
  }
  function HandelUpdate(id) {
        setBodyAdmin(<UpdateProductType id={id} />);
  }
  function HandelAdd() {
    setBodyAdmin(<AddProductType />);
}
  return (
    <>
       <button type='button' onClick={()=>HandelAdd()} className='btn btn-outline-success' style={{position:'absolute',right:"5%",top:"2%"}}>
        Thêm loại sản phẩm mới
     
      </button>
   
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
                    <th  key={index}>{item?.Name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                
                {List?.map((item, index) => (
                  <tr key={index} id={item?.Id}>
                    <td>{index + 1}</td>
                    <td>{item?.Id}</td>
                    <td>
                   
                      <p>
                        {item?.Name}
                    
                      </p>
                    
                    </td>
                    <td>
                    <Tooltip  TransitionComponent={Zoom} title={item?.Description} placement="right-start" arrow>
                      <p className='text_over'>
                        {item?.Description}
                      </p>
                      </Tooltip>
                    </td>
                    <td>
                    <Tooltip  TransitionComponent={Zoom} title= {item?.Photo} placement="right-start" arrow>
                      <p className='text_over'>
                        {item?.Photo}
                      </p>
                      </Tooltip>
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
                    <td>
                      <button
                        type='button'
                        className='btn btn-outline-warning'
                        data-set={item?.Id}
                
                        onClick={() =>
                          handleDetaits({
                            Photo: item?.Photo,
                            Id: item?.Id,
                            Name: item?.Name,
                            Description: item?.Description,
                        
                          })
                        }>
                        Xem chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ProDetails open={open} setOpen={setOpen} Item={details} />
          </div>
        </Paper>
      </Fade>
    </>
  );
}
