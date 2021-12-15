import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import CheckOut from '../../components/Checkout';
import Footer from '../../components/Footer';
function Checkout(props) {
    var counterBill=useSelector(state => state.counterBill);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <> 
        {
         counterBill===0?<Redirect to="/Product"/>: <div className="body_Page">
         <CheckOut />
         <Footer/>
        </div>
        }

        </>
    );
}

export default memo(Checkout);