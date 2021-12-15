import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { memo, useEffect } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import Checkout from './Page/Checkout';
import Home from './Page/Home';
import Login from './Page/Login';
import News from './Page/News';
import NotFound from './Page/NotFound';
import { default as Product } from './Page/Product';
import SignUp from './Page/SignUp';
import Store from './Page/Store/index.';
import './responsive.css';
import DetailsUser from './Page/DetailsUser/index';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>   

    <div className='App'>
   
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/product' component={Product} exact />
        <Route path='/news' component={News} exact />
        <Route path='/store' component={Store} exact />
        <Route path='/checkout' component={Checkout} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signin' component={SignUp} exact />
        <Route path='/user' component={DetailsUser} exact />
        <Route path='/:slug' component={NotFound} />
      </Switch>
    </div>
    <MessengerCustomerChat pageId='111223271362400' appId='477337363536411' />
    </>
  );
}

export default memo(App);
