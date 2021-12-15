/* eslint-disable jsx-a11y/alt-text */
import { Fade, Paper } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { getTypeId, updateProType } from '../../app/ApiResult';
import { context } from '../../app/Context';
import { storage } from '../../app/firebaseUpload';
import ProductType from './../Product/ProductType/index.';
import './stylesUpdateComponent/UpdateProductType.scss';
function UpdateProductType(props) {
  const Context = useContext(context);
  const { setBodyAdmin, setFillerAdmin } = Context;
  const [valueData, setValueData] = useState({
    Id: '',
    Name: '',
    Photo: '',
    Description: '',

  });

  const { id } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    const result = await getTypeId(id,"/ProductType")

  if(result){
    setValueData({
      ...valueData,
      Id:result.Id,
      Name: result.Name,
    Photo: result.Photo,
    Description: result.Description,
    Price: result.Price,
  
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }},[id])
  function Prev() {
    setBodyAdmin(<ProductType />);
    setFillerAdmin('PRODUCTTYPE')
  }
  const handleChange= (event) => {
    setValueData({ ...valueData, [event.target.name]: event.target.value });
  };
  const { enqueueSnackbar } = useSnackbar();
  const [urlImage, setUrlimage] = useState(undefined);
  const [image, setImage] = useState();
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
      console.log(urlImage)
      const res = await updateProType({...valueData,Photo:urlImage});
      if (res?.success) {
        enqueueSnackbar('Tải lên thành công', { variant: 'success' });
      } else {
        enqueueSnackbar('Có lỗi xảy ra xin hãy thử lại', { variant: 'warning' });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlImage]);
  const HandleUpload = async () => {
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
    <div className='UpdateProductType'>
          <Fade in={true} timeout={200} style={{ height: '100%' }}>
        <Paper>
        <button
          style={{width:'fit-content', position:'absolute'}}
            type='button'
            className='btn btn-success d-flex gap-2'
            onClick={() => Prev()}>
            <i
              style={{ fontSize: '1.5rem' }}
              className='fad fa-chevron-circle-left'></i>
            <p className> Quay lại</p>
          </button>
      <h2 className='text-center pt-2'>Cập nhật loại sản phẩm </h2>
      <p  style={{width:'70%',margin:'0 auto'}}>Mã loại sản phẩm:{id}</p>
      <div className='dataUpdate'>
        <div className='form-floating mb-3 inputData'>
          <input
            type='text'
            className='form-control '
            name='Name'
            color='warning'
            value={valueData.Name}
            onChange={handleChange}
          />
          <label htmlFor='floatingInput'>Tiêu đề</label>
        </div>

     

        <input type='file' id='inputFile' onChange={HandleChangeImg} />
        <label className='inputFileLabel label--input inputData ' htmlFor='inputFile'>
          <div className='box_input'>
            <p className='text-center textUpload '>Hình ảnh mô tả</p>
            {image ? <img className='img_preview' src={image.preview} />: 
                valueData?.Photo&&<img className='img_preview' src={valueData?.Photo} />}
            <i className='fad fa-plus-circle iconUpLoad'></i>
          </div>
        </label>
        <div className='form-floating inputData'>
          <textarea
            className='form-control'
            placeholder='Leave a comment here'
            id='floatingTextarea2'
            name='Description'
            color='warning'
            value={valueData.Description}
            onChange={handleChange}
            style={{ height: '200px' }}></textarea>
          <label className="description" for='floatingTextarea2'>Nội dung</label>
        </div>
        
        <div className="button__submit">
              <button type="submit" className='btn btn-success inputData' style={{minWidth:"200px"}} onClick={HandleUpload}>Cập nhật</button>
            </div>
      </div>
      </Paper>
      </Fade>
    </div>
  );
}

export default UpdateProductType;
