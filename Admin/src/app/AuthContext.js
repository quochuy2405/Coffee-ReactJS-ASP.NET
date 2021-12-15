import axios from 'axios';
import { createContext } from 'react';

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {


  const loginUser = async datafrom=> {
    try {
   
      const response = await axios({
        method: 'post',
        url: '/admin/login',
        data:datafrom
      })

      if (response.data.Id) {

        localStorage.setItem('accessToken', response.data.Id);

      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: 'Fail' };
    }
   
  };
  const signInUser = async datafrom=> {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      // const response = await axios.post('https://jsonplaceholder.typicode.com/todos/1',datafrom);
      if (response.data.userId) {
        localStorage.setItem('accessToken', response.data.userId);
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: 'Fail' };
    }
   
  };
  const authContextData = { loginUser,signInUser };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;