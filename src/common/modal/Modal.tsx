import React from "react";

import styles from "./Modal.module.scss";
import errorIcon from "../../assets/error-icon.png";
import infoIcon from "../../assets/info-icon.png";

type ModalType = {
    type: number;
    message: string;
    buttonOK?: boolean;
    buttonNull?: boolean;
    children?: React.ReactNode
}

const Modal = ({type = 0, message, buttonOK, buttonNull, children}: ModalType) => {
    const types: {[key: number]: string} = {
        0: errorIcon,
        1: infoIcon
    }

    return <div className={styles.ModalCake}>

        {
            children ? children : (
                <><img className={styles.img} src={types[type]} alt="X" /><p>{message}</p></>
            )

    }
    </div>
}

export default Modal;