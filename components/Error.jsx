import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
    // console.log(error);
     const {status, statusText, data} = error;
  return (
    <div>
        <h1>OOps!!!</h1>
        <h2>Something went wrong.</h2>
        <h2>{status + ":" + statusText}</h2>
        <h1>{data}</h1>

    </div>
  )
}

export default Error