import React from 'react';
import Breadcrumb from './BreadCrumb';

function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                <Breadcrumb items={breadcrumb} />
            </div>
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}

export default PageHeader;