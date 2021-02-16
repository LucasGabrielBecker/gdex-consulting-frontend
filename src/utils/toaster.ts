import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const toaster = (msg:String, category: String) => {
    switch(category.toLowerCase()){
        case "info":
            return toast.info(msg)

        case "succes":
            return toast.success(msg)
        
        case "error":
            return toast.error(msg)
    }
    
    return toast(msg)
}

export default toaster ;