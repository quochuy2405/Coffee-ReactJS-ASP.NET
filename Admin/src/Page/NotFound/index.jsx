import React, { useEffect } from 'react';

function NotFound() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
      <div><h1>Not Found</h1></div>
    );
}

export default NotFound;