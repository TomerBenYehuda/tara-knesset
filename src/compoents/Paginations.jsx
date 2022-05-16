import React from 'react'

export default function Paginations({ postsPerPage, totalPosts, paginate, currentPage }) {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link" onClick={() => paginate(currentPage <= 1 ? currentPage == 1 : currentPage - 1)} href="#!">הקודם</a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='#!' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" onClick={() => paginate(currentPage + 1)} href="#!">הבא</a>
                </li>
            </ul>
        </nav>
    )
}
