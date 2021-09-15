import React, {useState} from "react";
import {Modal, ModalHeader, ModalBody} from "reactstrap";
import "./modal.css"

export const ModalComponent = ({open, toogle, content}) => {

    const handleClick = () => {
        toogle(false);
    };

    const modalStyle = {
        width: '700px',
        backgroundColor: 'red'
    };

    const getContent = () => {
        let arrayVal = Object.entries(content).map(item => item[1]);
        return arrayVal[0];
    };
    console.log(content);
    return (
        <Modal isOpen={open} toogle={toogle} className={"modal-xl"}>
            <ModalHeader className={"text_style"}> <strong>Content of the file</strong>  </ModalHeader>
            <ModalBody>
                <div className={"text_style"}>
                    <p><strong>Name:</strong> {getContent().filename}</p>
                    <p><strong>Type:</strong> {getContent().type}</p>
                    <p><strong>Language:</strong> {getContent().language}</p>
                    <p><strong>Size:</strong> {getContent().size}</p>
                    <p><strong>URL:</strong> {getContent().raw_url}</p>
                    <button className={"modal-btn"} onClick={handleClick}>Close</button>
                </div>
            </ModalBody>


        </Modal>
    );
};
