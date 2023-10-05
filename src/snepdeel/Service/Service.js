import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Service() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark" />
    </div>
  );
}


export default Service