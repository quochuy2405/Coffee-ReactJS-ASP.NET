import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { memo, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Admin from './Page/Admin/index';
import Login from './Page/Login';
import NotFound from './Page/NotFound/index';
import './responsive.css';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>   

    <div className='App'>
      <Switch>
       {
        <Route path='/' component={Login} exact />
       } 
        <Route path='/auth/admin' component={Admin} exact />
        <Route path='/:slug' component={NotFound} />
      </Switch>
    </div>
    </>
  );
}

export default memo(App);
