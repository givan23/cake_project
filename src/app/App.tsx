import React from 'react';
import {BrowserRouter} from "react-router-dom";

import './App.scss';

import RouteSwitch from "../common/routeSwitch";
import Modal from "../common/modal";

import {useAppSelector} from "../store/hooks";
import {modalDetailsSelector} from "../common/modal/Modal.slice";



function App() {
    const modalDetails = useAppSelector(modalDetailsSelector);

    return (
        <BrowserRouter>
            <RouteSwitch />
            {modalDetails?.isError && <Modal {...modalDetails}/>}
        </BrowserRouter>
    );
}

export default App;
