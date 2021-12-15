import axios from "axios";
import paginate from 'paginate-array';

// ================================Customers=================================
export const getCustomeId= async(id,router)=>{

  const response = await axios.get(`${router}/${id}`);
  if (response.data) {
    return response.data;
    
  }
  return [];

}
export const updateCustomers = async datafrom => {
  try {
 
    const response = await axios.put(`/customer/edit/${datafrom.Id}`,datafrom)

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
export const getCustomers= async(pag)=>{
    const response = await axios.get("/customer");
    if (response.data) {
      const {page,size}=pag;
      const currPage = paginate(response?.data, page, size);
  
      return currPage;
      
    }
    return [];

}
// ================================News=================================
export const getNewId= async(id,router)=>{

  const response = await axios.get(`${router}/${id}`);
  if (response?.data) {
    return response?.data;
    
  }
  return [];

}
export const addNews = async datafrom => {
  try {
  await console.log(datafrom)
    const response = await axios({
      method: 'post',
      url: `/news/add`,
      data:datafrom
    })

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
export const getNews= async(pag)=>{

  const response = await axios.get("/news");
  if (response.data) {
    const {page,size}=pag;
    const currPage = paginate(response?.data, page, size);
    return currPage;
    
  }
  return [];

}
export const updateNews = async datafrom => {
  try {
 
    const response = await axios.put(`/news/edit/${datafrom.Id}`,datafrom)

    if (response?.status===200) {
     
      return { success: true, message: 'Yes' };
    }
    return { success: false, message: 'Fail' };
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};

// ================================Product=================================
export const getProductId= async(id,router)=>{

  const response = await axios.get(`${router}/${id}`);
  if (response.data) {
    return response.data;
    
  }
  return [];

}
export const getProductTypes= async(pag,router)=>{

  const response = await axios.get(router);
  if (response?.data) {
    const {page,size}=pag;
    const currPage = paginate(response?.data, page, size);
    return currPage;
    
  }
  return [];

}
export const addProType = async datafrom => {
  try {
 
    const response = await axios({
      method: 'post',
      url: `/ProductType/create`,
      data:datafrom
    })

    if (response?.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
export const getTypeId= async(id,router)=>{

  const response = await axios.get(`${router}/${id}`);
  if (response.data) {
    return response.data;
    
  }
  return [];

}
export const updateProType = async datafrom => {
  try {
 
    const response = await axios.put(`/ProductType/update/${datafrom.Id}`,datafrom)

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
export const getProducts= async(pag,router)=>{

  const response = await axios.get(router);
  if (response?.data) {
    const {page,size}=pag;
    const currPage = paginate(response?.data, page, size);
    return currPage;
    
  }
  return [];

}
export const updateProduct = async datafrom => {
  try {
 
    const response = await axios.put(`/product/update/${datafrom.Id}`,datafrom)

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
export const addProduct = async datafrom => {
  try {
 
    const response = await axios.post(`/product/create`,datafrom)
    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
// ================================Accounts=================================

export const getAccounts= async(pag,router)=>{

  const response = await axios.get(router);
  if (response?.data) {
    const {page,size}=pag;
    const currPage = paginate(response?.data, page, size);

    return currPage;
    
  }
  return [];

}
export const updateAccount= async (datafrom)=>{

  try {
 
    const response = await axios.put(`/account/edit/${datafrom.Id}`,datafrom)

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 

}
export const addAccount = async datafrom => {
  try {
 
    const response = await axios({
      method: 'post',
      url: `/account/add`,
      data:datafrom
    })

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
export const getAccountId= async(id,router)=>{

  const response = await axios.get(`${router}/${id}`);
  if (response?.data) {
    return response?.data;
    
  }
  return [];

}

// ================================Employees=================================
export const getSaleId= async(id,router)=>{

  const response = await axios.get(`${router}/${id}`);
  if (response?.data) {
    return response?.data;
    
  }
  return [];

}
export const getSales= async(pag,router)=>{

  const response = await axios.get(router);
  if (response?.data) {
    const {page,size}=pag;
    const currPage = paginate(response?.data, page, size);
    return currPage;
    
  }
  return [];

}
export const updateEmployee = async datafrom => {
  try {
 
    const response = await axios.put(`/employee/update/${datafrom.Id}`,datafrom)

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
export const addEmployee = async datafrom => {
  try {
 
    const response = await axios({
      method: 'post',
      url: `/employee/create`,
      data:datafrom
    })

    if (response.status===200) {
      return { success: true, message: 'Yes' };
    }
    else{
      return { success: false, message: 'Fail' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
// ================================Suppliers=================================
export const  getSupplierId= async(id,router)=>{

  const response = await axios.get(`${router}/${id}`);
  if (response.data) {
    return response.data;
    
  }
  return [];

}
export const getSupplier= async(pag,router)=>{

  const response = await axios.get(router);
  if (response?.data) {
    const {page,size}=pag;
    const currPage = paginate(response?.data, page, size);
    return currPage;
    
  }
  return [];

}
export const updateSupplier = async datafrom => {
  try {
 
    const response = await axios.put(`/supplier/edit/${datafrom.Id}`,datafrom)

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
export const addSupplier = async datafrom => {
  try {
 
    const response = await axios({
      method: 'post',
      url: `/supplier/add`,
      data:datafrom
    })

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
// ================================Role=================================
export const getListRoleId= async(router)=>{

  const response = await axios.get(`${router}`);
  if (response?.data) {
    return response?.data;
    
  }
  return [];

}
export const addRole = async datafrom => {
  try {
 
    const response = await axios({
      method: 'post',
      url: `/role/add`,
      data:datafrom
    })

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
export const getRoleId= async(id,router)=>{

  const response = await axios.get(`${router}/${id}`);
  if (response?.data) {
    return response?.data;
  }
  return [];

}
export const getRole= async(pag,router)=>{

  const response = await axios.get(router);
  if (response?.data) {
    const {page,size}=pag;
    const currPage = paginate(response?.data, page, size);
    return currPage;
    
  }
  return [];

}
export const updateRole= async datafrom => {
  try {
 
    const response = await axios.put(`/role/edit/${datafrom.Id}`,datafrom)

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
// ================================Bill=================================
export const getBillId= async(id,router)=>{

  const response = await axios.get(`${router}/${id}`);
  if (response.data) {
    return response.data;
    
  }
  return [];

}
export const getBill= async(pag,router)=>{

  const response = await axios.get(router);
  if (response?.data) {
    const {page,size}=pag;
    const currPage = paginate(response?.data, page, size);
    return currPage;
    
  }
  return [];

}
export const delivery= async(id)=>{

  const response = await axios.put(`/bill/delivery/${id}`);
  if(response?.status===200){
    return true;
  }
  return false;

}

// ================================Store=================================
export const getStoreId= async(id,router)=>{

  const response = await axios.get(`${router}/${id}`);
  if (response.data) {
    return response.data;
    
  }
  return [];

}
export const getListStore= async(router)=>{

  const response = await axios.get(router);
  if (response?.data) {
      return response?.data;
      
    
  }
  return [];

}
export const getStore= async(pag,router)=>{

  const response = await axios.get(router);
  if (response?.data) {
    const {page,size}=pag;
    const currPage = paginate(response?.data, page, size);
    return currPage;
    
  }
  return [];

}
export const updateStore = async datafrom => {
  try {
 
    const response = await axios.put(`/store/update/${datafrom.Id}`,datafrom)

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
export const addStore = async datafrom => {
  try {
 
    const response = await axios({
      method: 'post',
      url: `/store/create`,
      data:datafrom
    })

    if (response.status===200) {
     
      return { success: true, message: 'Yes' };
    }
  } catch (error) {
   
     return { success: false, message: 'Fail' };
  }
 
};
// ==============================Delete============================
export const DeleteId= async(id,router)=>{

  const response = await axios.delete(`${router}/${id}`);
  return response;

}
//=====================manager=======================
export const getManager= async()=>{

  const response = await axios.get(`/managers`);
  if (response.data) {
    return response?.data;
    
  }
  return [];

}