import React from 'react';
import { Outlet } from 'react-router-dom';

const DisplayLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default DisplayLayout;