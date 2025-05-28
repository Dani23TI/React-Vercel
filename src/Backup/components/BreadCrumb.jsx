import React from 'react';

function Breadcrumb({ items }) {
    return (
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
            {Array.isArray(items) ? (
                items.map((item, index) => (
                    <React.Fragment key={index}>
                        <span className="text-gray-500">{item}</span>
                        {index < items.length - 1 && (
                            <span className="text-gray-500">/</span>
                        )}
                    </React.Fragment>
                ))
            ) : (
                <span className="text-gray-500">{items}</span>
            )}
        </div>
    );
}

export default Breadcrumb;