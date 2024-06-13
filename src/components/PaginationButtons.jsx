import React from 'react';

const PaginationButtons = ({ setPage, status, page }) => {
    return (
        <div className="mt-5 mx-auto">
            <button
                disabled={status === 'loading'}
                onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 1))}
                className="mr-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
            >
                {status === 'loading' ? 'Fetching…' : 'Previous'}
            </button>
            <button disabled={status === 'loading'} onClick={() => setPage(page + 1)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                {status === 'loading' ? 'Fetching…' : 'Next'}
            </button>
        </div>
    );
};

export default PaginationButtons;
