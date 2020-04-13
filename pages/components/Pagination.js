import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="ui horizontal list">
            {pageNumbers.map(number => (
                <div  key={number} className="item">
                        <div className="content">
                            <div className="header"><a onClick={() => paginate(number)} >
                                {number}
                            </a></div>
                        </div>
                </div>
                                     ))}
            </div>
    );
};

export default Pagination;
