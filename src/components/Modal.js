import React from 'react'
import ReactDom from 'react-dom';
import Manage from './Manage';
import AgeVerification from './AgeVerification';

const Modal = props => {
    console.log('in manage modal',props)
    return props.isOpen?
        ReactDom.createPortal(
            <div className="modal-container">
                {props.modalBody?
                    <div className="modal-body-1">
                        {props.children}
                    </div>
                    :
                    <div className="modal-body-2">
                        <Manage>
                            {props.children}
                            <AgeVerification/>
                        </Manage>
                    </div>
                }

            </div>,
            document.querySelector('#modal')
        ):null
}
export default Modal;