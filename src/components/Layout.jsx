import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="bg-gray-200 w-2/4 mx-auto p-5 shadow-md">{children}</div>
        </div>
    );
};

export default Layout;
