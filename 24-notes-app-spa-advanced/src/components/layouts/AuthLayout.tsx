import {Outlet} from "react-router";
import {Fragment} from "react";

const AuthLayout = () => {
    return (
        <Fragment>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4">
            <Outlet/>
        </div>
        </Fragment>
    );
};

export default AuthLayout;