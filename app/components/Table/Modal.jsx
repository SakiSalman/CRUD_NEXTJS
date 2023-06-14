import React from "react";

function Modal({children, show, setShow}) {
  return <>
  
    <div className="modal-wrapper">
        <div className="container w-50">
           <div className="card-header">
            <button onClick={() => setShow(!show)} className="btn btn-warning btn-circle-o">X</button>
           </div>
           <div className="card">
              <div className="card-body">
                 {children}
              </div>
            </div>
        </div>
    </div>
  
  
  </>;
}

export default Modal;
