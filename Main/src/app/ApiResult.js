import axios from 'axios';
export const getNews= async(numList)=>{
      try {
        const res = await axios.get('/news');
        return res?.data.slice(0, numList);
      } catch (error) {
          
      }
}
export const getProductType= async()=>{
    try {
        const res = await axios.get('/ProductTypes');
      return res?.data;

    } catch (error) {
        
    }
}
export const getProducts= async()=>{
    try {
        const res = await axios.get('/products');
      return res?.data;
    } catch (error) {
        
    }
}
export const getBillsId= async(id)=>{
  try {
      const res = await axios.get(`/bill/${id}`);
      return res?.data;
  } catch (error) {
      return []
  }
}
//  
export const CheckoutData = async data=> {
  try {
    const response = await axios({
      method: 'post',
      url: '/bill/purchase',
      data:data
    })
  return response;
  } catch (error) {
    
  }
 
};
export const getCustomerById= async(id)=>{
  try {
      const res = await axios.get(`/customer/${id}`);
      if(res?.data)
    return res?.data;
    return [];
  } catch (error) {
    return [];
  }
}
export const updateCustomer= async(dataform)=>{
  try {
      const res = await axios.put(`/customer/edit/${dataform?.Id}`,dataform);
      if(res?.status===200)
    return {success:true};
    return {success:false};
  } catch (error) {
    return [];
  }
}
