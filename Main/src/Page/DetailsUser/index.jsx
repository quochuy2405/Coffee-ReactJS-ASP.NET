import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import jwt_decode from 'jwt-decode';
import { useSnackbar } from 'notistack';
import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { storage } from '../../app/firebaseApp';
import Iteam from '../../components/Item';
import {
  getBillsId,
  getCustomerById,
  getProducts,
  updateCustomer,
} from './../../app/ApiResult';
import { context } from './../../app/Context';
import './styles.scss';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    opacity: 0.6,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Id, Address, date, Validated, Note, Total, Status) {
  return { Id, Address, date, Validated, Note, Total, Status };
}

function Bill({ id }) {
  const [dataTable, setDataTable] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await getBillsId(id);

    setDataTable(res);
  }, [id]);
  const rows = dataTable.map((item) =>
    createData(
      item?.Id,
      item?.Address,
      item?.CreatedDate.slice(0, 10),
      item?.Validated,
      item?.Note,
      item?.TotalPrice,
      item?.Status
    )
  );

  return (
    <>
      <h2 className='title'>Hóa đơn của bạn</h2>
      <div style={{ padding: '10px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell align='right'>Mã đơn</StyledTableCell>
                <StyledTableCell align='right'>Địa chỉ</StyledTableCell>
                <StyledTableCell align='right'>Ngày Mua</StyledTableCell>
                <StyledTableCell align='right'>Xác nhận</StyledTableCell>
                <StyledTableCell align='right'>Ghi chú </StyledTableCell>
                <StyledTableCell align='right'>Tổng tiền</StyledTableCell>
                <StyledTableCell align='right'>Trạng thái</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Id}>
                  <StyledTableCell component='th' scope='row'>
                    {row.Id}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.Address}</StyledTableCell>
                  <StyledTableCell align='right'>{row.date}</StyledTableCell>
                  <StyledTableCell align='right'>
                    {row.Validated ? 'Đã xác nhận' : 'Chưa xác nhận'}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.Note}</StyledTableCell>
                  <StyledTableCell align='right'>{row.Total}</StyledTableCell>
                  <StyledTableCell align='right'>{row.Status}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
function Favorites() {
  const [list, SetList] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await getProducts();
    SetList(res);
  }, []);
  return (
    <>
      <h2 className='title'>Sản phẩm bạn yêu thích</h2>
      <div className='SanPhamTuNha'>
        <div className='ListItems'>
          <Row>
            {list?.map((item, index) => (
              <Col key={index} className='Center_Item' xs={12} sm={6} xl={4}>
                {' '}
                <Iteam Item={item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
function UserDetails({ id, setFlagAvata }) {
  const { enqueueSnackbar } = useSnackbar();
  const [urlImage, setUrlimage] = useState(undefined);
  const [image, setImage] = useState();
  const [dataForm, setDataForm] = useState({
    Id: '',
    Name: '',
    Phone: '',
    Gender: 1,
    Email: '',
    Address: '',
    Avata: '',
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const customer = await getCustomerById(id);
    setDataForm({
      Id: customer?.Id,
      Name: customer?.Name,
      Phone: customer?.Phone,
      Gender: customer?.Gender ? 1 : 0,
      Email: customer?.Email,
      Address: customer?.Address,
      Avata: customer?.Avata,
    });
  }, [id]);
  const HandleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  var HandleChangeImg = (e) => {
    const file = e.target?.files[0];
    if (file) {
      const fileType = file['type'];
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      if (!validImageTypes.includes(fileType)) {
        enqueueSnackbar('Sai định dạng', { variant: 'error' });
        setImage(undefined);
      } else {
        if (file) {
          setImage(file);
          file.preview = URL.createObjectURL(file);
        }
      }
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (urlImage) {
      console.log(urlImage);
      const res = await updateCustomer({ ...dataForm, Avata: urlImage });
      if (res?.success) {
        setFlagAvata(1)
        enqueueSnackbar('Tải lên thành công', { variant: 'success' });
      } else {
        enqueueSnackbar('Có lỗi xảy ra xin hãy thử lại', {
          variant: 'warning',
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlImage]);
  const OnSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      const UploadTask = storage.ref(`imageProducts/${image.name}`).put(image);
      await UploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          setUrlimage(null);
        },
        () => {
          storage
            .ref('imageProducts')
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrlimage(url);
            })
            .catch((error) => {
              setUrlimage(null);
            });
        }
      );
    }
  };

  return (
    <>
      <div className='infoAcc'>
        <h2 className='title'>Thông Tin Tài Khoản </h2>
        <form onSubmit={OnSubmit}>
          <table className='tableInfoAcc'>
            <tr>
              <td>Tên khách hàng</td>
            </tr>
            <input type='file' id='inputFile' onChange={HandleChangeImg} />

            <tr className='space-center'>
              <td>
                {' '}
                <input
                  className='form-control '
                  id='exampleDataList'
                  placeholder='Họ Tên'
                  name='Name'
                  value={dataForm?.Name}
                  onChange={(e) => HandleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>Số điện thoại</td>
            </tr>
            <tr>
              <td>
                {' '}
                <input
                  className='form-control '
                  id='exampleDataList'
                  maxLength={11}
                  placeholder='09xxxxxxxx'
                  name='Phone'
                  value={dataForm?.Phone}
                  onChange={(e) => HandleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>Giới tính</td>
            </tr>
            <tr>
              <td>
                <select
                  className='form-control '
                  name='Gender'
                  onChange={(e) => HandleChange(e)}>
                  <option selected={dataForm?.Gender && `selected`} value='1'>
                    Nam
                  </option>
                  <option selected={!dataForm?.Gender && `selected`} value='0'>
                    Nữ
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Email</td>
            </tr>
            <tr>
              <td>
                {' '}
                <input
                  type='email'
                  className='form-control '
                  id='exampleDataList'
                  placeholder='example@gmail.com'
                  name='Email'
                  value={dataForm?.Email}
                  onChange={(e) => HandleChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>Address</td>
            </tr>
            <tr>
              <td>
                {' '}
                <input
                  type='text'
                  className='form-control '
                  id='exampleDataList'
                  placeholder='TP.HCM'
                  name='Address'
                  value={dataForm?.Address}
                  onChange={(e) => HandleChange(e)}
                />
              </td>
            </tr>
            <tr style={{ textAlign: 'right' }}>
              <button type='submit' className='btn btn-outline-success mt-4'>
                Cập nhật
              </button>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
}
function DetailsUser(props) {
  const { checkToken ,flagAvata, setFlagAvata} = useContext(context);
  const [value, setValue] = useState(0);
  const [flag, setFlag] = useState();
  const [dataUser, setdataUser] = useState({
    Id: '',
    Name: '',
    Email: '',
    Avata: '',
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (checkToken) {
      var decoded = jwt_decode(checkToken, { payload: true });
      if (decoded?.Id) {
        const res = await getCustomerById(decoded?.Id);
        if (res)
          setdataUser({
            Id: res?.Id,
            Username: res?.Username,
            Email: res?.Email,
            Avata: res?.Avata,
          });
      }
    }
    setFlagAvata(0);
  }, [checkToken, flagAvata]);
  return (
    <div className='body_Page'>
      <div className='DetailsUser'>
        <div className='InfoPerson'>
          <div className='Info-Center'>
            <div className='avata'>
              <img
                src={
                  dataUser?.Avata ||
                  `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRWoasWo6-T5az5H6wDjcykDWbR36J8TUNOrYc95f12Gf9UN1XPoA2kL-VUkgPq-bjp4&usqp=CAU`
                }
                alt=''
              />
            </div>

            <div className='infoUser'>
              <div className='name'>
                <h3>{dataUser?.Username}</h3>
              </div>
              <div className='email'>
                <p>Email:{dataUser?.Email}</p>
              </div>
              <div className='phone'>
                <p>Phone: 0963639201</p>
              </div>
            </div>
          </div>
        </div>
        <div className='InfoDetails'>
          <Row>
            <Col className='Center_Item' xs={12}>
              {' '}
              <Box sx={{ width: 500 }}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}>
                  <BottomNavigationAction
                    label='Đơn hàng'
                    icon={
                      <i className='fad icon-tag fa-file-invoice-dollar'></i>
                    }
                  />
                  <BottomNavigationAction
                    label='Yêu tích'
                    icon={<i className='fad icon-tag fa-crown'></i>}
                  />
                  <BottomNavigationAction
                    label='Thông tin tài khoản '
                    icon={<i className='fad icon-tag fa-user-crown'></i>}
                  />
                </BottomNavigation>
              </Box>
            </Col>
          </Row>

          <div className='bodyInfoDetails'>
            {value === 0 ? (
              <Bill id={dataUser?.Id} />
            ) : value === 1 ? (
              <Favorites id={dataUser?.Id} />
            ) : (
              <UserDetails id={dataUser?.Id} setFlagAvata={setFlagAvata} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailsUser;
