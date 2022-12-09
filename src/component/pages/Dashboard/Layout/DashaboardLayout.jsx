import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashaboardLayout = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-slate-200">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 text-base-content">
                        <li><Link to='/dashboard/add-category'>Add Category</Link></li>
                        <li><Link to='/dashboard/add-portfolio'>Add Portfolio</Link></li>
                        <li><Link to='/dashboard/my-portfolio'>My Portfolio</Link></li>
                        <li><Link>Sign Out</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashaboardLayout;