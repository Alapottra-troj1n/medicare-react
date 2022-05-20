import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className=" grid grid-cols-[30%,70%] container mx-auto">
            <div className="flex flex-col gap-5 mt-28">
                <Link className="btn btn-outline" to='/dashboard'>My Appointments</Link>
                <Link className="btn btn-outline" to='/dashboard/myreviews'>My Reviews</Link>
                <Link className="btn btn-outline" to='/dashboard/myhistory'>My History</Link>
            </div>
            <div className="flex justify-center items-start mt-28">
                    <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;