import axios from 'axios';
import { createContext } from 'react';

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  // const [authstate, dispatch] = useReducer(authReducer, {
  //   authLoading: true,
  //   isAuthenticated: false,
  //   user: null,
  // });
  const loginUser = async datafrom=> {
    try {
      const response = await axios({
        method: 'post',
        url: '/customer/login',
        data:datafrom
      })
      // '/authen/login',
      if (response?.data?.Token) {
        localStorage.setItem('accessToken', response?.data?.Token);
      }
      return { success: true, data:response.data };
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: 'Fail' };
    }
   
  };
  const signUpUser = async datafrom=> {
    try {
      const response = await axios.post('/customer/signup',datafrom )
      if (response?.data==='') {
        return { success: true, data:0 };
        
      }
      return { success: false, data:response?.data };
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false,  data: 1 };
    }
   
  };
  const authContextData = { loginUser,signUpUser };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;