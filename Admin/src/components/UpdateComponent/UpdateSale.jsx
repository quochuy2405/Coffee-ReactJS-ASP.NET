/* eslint-disable jsx-a11y/alt-text */
import Fade from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import { useSnackbar } from "notistack";
import React, { useContext, useEffect, useState } from "react";
import { getListStore, getSaleId, updateEmployee } from "../../app/ApiResult";
import { context } from "../../app/Context";
import Sales from "./../Sales/index";
import "./stylesUpdateComponent/UpdateSale.scss";
function UpdateSale(props) {
  const { id } = props;
  const Context = useContext(context);
  const { enqueueSnackbar } = useSnackbar();
  const { setBodyAdmin, setFillerAdmin } = Context;
  const [valueData, setValueData] = useState({
    Id: "",
    Name: "",
    Email: "",
    Phone: "",
    Age: "",
    Gender: "",
    Address: "",
    StoreId: "",
    Salary:""
  });
  const [listStoreId, setListStoreId] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{
   const res=await getListStore('/stores');
   setListStoreId(res);
  },[])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const result = await getSaleId(id, "/employee");
    if (result) {
      setValueData({
        ...valueData,
        Id: result?.Id,
        Name: result?.Name,
        Email: result?.Email,
        Phone: result?.Phone,
        Age: result?.Age,
        Gender: result?.Gender,
        Address: result?.Address,
        StoreId: result?.StoreId || listStoreId[0]?.Id,
        Salary: result?.Salary
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id,listStoreId]);
  function Prev() {
    setBodyAdmin(<Sales />);
    setFillerAdmin("SALES");
  }
  const HandleUpload = async () => {
  
    const res = await updateEmployee(valueData);
    if (res.success && res.message === "Yes") {
      enqueueSnackbar("Đa xac nhan", { variant: "success" });
    } else {
      enqueueSnackbar("Loi ", { variant: "warning" });
    }
  };
  const handleChange = (event) => {
    setValueData({ ...valueData, [event.target.name]: event.target.value });
  };
  return (
    <div className="UpdateSale">
      <Fade in={true} timeout={200} style={{ height: "100%" }}>
        <Paper>
          <button
            style={{ width: "fit-content", position: "absolute" }}
            type="button"
            className="btn btn-success d-flex gap-2"
            onClick={() => Prev()}
          >
            <i
              style={{ fontSize: "1.5rem" }}
              className="fad fa-chevron-circle-left"
            ></i>
            <p className> Quay lại</p>
          </button>
          <h2 className="text-center pt-4">Cập nhật nhân viên </h2>
          <p style={{ width: "60%", margin: "0 auto" }}>Mã nhân viên:{id}</p>
          <div className="dataUpdate">
            <div className="form-floating mb-3 inputData">
              <input
                type="text"
                className="form-control "
                name="Name"
                color="warning"
                value={valueData?.Name}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Họ và Tên</label>
            </div>
            <div className="form-floating mb-3 inputData">
              <input
                type="text"
                className="form-control "
                name="Email"
                color="warning"
                value={valueData?.Email}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3 inputData">
              <input
                type="text"
                className="form-control "
                name="Phone"
                color="warning"
                value={valueData?.Phone}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Số điện thoại</label>
            </div>
            <div className="form-floating mb-3 inputData">
              <input
                type="text"
                className="form-control "
                name="Age"
                color="warning"
                value={valueData?.Age}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Tuổi</label>
            </div>
            <div className="form-floating mb-3 inputData">
              <select
                className="form-control "
                name="Gender"
                color="warning"
                value={valueData?.Gender}
                onChange={handleChange}
              >
                {valueData?.Gender ? (
                  <>
                    {" "}
                    <option value="1">Nam</option> <option value="0">Nữ</option>
                  </>
                ) : (
                  <>
                    {" "}
                    <option value="0">Nữ</option> <option value="1">Nam</option>{" "}
                  </>
                )}
              </select>

              <label htmlFor="floatingInput">Giới tính</label>
            </div>
            <div className="form-floating mb-3 inputData">
              <input
                type="text"
                className="form-control "
                name="Salary"
                color="warning"
                value={valueData?.Salary}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Lương</label>
            </div>
            <div className="form-floating mb-3 inputData">
              <input
                type="text"
                className="form-control "
                name="Address"
                color="warning"
                value={valueData?.Address}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Địa chỉ</label>
            </div>
            <div className="form-floating mb-3 inputData">
            <select
                type='text'
                className='form-control '
                name='StoreId'
                color='warning'
                value={valueData?.StoreId}
                onChange={handleChange}>
                  {
                    listStoreId?.map((item,index)=>(
                      <option key={index} value={item?.Id}>{item.StoreName}</option>
                    ))
                  }
           
  
              </select>
              <label htmlFor="floatingInput">StoreId</label>
            </div>
            <div className="inputData">
              <button
                type="submit"
                className="btn btn-success inputData"
                style={{ width: "100%", margin: "0 auto" }}
                onClick={HandleUpload}
              >
                Cập nhật
              </button>
            </div>
          </div>
        </Paper>
      </Fade>
    </div>
  );
}

export default UpdateSale;
